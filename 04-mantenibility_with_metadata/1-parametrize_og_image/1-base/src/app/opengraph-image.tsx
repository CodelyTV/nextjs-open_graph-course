import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Caja de Codely Lego";

export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function Image() {
	const comicMono = fetch(new URL("./../../public/ComicMono.ttf", import.meta.url)).then((res) =>
		res.arrayBuffer(),
	);

	return new ImageResponse(
		(
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
					height: "100%",
					fontSize: "5rem",
					backgroundColor: "tomato",
					color: "white",
				}}
			>
				Codely
			</div>
		),
		{
			...size,
			fonts: [
				{
					name: "Comic Mono",
					data: await comicMono,
					style: "normal",
					weight: 400,
				},
			],
		},
	);
}
