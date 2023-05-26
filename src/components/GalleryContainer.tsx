import { useEffect, useState } from "react";
import styled from "styled-components";

import gallerySetting from "../gallerySetting.json";
import {
	GalleryBox,
	GalleryGrid,
	GalleryImg,
	GalleryVideo,
} from "../pages/HomeElements";

let fileList: string[] = [];

function shuffle(inputArr: string[]) {
	for (let i = inputArr.length - 1; i > 0; i--) {
		const index = Math.floor(Math.random() * (i + 1));
		const temp = inputArr[i];
		inputArr[i] = inputArr[index];
		inputArr[index] = temp;
	}

	return inputArr;
}

const readGallery = () => {
	const startIndex = +gallerySetting.startIndex;
	const endIndex = +gallerySetting.endIndex;

	for (let i = startIndex; i <= endIndex; i++) {
		try {
			const pngOne = require(`../gallery/${i}.png`);
			if (pngOne) fileList.push(pngOne);
		} catch (error) {
			try {
				const jpgOne = require(`../gallery/${i}.jpg`);
				if (jpgOne) fileList.push(jpgOne);
			} catch (error) {
				try {
					const gifOne = require(`../gallery/${i}.gif`);
					if (gifOne) fileList.push(gifOne);
				} catch (error) {
					try {
						const mp4One = require(`../gallery/${i}.mp4`);
						if (mp4One) fileList.push(mp4One);
					} catch (error) {
						console.log("Failed to load images!");
					}
				}
			}
		}
	}
};

readGallery();

function GalleryContainer() {
	const [isRandomizeDone, setIsRandomizeDone] = useState(false);

	useEffect(() => {
		fileList = shuffle(fileList);
		setIsRandomizeDone(true);
	});
	return (
		<GalleryBox>
			<GalleryGrid>
				{isRandomizeDone
					? fileList.map((one, index) => {
							const dotDivided = one.split(".");
							switch (dotDivided[dotDivided.length - 1]) {
								case "png":
								case "jpg":
								case "gif":
									return <GalleryImg alt={index + ""} src={one} />;
								case "mp4":
									return (
										<GalleryVideo
											src={one}
											muted
											playsInline
											autoPlay={true}
											loop={true}
											itemType="video/mp4"
										/>
									);
								default:
									return "D";
									break;
							}
					  })
					: null}
			</GalleryGrid>
		</GalleryBox>
	);
}

export default GalleryContainer;
