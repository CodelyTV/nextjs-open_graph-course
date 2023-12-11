import { JsonCourseRepository } from "@/modules/course/infrastructure/JsonCourseRepository";

export default function Courses() {
	const repository = new JsonCourseRepository();

	return (
		<ul>
			{repository.searchAll().map((course) => (
				<li key={course.slug}>
					<a href={`/cursos/${course.slug}`}>{course.title}</a>
				</li>
			))}
		</ul>
	);
}
