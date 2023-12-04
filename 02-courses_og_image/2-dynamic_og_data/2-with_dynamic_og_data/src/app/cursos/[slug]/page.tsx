import { notFound } from "next/navigation";

import { JsonCourseRepository } from "@/modules/course/infrastructure/JsonCourseRepository";

export default function CourseDetails({ params }: { params: { slug: string } }) {
	const repository = new JsonCourseRepository();
	const course = repository.search(params.slug);

	if (course === null) {
		return notFound();
	}

	return <ul>{course.title}</ul>;
}
