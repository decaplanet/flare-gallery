import {
	BgCircle,
	BgHorizontalContainer,
	BgSmallCircle,
	BgVerticalContainer,
} from "../pages/HomeElements";

function BgContainer() {
	return (
		<BgHorizontalContainer>
			<BgSmallCircle />
			<BgVerticalContainer>
				<BgCircle />
			</BgVerticalContainer>
		</BgHorizontalContainer>
	);
}

export default BgContainer;
