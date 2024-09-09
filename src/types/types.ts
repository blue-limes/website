export interface Person {
  name: string;
  role: string;
  presentation: string;
}

export interface Software {
  name: string;
  role: string;
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
