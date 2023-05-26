import { Variants } from "framer-motion";
import { useEffect, useState } from "react";

import { ReactComponent as DiscordLogo } from "../img/social-media--discord.svg";
import { ReactComponent as TwitterLogo } from "../img/social-media--twitter.svg";
import { ReactComponent as YouTubeLogo } from "../img/social-media--youtube.svg";
import {
	Circle,
	CircleMotion,
	DiscordExpand,
	DiscordExpandText,
	LinkHover,
	NavBar,
} from "../pages/HomeElements";

const hoverVariants: Variants = {
	default: {
		scale: 1,
		transition: {
			duration: 0.3,
		},
	},
	onHover: {
		scale: 1.2,
		transition: {
			duration: 0.3,
		},
	},
};

const discordExpandFill: Variants = {
	default: {
		transition: {
			ease: "easeInOut",
			duration: 0.2,
		},
		scaleX: 0,
	},
	onHover: {
		scaleX: -115,
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
};

const discordExpandCircle: Variants = {
	default: {
		transition: {
			ease: "easeInOut",
			duration: 0.2,
		},
		translateX: 0,
	},
	onHover: {
		transition: {
			ease: "easeInOut",
			duration: 0.3,
		},
		translateX: -115,
	},
};

const discordExpandText: Variants = {
	default: {
		opacity: 0,
		translateY: 1,
		translateX: -45,
		transition: {
			ease: "easeInOut",
			duration: 0.1,
		},
	},
	onHover: {
		translateY: 1,
		translateX: -65,
		opacity: 1,
		transition: {
			ease: "easeInOut",
			delay: 0.2,
			duration: 0.3,
		},
	},
};

function SocialMediaBar() {
	const [isMobile, setIsMobile] = useState<boolean>();
	const [discordOpen, setDiscordOpen] = useState(false);

	useEffect(() => {
		if (window.innerWidth < 480) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);

	return (
		<NavBar>
			<LinkHover
				variants={hoverVariants}
				initial="default"
				whileHover={!isMobile ? "onHover" : "default"}
				target="_blank"
				href="https://discord.gg/NmdeBpWCUw"
				onHoverStart={() => {
					if (!isMobile) {
						setDiscordOpen(true);
					} else {
						setDiscordOpen(false);
					}
				}}
				onHoverEnd={() => {
					if (!isMobile) {
						setDiscordOpen(false);
					}
				}}
			>
				<Circle>
					<DiscordExpandText
						variants={discordExpandText}
						initial="default"
						animate={discordOpen && !isMobile ? "onHover" : "default"}
					>
						Join my server!
					</DiscordExpandText>
					<DiscordLogo />
					<DiscordExpand
						variants={discordExpandFill}
						initial="default"
						animate={discordOpen && !isMobile ? "onHover" : "default"}
					></DiscordExpand>
					<CircleMotion
						variants={discordExpandCircle}
						initial="default"
						animate={discordOpen && !isMobile ? "onHover" : "default"}
					/>
				</Circle>
			</LinkHover>
			<LinkHover
				variants={hoverVariants}
				initial="default"
				whileHover={!isMobile ? "onHover" : ""}
				target="_blank"
				href="https://twitter.com/s_nample"
			>
				<Circle>
					<TwitterLogo />
				</Circle>
			</LinkHover>
			<LinkHover
				variants={hoverVariants}
				initial="default"
				whileHover={!isMobile ? "onHover" : ""}
				target="_blank"
				href="https://www.youtube.com/@namples2207"
			>
				<Circle>
					<YouTubeLogo />
				</Circle>
			</LinkHover>
		</NavBar>
	);
}

export default SocialMediaBar;
