export interface Person {
  name: string;
  role: string;
  presentation: string;
}

export interface Software {
  name: string;
  role: string;
  description?: string[];
  isOpenSource?: boolean;
  developers?: string[];
  icon: string;
  height: number;
}

export interface Feature {
  name: string;
  description: string;
}

export interface Activity {
  day: number;
  title: string;
  emoji?: string;
}

export interface Link {
  label: string;
  url: string;
}
