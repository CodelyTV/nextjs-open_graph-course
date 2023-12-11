import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { JsonCourseRepository } from "@/modules/course/infrastructure/JsonCourseRepository";

type Props = {
	params: { slug: string };
};

export async function generateMetadata(
	{ params }: Props,
	_parent: ResolvingMetadata,
): Promise<Metadata> {
	const repository = new JsonCourseRepository();
	const course = repository.search(params.slug);

	if (course === null) {
		return {
			title: "Curso no encontrado",
		};
	}

	return {
		openGraph: {
			title: `Curso de ${course.title}`,
			description: course.summary,
		},
		other: {
			["twitter:label1"]: "Autores",
			["twitter:data1"]: course.authorsName(),
			["twitter:label2"]: "Duración",
			["twitter:data2"]: "1 hora",
		},
	};
}

export default function CourseDetails({ params }: Props) {
	const repository = new JsonCourseRepository();
	const course = repository.search(params.slug);

	if (course === null) {
		return notFound();
	}

	return <ul>{course.title}</ul>;
}
