import { ImageResponse } from '@vercel/og';

export const config = {
	runtime: 'edge',
};

export default async function handler() {
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: "5rem",
					background: 'black',
					color: 'white',
					width: '100%',
					height: '100%',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				 Codely
			</div>
		),
		{
			width: 1200,
			height: 630,
		},
	);
}
