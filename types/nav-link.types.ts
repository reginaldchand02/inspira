type BaseLink = {
  id: string;
  label: string;
};

type HrefLink = {
  href: string;
  external?: boolean;
};

type ScrollLink = {
  scrollToId: string;
};

export type NavLink = BaseLink & (HrefLink | ScrollLink);
