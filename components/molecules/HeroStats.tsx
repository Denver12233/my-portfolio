import fs from "fs";
import path from "path";

export default function HeroStats() {
  const projectsPath = path.join(process.cwd(), "data", "projects.json");
  const logsPath = path.join(process.cwd(), "content", "logs");

  // Fetch projects and count
  const projects = JSON.parse(fs.readFileSync(projectsPath, "utf8"));
  const projectsCount = projects.length;

  // Fetch weekly log files and count
  const logs = fs.readdirSync(logsPath).filter((file) => file.endsWith(".md"));
  const weeksCount = logs.length;

  // Fetch and flatten techStack, count unique values
  const allTech = projects.flatMap((p: any) => p.techStack || []);
  const uniqueTechCount = new Set(allTech).size;

  const stats = [
    { label: "Projects", value: projectsCount.toString() },
    { label: "Weeks", value: weeksCount.toString() },
    { label: "Technologies", value: `${uniqueTechCount}+` },
  ];

  return (
    <>
      {stats.map((stat, idx) => (
        <div key={idx}>
          <div className="text-2xl font-plusJakarta font-bold text-neutral-900 dark:text-white">
            {stat.value}
          </div>
          <div className="text-[11px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mt-0.5">
            {stat.label}
          </div>
        </div>
      ))}
    </>
  );
}
