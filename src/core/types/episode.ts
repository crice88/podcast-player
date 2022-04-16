export interface Episode {
  id: string;
  audio: string;
  name: string;
  markers: Marker[];
}

export interface Marker {
  type: 'ad' | 'text' | 'image';
  start: number;
  duration: number;
  content: string;
  link?: string;
}
