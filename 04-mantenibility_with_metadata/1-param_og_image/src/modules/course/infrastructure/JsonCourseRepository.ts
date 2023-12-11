import { CourseRepository } from "@/modules/course/domain/CourseRepository";

import { Course } from "../domain/Course";
import courses from "./courses.json";

export class JsonCourseRepository implements CourseRepository {
	searchAll(): Course[] {
		return courses.map((course) => {
			return new Course(
				course.title,
				course.emoji,
				course.summary,
				course.authors.sort(),
				course.categories,
				course.sticker,
				course.slug,
				course.color,
			);
		});
	}

	search(slug: string): Course | null {
		return this.searchAll().find((course) => course.slug === slug) ?? null;
	}
}
