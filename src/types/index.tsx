export interface BaseHeaderProps {
  pathname: string;
}

// Define the User type
export type UserProps = {
  id: number;
  name: string;
  email: string;
  avatar: string;
};

export type projectsType = {
  id: string;
  title: string;
  image: string;
  category: string;
};

export interface Client {
  id: number;
  name: string;
  rating: number;
  testimonial: string;
  image: string;
}
