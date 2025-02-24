import PageHeader from "@/components/PageHeader";
import { CourseForm } from "@/features/courses/components/CourseFrom";

export default function NewProductPage() {
  return (
    <div className="p-5 w-full h-screen">
      <PageHeader title="New Courses" />
      <CourseForm />
    </div>
  );
}
