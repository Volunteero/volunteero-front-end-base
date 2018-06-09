export interface Event {
  id: string;
  name: string;
  description: string;
  start: string;
  end: string;
  location: string;
  volunteers: number;
  category: string;
  points: number;
  organizationId: string;
  available: boolean;
}
