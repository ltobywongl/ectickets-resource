import { MetadataRoute } from 'next';
import { URL } from 'node:url';
import { Folder, MdxFile, Meta, MetaJsonFile, PageMapItem } from 'nextra';
import { getPageMap } from 'nextra/page-map';
import siteConfig from '@/config';

interface PageType {
  title: string;
  type?: 'page';
  display?: string;
}

interface SitemapEntry {
  url: string;
  lastModified: string;
}

export function isPageType(value: unknown): value is PageType {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  if ('title' in candidate) {
    if ('type' in candidate && candidate.type !== 'page') {
      return false;
    }

    return true;
  }

  return false;
}

const isMetaJSONFile = (value: unknown): value is MetaJsonFile =>
  typeof value === 'object' && value !== null && 'data' in value;

const isFolder = (value: unknown): value is Folder =>
  typeof value === 'object' &&
  value !== null &&
  'name' in value &&
  'route' in value &&
  'children' in value;

const isMDXFile = (value: unknown): value is MdxFile =>
  typeof value === 'object' &&
  value !== null &&
  'name' in value &&
  'route' in value &&
  'frontMatter' in value;

// Filter out hidden pages
const isNotHiddenPage = ([_, value]: [string, Meta]): boolean =>
  !isPageType(value) || value.display !== 'hidden';

const toSitemapEntry = (pageMapEntry: PageMapItem): SitemapEntry[] => {
  if (isFolder(pageMapEntry)) {
    return parsePageMapItems(pageMapEntry.children);
  } else if (isMDXFile(pageMapEntry)) {
    const { frontMatter, route } = pageMapEntry;

    return [
      {
        url: route,
        lastModified: frontMatter?.timestamp
          ? new Date(frontMatter.timestamp).toISOString()
          : new Date().toISOString(),
      },
    ];
  }

  return [];
};

const parsePageMapItems = (items: PageMapItem[]): SitemapEntry[] => {
  const metadata = Object.entries(items.find((item) => isMetaJSONFile(item))?.data ?? []);

  const siteMapEntries: (SitemapEntry | null)[] = metadata
    .filter(isNotHiddenPage)
    .map(([key, _]) => items.find((item) => 'name' in item && item.name === key))
    .filter((item): item is PageMapItem => !!item)
    .flatMap((pageMapEntry) => toSitemapEntry(pageMapEntry));

  return siteMapEntries.filter((entry): entry is SitemapEntry => !!entry);
};

const sitemapPromise = async (): Promise<MetadataRoute.Sitemap> => {
  const baseUrl = siteConfig.metadata.metadataBase;
  const languages = siteConfig.languages;
  const siteMapEntries: SitemapEntry[] = [];

  for (const language of languages) {
    const pageMap = await getPageMap(`/${language.code}/docs`);

    siteMapEntries.push(
      ...parsePageMapItems(pageMap).map((entry) => ({
        url: new URL(`${language.code}${entry.url}`, baseUrl).toString(),
        lastModified: entry.lastModified,
      }))
    );
  }

  return siteMapEntries;
};

export default sitemapPromise;
