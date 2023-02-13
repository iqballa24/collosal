export type ButtonProps = {
  label: string;
  type: 'button' | 'submit' | 'reset';
  size: 'large' | 'small';
  color: 'primary' | 'white';
  style: 'light' | 'solid' | 'outline';
  isRounded?: boolean;
  onClick: () => void;
};

export type SmallCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
}
