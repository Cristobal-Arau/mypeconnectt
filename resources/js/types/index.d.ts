import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: Mype;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    [key: string]: unknown;
}

export interface Mype {
    id: number;
    name: string;
    email: string;
    phone_number?: string;
    mype_rate?: number;
    mype_address?: string;
    mype_description?: string;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
  }
  

export interface Product {
    id: number;
    product_name: string;
    product_description: string;
    category: string;
    rating: string;
    mypes: {
      id: number;
      name: string;
      pivot: {
        custom_price: number;
        stock: number;
        product_rate: number;
        min_stock: number;
      };
    }[];
  }
  

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface Paginated<T> {
    data: T[];
    links: PaginationLink[];
}
