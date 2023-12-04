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

const isotype = (
	<svg
		width="230"
		height="60"
		viewBox="0 0 230 60"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		style={{
			position: "absolute",
			bottom: "5px",
			left: "145px",
		}}
	>
		<g transform="scale(1.3)">
			<g>
				<path d="M5.64838 11.2988H0V16.9472H5.64838V11.2988Z" />
				<path d="M11.2968 5.65234H5.64844V11.3007H11.2968V5.65234Z" />
				<path d="M11.2968 16.9473H5.64844V22.5957H11.2968V16.9473Z" />
				<path d="M16.9433 0H11.2949V5.64837H16.9433V0Z" />
				<path d="M16.9433 22.5938H11.2949V28.2421H16.9433V22.5938Z" />
			</g>
			<g className="angle-right">
				<path d="M33.8865 16.9473H39.5349V11.2989H33.8865V16.9473Z" />
				<path d="M28.2384 22.5938H33.8867V16.9454H28.2384V22.5938Z" />
				<path d="M28.2389 11.2988H33.8872V5.65046L28.2389 5.65046V11.2988Z" />
				<path d="M28.2416 0H22.5933V5.64837H28.2416V0Z" />
				<path d="M28.2416 22.5938H22.5933V28.2421H28.2416V22.5938Z" />
			</g>
		</g>
	</svg>
);

const logo = (
	<svg
		width="230"
		height="60"
		viewBox="0 0 230 60"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		style={{
			position: "absolute",
			bottom: "5px",
			left: "340px",
			color: "#ffffff",
		}}
	>
		<g transform="scale(1.3)">
			<g>
				<path d="M50.8342 14.3316C50.8342 10.8532 53.251 8.39209 56.5258 8.39209C59.0721 8.39209 61.3803 9.8147 61.7645 12.547H59.4618C59.1905 11.3724 58.1067 10.4015 56.5258 10.4015C54.533 10.4015 53.1148 12.0732 53.1148 14.3316C53.1148 16.4993 54.4245 18.1256 56.5468 18.1256C58.1056 18.1256 59.0765 17.3573 59.5049 16.1384H61.8088C61.4025 18.574 59.3477 20.135 56.5468 20.135C53.0705 20.135 50.8342 17.6507 50.8342 14.3316Z" />
				<path d="M63.321 14.2641C63.321 10.8321 65.7564 8.39648 69.0774 8.39648C72.3983 8.39648 74.8813 10.8575 74.8813 14.2641C74.8813 17.6706 72.3972 20.1316 69.0774 20.1316C65.783 20.1361 63.321 17.6518 63.321 14.2641ZM72.602 14.2641C72.602 12.1418 71.1796 10.4025 69.0796 10.4025C66.9796 10.4025 65.6025 12.1418 65.6025 14.2641C65.6025 16.3675 66.9796 18.1267 69.0796 18.1267C71.1796 18.1267 72.6031 16.3653 72.6031 14.2641H72.602Z" />
				<path d="M87.6449 3.875V19.909H85.7695L85.5669 18.3967H85.4086C84.844 19.1639 83.7369 20.1348 81.8405 20.1348C78.8137 20.1348 76.6006 17.8099 76.6006 14.2407C76.6006 10.6271 78.8823 8.39192 81.8405 8.39192C83.5797 8.39192 84.7532 9.18238 85.3411 9.92745V3.875H87.6449ZM85.3411 14.2407C85.3411 11.9601 84.0989 10.4013 82.1792 10.4013C80.2374 10.4013 78.9044 11.9601 78.9044 14.2407C78.9044 16.5656 80.233 18.1254 82.1792 18.1254C84.0989 18.1254 85.3411 16.5667 85.3411 14.2407V14.2407Z" />
				<path d="M100.471 14.8477H92.1144C92.2251 16.857 93.4429 18.2575 95.4357 18.2575C96.8583 18.2575 97.8967 17.6708 98.2588 16.5183H100.473C99.998 18.7767 98.1016 20.1318 95.4368 20.1318C92.1842 20.1318 89.8582 17.8512 89.8582 14.3749C89.8582 10.6939 92.2749 8.39111 95.346 8.39111C98.1016 8.39111 100.518 10.22 100.518 14.1048C100.516 14.3284 100.493 14.5543 100.471 14.8477ZM92.1366 13.2214H98.2798C98.2577 11.4821 97.083 10.2632 95.3438 10.2632C93.5603 10.2632 92.3624 11.5729 92.1366 13.2214Z" />
				<path d="M102.825 3.875H105.129V19.909H102.825V3.875Z" />
				<path d="M107.561 24.4023V22.6631C107.953 22.7561 108.354 22.8091 108.757 22.8214C109.796 22.8214 110.722 22.3919 111.219 21.1951L111.715 19.9076H110.97L106.612 8.61523H109.005L112.348 17.5351H112.529L115.665 8.61634H118.059L113.361 21.5339C113.046 22.4605 112.233 24.6503 109.252 24.6503C108.68 24.6417 108.111 24.5583 107.561 24.4023Z" />
			</g>
		</g>
	</svg>
);

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
						position: "relative",
					}}
				>
					<img
						src={`https://codely.com${course.sticker}`}
						alt="Curse sticker"
						style={{
							width: 250,
						}}
					/>

					{isotype}
				</div>
				<div style={{ display: "flex", width: "70%", padding: "4rem", position: "relative" }}>
					<h1 style={{ fontSize: "4rem", margin: "0" }}>
						{course.emoji} {course.title}
					</h1>

					<div style={{ display: "flex", position: "absolute", bottom: "20px", left: "4rem" }}>
						{course.authors.reverse().map((author, index) => (
							<div key={author} style={{ display: "flex" }}>
								<img
									src={`https://codely.com/img/profesores/${author}.jpg`}
									alt={author}
									width="50"
									height="50"
									style={{
										borderRadius: "50%",
										marginLeft: index !== 0 ? "-5rem" : "1rem",
									}}
								/>
							</div>
						))}
					</div>

					{logo}
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
