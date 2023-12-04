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
				{course.title}
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
