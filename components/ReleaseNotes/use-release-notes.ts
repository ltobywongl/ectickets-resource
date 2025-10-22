import { useEffect, useState } from 'react';
import { compileMdx } from 'nextra/compile';
import useSWR from 'swr';
import config from '@/config';

export interface Release {
  id: number;
  tag_name: string;
  created_at: string;
  body: string;
}

export interface TOC {
  value: string;
  depth: string;
  id: string;
}

export function useReleaseNotes() {
  const releaseNotesUrl = config.releaseNotes.url;
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const [compiledReleases, setCompiledReleases] = useState<Release[]>([]);
  const [error] = useState<string | null>(null);

  const {
    data,
    error: swrError,
    isLoading,
  } = useSWR<{
    releases: Release[];
  }>(`${releaseNotesUrl}/api/docs/release`, fetcher);

  useEffect(() => {
    if (data && !isLoading && !error) {
      const fetchReleases = async () => {
        const releases = await Promise.all(
          data.releases.map(async (release) => ({
            ...release,
            created_at: new Date(release.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
            body: await compileMdx(release.body),
          }))
        );
        setCompiledReleases(releases);
      };
      fetchReleases();
    }
  }, [data, isLoading, error]); // Add isLoading and error to the dependency array

  return { data: compiledReleases, error: error || swrError, isLoading } as const;
}
