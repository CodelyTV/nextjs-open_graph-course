import { ImageResponse } from '@vercel/og';
import type { NextRequest } from 'next/server';

export const config = {
	runtime: 'edge',
};

export default async function handler(req: NextRequest) {
	const text = req.nextUrl.searchParams.get('text') || 'Codely';

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
				{text}
			</div>
		),
		{
			width: 1200,
			height: 630,
		},
	);
}
