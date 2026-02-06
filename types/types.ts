export interface CompetitionData {
  name: string;
  categoryId: number;
  searchKey: string;
  type: string;
  date: string;
  dateShort: string;
  about: string;
  url: string;
  regLink: string;
  isRegOpen: boolean;
  price: string;
  pricePool: string;
  guidelines: string;
  note: string;
  contact: [{ name: string; no: string }, { name: string; no: string }];
  details: false;
}

export interface CompetitionCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  day: string;
  imageUrl?: string; // Optional, defaults to dummy2 if not provided
  details?: boolean;
}

export interface IndividualCompProps {
  compData: CompetitionData;
}
