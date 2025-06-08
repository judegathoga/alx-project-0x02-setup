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

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-full';

export interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
  shape?: ButtonShape;
  onClick?: () => void;
  className?: string;
} 