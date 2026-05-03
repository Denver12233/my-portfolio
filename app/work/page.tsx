export const dynamic = 'force-dynamic';
import { getProjects } from "@/lib/getProjects";
import { FilterableGallery } from "@/components/sections/FilterableGallery";
import { SectionLabel } from "@/components/atoms/SectionLabel";


export const metadata = {
  title: "Work",
  description: "A showcase of my frontend development and UI/UX design projects.",
};


export default async function WorkPage() {
  const projects = await getProjects();
  
  const categories = Array.from(new Set(projects.map(p => p.category)));
  const techStacks = Array.from(new Set(projects.flatMap(p => p.techStack)));

  return (
    <div className="container mx-auto px-6 py-20 max-w-5xl">
      <SectionLabel eyebrow="ARCHIVE" heading="Selected Work" />
      <FilterableGallery 
        projects={projects} 
        categories={categories} 
        techStacks={techStacks} 
      />
    </div>
  );
}
