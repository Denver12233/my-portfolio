import { getSkills } from "@/lib/getSkills";
import { SkillBar } from "../ui/SkillBar";
import { SectionLabel } from "../ui/SectionLabel";

export const SkillsSection = async () => {
  const skills = await getSkills();

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionLabel eyebrow="Toolkit" heading="Skills & Proficiency" />
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-10">
          {skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
          ))}
        </div>
      </div>
    </section>
  );
};
