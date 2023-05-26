import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const BgHorizontalContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: flex-start;
	top: 0;
	width: 100%;
	height: 100vh;
	z-index: -5;
	max-width: 1355px;

	@media only screen and (max-width: 1350px) {
		overflow: hidden;
	}
`;

export const BgSmallCircle = styled.div`
	aspect-ratio: 1;
	display: block;
	position: absolute;
	top: clamp(0px, 65%, 600px);
	right: 83%;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background-color: #2d2d2d;
	opacity: 100%;
	transition: opacity 0.5s ease-in-out;

	@media screen and (max-width: 1400px) {
		opacity: 0%;
	}
`;

export const BgVerticalContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-end;
	width: 60%;
	height: 80%;
	max-height: 686px;
`;

export const BgCircle = styled.div`
	aspect-ratio: 1;
	position: absolute;
	width: clamp(500px, 200vw, 1000px);
	height: auto;
	background-color: #2d2d2d;
	border-radius: 100%;
`;

export const EntireWidth = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	@media screen and (min-width: 992px) {
		width: 992px;
	}
`;

export const TopSectionWrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TopSectionHeight = styled.div`
	width: 100%;
	height: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const NavBar = styled.div`
	width: 80%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	gap: 10px;

	a:nth-child(1) div {
		background-color: #5865f2;
	}
	a:nth-child(2) div {
		background-color: #1d9bf0;
		svg {
			transform: translate(1px, 1px);
		}
	}
	a:nth-child(3) div {
		background-color: #ff0000;
	}
`;

export const LinkHover = styled(motion.a)``;

export const Circle = styled.div`
	position: relative;
	cursor: pointer;
	background-color: white;
	width: 45px;
	height: 45px;
	border-radius: 45px;
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		fill: white;
		width: 30px;
	}
`;

export const TopTitleBox = styled.div`
	width: 80%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding-bottom: 5vh;
`;

export const TitleBox = styled.div`
	width: 80%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

export const FlareFace = styled.img`
	width: 70px;
	height: 70px;
`;

export const TopTitle = styled.h2`
	display: flex;
	flex-direction: row;
	font-weight: 850;
	margin-top: 35px;
	letter-spacing: -1px;

	@media only screen and (max-width: 479px) and (min-width: 0px) {
		font-size: 35px;
	}
	@media only screen and (max-width: 990px) and (min-width: 480px) {
		font-size: 40px;
	}
	@media only screen and (min-width: 991px) {
		font-size: 45px;
	}

	h2:nth-child(1) {
		margin-right: 11px;
	}

	h2:nth-child(2) {
		color: #7b6dfc;
	}
`;

export const Title = styled.h2`
	display: flex;
	flex-direction: row;
	font-weight: 850;
	letter-spacing: -1px;

	@media only screen and (max-width: 479px) and (min-width: 0px) {
		font-size: 35px;
	}
	@media only screen and (max-width: 990px) and (min-width: 480px) {
		font-size: 40px;
	}
	@media only screen and (min-width: 991px) {
		font-size: 45px;
	}

	&:nth-child(1) {
		margin-top: 35px;
	}
	&:nth-child(2) {
		margin-top: 12px;
	}
`;

export const SpanMsg = styled.span`
	color: #aeaeae;
	letter-spacing: -0.5px;
	font-weight: 550;

	&:nth-child(1) {
		margin-top: 3px;
	}
	@media only screen and (max-width: 479px) and (min-width: 0px) {
		font-size: 14px;
	}
	@media only screen and (max-width: 990px) and (min-width: 480px) {
		font-size: 15px;
	}
	@media only screen and (min-width: 991px) {
		font-size: 16px;
	}
`;

export const TitleBottomBar = styled(motion.div)`
	height: 45px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5px;
	margin-bottom: 10px;

	span {
		color: #8c8c8c;
		font-weight: 550;
		@media only screen and (max-width: 479px) and (min-width: 0px) {
			font-size: 13px;
		}
		@media only screen and (max-width: 990px) and (min-width: 480px) {
			font-size: 15px;
		}
		@media only screen and (min-width: 991px) {
			font-size: 15px;
		}
	}
	svg {
		fill: #575757;
	}
`;

export const DiscordExpand = styled(motion.div)`
	z-index: -1;
	position: absolute;
	top: 0;
	bottom: 0;
	width: 1px;
	height: 45px;
	transform-origin: left;
`;

export const CircleMotion = styled(motion.div)`
	z-index: -1;
	position: absolute;
	cursor: pointer;
	background-color: white;
	width: 45px;
	height: 45px;
	border-radius: 45px;
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		fill: white;
		width: 30px;
	}
`;

export const DiscordExpandText = styled(motion.span)`
	position: absolute;
	width: 120px;
	color: white;
	font-weight: 650;
	font-size: 14px;
`;

export const GalleryBox = styled.div`
	margin-top: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const GalleryGrid = styled.div`
	width: 80%;
	display: grid;
	grid-template-columns: 2fr 2fr 2fr;
	grid-template-rows: auto;
	grid-column-gap: 10px;
	grid-row-gap: 10px;
`;

export const GalleryImg = styled.img`
	width: 100%;
	aspect-ratio: 1/1;
	object-fit: cover;
`;

export const GalleryVideo = styled.video`
	width: 100%;
	aspect-ratio: 1/1;
	object-fit: cover;
`;
