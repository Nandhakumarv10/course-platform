import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { CourseTable } from "@/features/courses/components/CourseTable";
import { db } from "@/drizzle/db";
import {
  CourseSectionTable,
  CourseTable as DbCourseTable,
  LessonTable,
  UserCourseAccessTable,
} from "@/drizzle/schema";
import { asc, countDistinct, eq } from "drizzle-orm";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="w-full flex  flex-col justify-between items-center  my-6">
      <PageHeader
        title="Courses"
        className="w-full flex justify-between items-center p-3"
      >
        <Button asChild>
          <Link href="/admin/courses/new">New Course</Link>
        </Button>
      </PageHeader>

      <CourseTable courses={courses} />
    </div>
  );
}

async function getCourses() {
  return db
    .select({
      id: DbCourseTable.id,
      name: DbCourseTable.name,
      sectionsCount: countDistinct(CourseSectionTable.id),
      lessonsCount: countDistinct(LessonTable.id),
      studentsCount: countDistinct(UserCourseAccessTable.userId),
    })
    .from(DbCourseTable)
    .leftJoin(
      CourseSectionTable,
      eq(CourseSectionTable.courseId, DbCourseTable.id)
    )
    .leftJoin(LessonTable, eq(LessonTable.sectionId, CourseSectionTable.id))
    .leftJoin(
      UserCourseAccessTable,
      eq(UserCourseAccessTable.courseId, DbCourseTable.id)
    )
    .orderBy(asc(DbCourseTable.name))
    .groupBy(DbCourseTable.id);
}
