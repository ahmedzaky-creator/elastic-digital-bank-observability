export interface Source {
  id: string;
  label: string;
  url: string;
  note: string;
}
export interface Notes {
  opening: string;
  body: string;
  transition: string;
  seconds: number;
  prompt: string;
}
export interface Scene {
  id: string;
  chapter: string;
  eyebrow: string;
  title: string;
  emphasis: string;
  lead: string;
  visual: number;
  takeaway: string;
  detail: string;
  qualification: string;
  requirements: string;
  sources: Source[];
  notes: Notes;
  steps: [string, string, string, string];
  illustrative: boolean;
}
export interface VisualOptions {
  step: number;
  settled: boolean;
  density: number;
}
