// Type definitions for the application

export interface Publication {
  id: string;
  type: 'thesis' | 'preprint' | 'journal' | 'conference';
  title: string;
  authors: string[];
  year: number;
  date: string;
  venue: string;
  venueType: string;
  description: string;
  tags: string[];
  categories?: string[];
  links: {
    paper?: string;
    arxiv?: string;
    pdf?: string;
    code?: string;
    slides?: string;
  };
  emoji?: string;
  promotors?: string;
  featured: boolean;
}

export interface Talk {
  id: string;
  date: string;
  title: string;
  type: string;
  duration?: string;
  event: string;
  image?: string;
  location: string;
  description: string;
  moreInfo?: string;
  keywords?: string[];
  hiddenFromNews?: boolean;
  hiddenFromTalks?: boolean;
  links: {
    event?: string;
    abstract?: string;
    slides?: string;
    video?: string;
    paper?: string;
  };
}

export interface TeachingActivity {
  id: string;
  role: string;
  course: string;
  institution: string;
  startYear?: number;
  endYear?: number | null;
  year?: number;
  ects?: number;
  students?: string;
  level?: string;
  description: string;
  tags: string[];
  responsibilities?: string[];
  parentCourse?: string;
  evaluation?: string;
}

export interface TeachingData {
  current: TeachingActivity[];
  guestLectures: TeachingActivity[];
  assistantships: TeachingActivity[];
}

export interface Position {
  title: string;
  icon: string;
}

export interface Contact {
  email: string;
  location: string;
  locationUrl?: string;
  linkedin: string;
  scholar: string;
  orcid: string;
  github: string;
}

export interface Language {
  language: string;
  level: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  subtitle: string;
  profileImage: string;
  contact: Contact;
  positions: Position[];
  bio: string[];
  researchFocus: string[];
  expertise: string[];
  technicalSkills: string[];
  languages: Language[];
}

export interface KeynoteTopic {
  title: string;
  description: string;
  audience: string;
  icon: string;
}

export interface KeynoteConfig {
  enabled: boolean;
  headline: string;
  description: string;
  topics: KeynoteTopic[];
  callToAction: string;
  contactButtonText: string;
}

export interface WebsiteConfig {
  personal: PersonalInfo;
  keynote: KeynoteConfig;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'publication' | 'talk';
  link: string;
  sortDate: string;
  talkId?: string;
  hiddenFromNews?: boolean;
}

export interface FilterOptions {
  excludeIds?: string[];
  excludeTypes?: string[];
  includeHidden?: boolean;
  useDefaultExclusions?: boolean;
  excludeTalkIds?: string[];
  excludePredicate?: ((item: any) => boolean) | null;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  tags: string[];
  coverImage?: string;
  readTime?: string;
  category?: string;
  featured?: boolean;
}
