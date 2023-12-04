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

	hexColor(): string {
		const colors: { [key: string]: string } = {
			green: "#3cff64",
			yellow: "#fef878",
			pink: "#e0a4bf",
			violet: "#7026f4",
		};

		return colors[this.color] || "#3cff64";
	}
}
