/// <reference types="react-scripts" />

declare module "*.scss" {
	const content: { [className: string]: string };
	export = content;
}

declare module "*.svg" {
	import React = require("react");
	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	const src: string;
	export default src;
}
