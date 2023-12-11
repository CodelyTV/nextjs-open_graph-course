import { Course } from "@/modules/course/domain/Course";

export interface CourseRepository {
	searchAll(): Course[];

	search(slug: string): Course | null;
}
