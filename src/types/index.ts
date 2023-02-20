export type ButtonProps = {
  label: string;
  type: 'button' | 'submit' | 'reset';
  size: 'large' | 'small';
  color: 'primary' | 'white';
  style: 'light' | 'solid' | 'outline';
  isRounded?: boolean;
  isFull?: boolean;
  onClick: () => void;
};

export type SmallCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type socialsTypes = {
  twitter: string;
  facebook: string;
  linkedin: string;
};

export type userTypes = {
  avatar: string;
  name: string;
  job: string;
  socials: socialsTypes;
  description: string;
};

export type PricingCardTypes = {
  title: string;
  price: number;
  benefits: string[];
  type: 'low' | 'medium' | 'high';
};

export type TestimonialCardTypes = {
  image: string;
  name: string;
  company: string;
  description: string;
};