import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <div className="container my-6 pl-5 pr-5 w-full">
      <PageHeader title="Courses">
        <Button asChild>
          <Link href="/admin/courses/new">New Courses</Link>
        </Button>
      </PageHeader>
    </div>
  );
}
