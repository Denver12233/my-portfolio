import Image from "next/image";
import { Project } from "@/types";
import { Badge } from "../ui/Badge";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:shadow-2xl hover:shadow-accent-500/10 transition-all duration-500">
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
            <span className="text-neutral-400 dark:text-neutral-500 font-syne font-bold uppercase tracking-widest text-sm">
              {project.title}
            </span>
          </div>
        )}

        {/* Hover overlay with links */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} live site`}
              className="w-11 h-11 bg-white rounded-full text-black flex items-center justify-center hover:scale-110 transition-transform"
            >
              {/* External link icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="w-11 h-11 bg-white rounded-full text-black flex items-center justify-center hover:scale-110 transition-transform"
            >
              {/* GitHub icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge label={project.category} variant="green" />
          {project.techStack.slice(0, 2).map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors text-neutral-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-neutral-500 dark:text-neutral-300 text-sm line-clamp-2 mb-6 font-light">
          {project.description}
        </p>
        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          {project.completionDate}
        </span>
      </div>
    </div>
  );
};
