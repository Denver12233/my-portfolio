export interface HeroData {
  label: string;
  firstName: string;
  lastName: string;
  badges: { text: string; variant: "default" | "accent" }[];
  subtitle: string;
  images: string[];
}

export const heroData: HeroData = {
  label: "Internship Portfolio 2026",
  firstName: "Denver",
  lastName: "Tandingan.",
  badges: [
    { text: "Developer", variant: "default" },
    { text: "Intern @ MIH", variant: "accent" },
  ],
  subtitle: "Currently refining my craft at MakerSpace InnovHub, building intentional web experiences through clean code and purposeful design.",
  images: ["/profile.jpg", "/profile2.jpg"],
};

