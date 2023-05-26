import { Variants } from "framer-motion";
import { useRecoilState } from "recoil";
import { isTopAtom } from "../atom";

import { ReactComponent as DownArr } from "../img/down-arrow.svg";
import {
	FlareFace,
	SpanMsg,
	TitleBottomBar,
	TopSectionHeight,
	TopSectionWrapper,
	TopTitle,
	TopTitleBox,
} from "../pages/HomeElements";
import SocialMediaBar from "./SocialMediaBar";

const arrowBoxVariants1: Variants = {
	default: {
		opacity: 0,
		translateY: -40,
	},
	onShow: {
		translateY: 0,
		opacity: 1,
	},
};

function TopContainer() {
	const [isTop, setIsTop] = useRecoilState<boolean>(isTopAtom);

	return (
		<TopSectionWrapper>
			<TopSectionHeight>
				<SocialMediaBar />
				<TopTitleBox>
					<FlareFace src={`${process.env.PUBLIC_URL}/img/faceCircle.png`} />
					<TopTitle>
						<h2>I'm</h2>
						<h2>Flare</h2>
						<h2>.</h2>
					</TopTitle>
					<SpanMsg>donut</SpanMsg>
				</TopTitleBox>
				<TitleBottomBar
					variants={arrowBoxVariants1}
					initial="onShow"
					animate={isTop ? "onShow" : "default"}
				>
					<span>갤러리 보기</span>
					<DownArr />
				</TitleBottomBar>
			</TopSectionHeight>
		</TopSectionWrapper>
	);
}

export default TopContainer;
