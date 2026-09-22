export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  remote: boolean;
  type?: string;
  responsibilities: string[];
  tags: string[];
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  highlight?: string;
  details?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  organization: string;
  year: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  department?: string;
  institution: string;
  period: string;
  gpa: string;
  maxGpa: string;
  note?: string;
}

export interface LanguageItem {
  language: string;
  level: string;
}

export interface ProfileData {
  name: string;
  firstName: string;
  lastName: string;
  headline: string;
  eyebrow: string;
  subheadline: string;
  aboutText: string[];
  contact: {
    email: string;
    phone: string;
    phoneDisplay: string;
    location: string;
  };
  focusAreas: FocusArea[];
  experience: ExperienceItem[];
  skills: SkillGroup[];
  leadership: LeadershipItem[];
  awards: AwardItem[];
  education: EducationItem[];
  languages: LanguageItem[];
}
