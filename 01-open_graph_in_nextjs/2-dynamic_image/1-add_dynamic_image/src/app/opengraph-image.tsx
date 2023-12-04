import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Caja de Codely Lego";

export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default function Image() {
	return new ImageResponse(<div>Codely</div>);
}
