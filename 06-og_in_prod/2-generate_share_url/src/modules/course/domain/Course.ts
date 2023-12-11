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

	authorsName(): string {
		return this.authors
			.join(", ")
			.replaceAll("-", " ")
			.replace(/\b\w/g, (word) => word.toUpperCase());
	}

	ogImageUrl(): string {
		return `http://localhost:3000/og-image?text=${this.emoji}%20${
			this.title
		}&authors=${this.authors.join(",")}&color=${this.color}&sticker=${this.sticker}`;
	}

	courseUrl(): string {
		return `https://codely.com/cursos/${this.slug}`;
	}

	shareInTweetUrl(): string {
		const text = `${this.emoji} Curso TOP el de ${
			this.title
		} por ${this.authorsName()}! ${this.courseUrl()}`;

		return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
	}

	shareInLinkedInUrl(): string {
		return `https://www.linkedin.com/sharing/share-offsite/?url=${this.courseUrl()}`;
	}
}
