export type ThemeMode = "dark" | "light";

export type IconName =
  | "ai"
  | "saas"
  | "enterprise"
  | "hardware"
  | "chip"
  | "degree"
  | "shield"
  | "spark"
  | "code"
  | "store"
  | "billing"
  | "globe"
  | "message"
  | "systems"
  | "linkedin"
  | "github"
  | "email"
  | "sun"
  | "moon"
  | "arrowUpRight"
  | "copy"
  | "check";

export type NavSectionId = "about" | "expertise" | "projects" | "stack" | "connect";

export type ProjectCategory =
  | "All"
  | "AI & Full-Stack"
  | "Enterprise & IAM"
  | "Mobile & Systems";

export type ProjectDomainCategory = Exclude<ProjectCategory, "All">;

export interface Profile {
  readonly name: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly monogram: string;
  readonly location: string;
  readonly website: string;
  readonly websiteHost: string;
  readonly github: string;
  readonly linkedin: string;
  readonly status: string;
  readonly phrases: readonly [string, ...string[]];
}

export interface NavSection {
  readonly id: NavSectionId;
  readonly label: string;
}

export interface StatItem {
  readonly value: string;
  readonly label: string;
  readonly detail: string;
}

export interface CredentialItem {
  readonly text: string;
  readonly iconKey: IconName;
  readonly color: string;
}

export interface ExperienceItem {
  readonly tag: string;
  readonly title: string;
  readonly summary: string;
  readonly stack: readonly string[];
}

export interface ExpertiseItem {
  readonly title: string;
  readonly desc: string;
  readonly gradient: string;
  readonly iconColor: string;
  readonly iconKey: IconName;
}

export interface Project {
  readonly id: string;
  readonly category: ProjectDomainCategory;
  readonly eyebrow: string;
  readonly name: string;
  readonly desc: string;
  readonly status: string;
  readonly accent: string;
  readonly tech: readonly string[];
  readonly liveUrl?: string;
  readonly repoUrl?: string;
  readonly secondaryRepoUrl?: string;
  readonly secondaryRepoLabel?: string;
  readonly iconKey: IconName;
}

export interface SkillGroup {
  readonly group: string;
  readonly sym: string;
  readonly items: readonly string[];
}

export interface SocialLink {
  readonly name: string;
  readonly handle: string;
  readonly href: string;
  readonly iconKey: IconName;
}

export interface ParticleSpec {
  readonly id: number;
  readonly left: string;
  readonly size: number;
  readonly delay: number;
  readonly duration: number;
  readonly opacity: number;
}
