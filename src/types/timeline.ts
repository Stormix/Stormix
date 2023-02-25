export type Keyword = string;

export type Description = {
  description: string;
  keywords?: Keyword[];
};

export enum EventType {
  Experience = 'Experience',
  Education = 'Education',
}

export interface Event {
  type: EventType;
  company: string;
  position: string;
  start: string;
  location: string;
  end: string;
  short_description?: string;
  descriptions?: Description[];
  keywords?: Keyword[];
  link?: string;
}
