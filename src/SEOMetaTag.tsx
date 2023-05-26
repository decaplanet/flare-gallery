import { Helmet } from "react-helmet";

const SEOMetaTag = () => {
	return (
		<Helmet>
			<title>Flare</title>

			<meta name="description" content="donut" />
			<meta name="keywords" content="2D애니메이터, 아티스트" />

			<meta name="theme-color" content="#7B6DFC" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="Flare" />
			<meta property="og:description" content="donut" />
			<meta
				property="og:image"
				content={`${process.env.PUBLIC_URL}/img/thumbnail.png`}
			/>
			<meta
				property="og:url"
				content="https://NampleS.github.io/flare-gallery"
			/>

			<meta name="twitter:title" content="Flare" />
			<meta name="twitter:description" content="donut" />
			<meta
				name="twitter:image"
				content={`${process.env.PUBLIC_URL}/img/thumbnail.png`}
			/>
			<meta name="twitter:card" content="summary_large_image" />

			<link rel="apple-touch-icon" href={`%PUBLIC_URL%/logo192.png`} />
			<link rel="manifest" href={`${process.env.PUBLIC_URL}/manifest.json`} />
		</Helmet>
	);
};

export default SEOMetaTag;
