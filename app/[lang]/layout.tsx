import '@gfazioli/mantine-marquee/styles.layer.css';
import '@gfazioli/mantine-text-animate/styles.layer.css';
import '@mantine/core/styles.css';
import '@mantine/core/styles.layer.css';

import { Analytics } from '@vercel/analytics/next';
import { Layout } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { MantineFooter, MantineNavBar } from '@/components';
import config from '@/config';
import { theme } from '../../theme';

import './global.css';

export const metadata = config.metadata;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const pageMap = await getPageMap(`/${lang}/docs`);
  const { nextraLayout, head } = config;

  return (
    <html lang={lang} dir="ltr" {...mantineHtmlProps}>
      <Head>
        <ColorSchemeScript
          nonce={head.mantine.nonce}
          defaultColorScheme={head.mantine.defaultColorScheme}
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme={head.mantine.defaultColorScheme}>
          <Layout
            i18n={[{ locale: 'en', name: 'English' }]}
            navbar={<MantineNavBar />}
            pageMap={pageMap}
            footer={<MantineFooter />}
            sidebar={nextraLayout.sidebar}
            docsRepositoryBase={config.nextraLayout.docsRepositoryBase}
          >
            {children}
          </Layout>
        </MantineProvider>
        <Analytics />
      </body>
    </html>
  );
}
