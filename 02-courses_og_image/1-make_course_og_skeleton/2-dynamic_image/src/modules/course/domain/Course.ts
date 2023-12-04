export class Course {
	constructor(
		public readonly title: string,
		public readonly emoji: string,
		public readonly summary: string,
		public readonly authors: string[],
		public readonly categories: string[],
		public readonly sticker: string,
		public readonly slug: string,
		public readonly color: string,
	) {}
}
