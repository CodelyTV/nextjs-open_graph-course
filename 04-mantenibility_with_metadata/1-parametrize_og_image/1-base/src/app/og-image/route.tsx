import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);

		const text = searchParams.has("text") ? searchParams.get("text") : "Codely";

		return new ImageResponse(
			(
				<div
					style={{
						backgroundColor: "black",
						height: "100%",
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<div
						style={{
							fontSize: "10rem",
							color: "white",
						}}
					>
						{text}
					</div>
				</div>
			),
			{
				width: 1200,
				height: 630,
			},
		);
	} catch (e: any) {
		console.log(`${e.message}`);

		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
