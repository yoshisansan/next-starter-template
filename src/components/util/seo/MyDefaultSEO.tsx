import { DefaultSeo } from 'next-seo';

// import { useRouter } from 'next/router';
import ThumbNail from '@/public/img/jindai-thumb-ogp.jpg';

export const siteName = '神代文字変換メーカー';
export const defaultDescription =
  '神代文字を変換して即座に透過した画像として保存できる便利ツールサイトです。漢字が伝わる以前から使用されていたものの現段階では歴史的資料に恵まれておらず謎の多い神代文字を日本語から変換しよう。';

/** オリジン */
const Origin = process.env.NEXT_PUBLIC_FRONTEND_ORIGIN ?? 'http://localhost:3000';
/** OG画像幅。Facebook推奨に合わせ1200 */
const ogImageWidth = 1200;
/** OG画像高さ。Facebook推奨に合わせ630 */
const ogImageHeight = 630;

/** デフォルトのSEO設定。
 * 必要な部分をページ毎で上書きして使用する
 * @see https://github.com/garmeeh/next-seo
 */
function MyDefaultSEO(): JSX.Element {
  // クエリを含める場合はasPathなどを使用する
  // const { locale, asPath } = useRouter();
  const titleTemplate = `${siteName}`;

  return (
    <DefaultSeo
      defaultTitle={siteName}
      titleTemplate={titleTemplate}
      description={defaultDescription}
      twitter={{
        site: '@akifumiweb',
        cardType: 'summary_large_image'
      }}
      openGraph={{
        url: `${process.env.NEXT_PUBLIC_FRONTEND_ORIGIN}${ThumbNail.src}`,
        title: siteName,
        description: defaultDescription,
        type: 'web',
        images: [
          {
            url: `${Origin}${ThumbNail.src}`,
            width: ogImageWidth,
            height: ogImageHeight,
            alt: `神代文字変換メーカーのサムネイル画像`
          }
        ],
        site_name: siteName
      }}
    />
  );
}

export default MyDefaultSEO;
