import { getFeaturedProjects } from "@/lib/getProjects";
import { ProjectCard } from "../cards/ProjectCard";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";
import { AnimatedSection } from "../ui/AnimatedSection";
import { StaggerContainer } from "../ui/StaggerContainer";
import { StaggerItem } from "../ui/StaggerItem";

export const FeaturedProjects = async () => {
  const projects = await getFeaturedProjects();

  return (
    <AnimatedSection className="py-20 bg-neutral-50/50 dark:bg-neutral-950/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex justify-between items-end mb-16">
          <SectionLabel eyebrow="Curated Work" heading="Featured Projects" />
          <Button href="/work" variant="outline" className="hidden sm:inline-flex">View Gallery</Button>
        </div>
        <StaggerContainer className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
};
