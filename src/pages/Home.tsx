import { useMotionValueEvent, useScroll, Variants } from "framer-motion";
import { useRecoilState } from "recoil";

import { isTopAtom } from "../atom";
import BgContainer from "../components/BGContainer";
import GalleryContainer from "../components/GalleryContainer";
import SocialMediaBar from "../components/SocialMediaBar";
import TopContainer from "../components/TopContainer";
import { ReactComponent as UpArr } from "../img/up-arrow.svg";
import {
	EntireWidth,
	SpanMsg,
	Title,
	TitleBottomBar,
	TitleBox,
	Wrapper,
} from "./HomeElements";

const arrowBoxVariants2: Variants = {
	default: {
		opacity: 0,
		translateY: 150,
	},
	onShow: {
		translateY: 0,
		opacity: 1,
	},
};

function Home() {
	const { scrollYProgress } = useScroll();
	const [isTop, setIsTop] = useRecoilState<boolean>(isTopAtom);

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		if (latest === 0) {
			setIsTop(true);
		} else {
			setIsTop(false);
		}
	});

	return (
		<>
			<Wrapper>
				<BgContainer />
				<EntireWidth>
					<TopContainer />
					<TitleBottomBar
						variants={arrowBoxVariants2}
						initial="default"
						animate={isTop ? "default" : "onShow"}
					>
						<UpArr />
						<span>메인 화면으로</span>
					</TitleBottomBar>
					<TitleBox style={{ marginTop: 90 }}>
						<Title>
							<h2>Here are my works.</h2>
						</Title>
						<SpanMsg>작품 갤러리.</SpanMsg>
					</TitleBox>
					<GalleryContainer />
					<TitleBox style={{ marginTop: 90 }}>
						<SpanMsg>It seems like you’ve scrolled a lot!</SpanMsg>
						<Title>
							<h2>Thank you.</h2>
						</Title>
					</TitleBox>
					<div style={{ marginBottom: 30 }} />
					<SocialMediaBar />
					<div style={{ marginBottom: 120 }} />
				</EntireWidth>
			</Wrapper>
		</>
	);
}

export default Home;
