import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";

import { JsonCourseRepository } from "@/modules/course/infrastructure/JsonCourseRepository";

export const runtime = "edge";

export const alt = "Logo del curso";

export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
	const repository = new JsonCourseRepository();
	const course = repository.search(params.slug);

	if (course === null) {
		return notFound();
	}

	const comicMono = fetch(new URL("./../../../../public/ComicMono.ttf", import.meta.url)).then(
		(res) => res.arrayBuffer(),
	);

	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 16,
					background: "#7026f4",
					color: "#ffffff",
					width: "100%",
					height: "100%",
					display: "flex",
				}}
			>
				<div
					style={{
						display: "flex",
						background: course.hexColor(),
						width: "30%",
						height: "100%",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<img
						src={`https://codely.com${course.sticker}`}
						alt="Curse sticker"
						style={{
							width: 250,
						}}
					/>
				</div>
				<div style={{ display: "flex", width: "70%", fontSize: "4rem", padding: "4rem" }}>
					{course.emoji} {course.title}
				</div>
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
