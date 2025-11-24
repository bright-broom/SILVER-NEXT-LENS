import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TeamMember {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface HistoryItem {
  title: string;
  content: ReactNode;
}

