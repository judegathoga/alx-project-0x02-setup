export interface User {
  id: string;
  name: string;
  email: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface CardProps {
  title: string;
  content: string;
} 