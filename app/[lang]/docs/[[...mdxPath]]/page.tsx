import { generateStaticParamsFor, importPage } from 'nextra/pages';
import { useMDXComponents } from '../../../../mdx-components';

export const generateStaticParams = generateStaticParamsFor('mdxPath', 'lang');

type PageProps = {
  params: Promise<{
    mdxPath: string[];
    lang: string;
  }>;
};

export async function generateMetadata(props: PageProps) {
  const { mdxPath, lang } = await props.params;
  const { metadata } = await importPage(mdxPath, lang);
  return metadata;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const { mdxPath, lang } = params;
  const result = await importPage(mdxPath, lang);
  const { default: MDXContent, toc, metadata } = result;
  const customToc = [...toc, ...((metadata as any)?.toc || [])];

  const Wrapper = useMDXComponents().wrapper;

  return (
    <Wrapper toc={customToc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
