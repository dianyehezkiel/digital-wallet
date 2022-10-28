import {
  Box,
  Car,
  CreditCard,
  Gem,
  Gift,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  Shield,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Ticket,
  Utensils,
  Wrench,
} from 'lucide-react';

export type SpendCategory =
  | 'housing'
  | 'transportation'
  | 'food'
  | 'utilities'
  | 'clothing'
  | 'healthcare'
  | 'insurance'
  | 'supplies'
  | 'personal'
  | 'debt'
  | 'retirement'
  | 'education'
  | 'savings'
  | 'donations-gifts'
  | 'entertainment'
  | 'no-category';

type Spend = {
  id: SpendCategory;
  displayName: string;
  displayIcon: typeof Home;
  color: {
    bg: string,
    stroke: string,
  };
};

export const defaultSpend: Spend = {
  id: 'no-category',
  displayName: 'No Categeory',
  displayIcon: Box,
  color: {
    bg: 'bg-blue-100',
    stroke: 'stroke-blue-600'
  },
}

export const spends: Spend[] = [
  {
    id: 'housing',
    displayName: 'Housing',
    displayIcon: Home,
    color: {
      bg: 'bg-teal-100',
      stroke: 'stroke-teal-600'
    },
  },
  {
    id: 'transportation',
    displayName: 'Transportation',
    displayIcon: Car,
    color: {
      bg: 'bg-red-100',
      stroke: 'stroke-red-600'
    },
  },
  {
    id: 'food',
    displayName: 'Food',
    displayIcon: Utensils,
    color: {
      bg: 'bg-orange-100',
      stroke: 'stroke-orange-600'
    },
  },
  {
    id: 'utilities',
    displayName: 'Utilities',
    displayIcon: Wrench,
    color: {
      bg: 'bg-violet-100',
      stroke: 'stroke-violet-600'
    },
  },
  {
    id: 'clothing',
    displayName: 'Clothing',
    displayIcon: Shirt,
    color: {
      bg: 'bg-sky-100',
      stroke: 'stroke-sky-600'
    },
  },
  {
    id: 'healthcare',
    displayName: 'Healthcare',
    displayIcon: HeartPulse,
    color: {
      bg: 'bg-green-100',
      stroke: 'stroke-green-600'
    },
  },
  {
    id: 'insurance',
    displayName: 'Insurance',
    displayIcon: Shield,
    color: {
      bg: 'bg-cyan-100',
      stroke: 'stroke-cyan-600'
    },
  },
  {
    id: 'supplies',
    displayName: 'Household Supplies',
    displayIcon: ShoppingCart,
    color: {
      bg: 'bg-amber-100',
      stroke: 'stroke-amber-600'
    },
  },
  {
    id: 'personal',
    displayName: 'Personal',
    displayIcon: ShoppingBag,
    color: {
      bg: 'bg-lime-100',
      stroke: 'stroke-lime-600'
    },
  },
  {
    id: 'debt',
    displayName: 'Debt',
    displayIcon: CreditCard,
    color: {
      bg: 'bg-rose-100',
      stroke: 'stroke-rose-600'
    },
  },
  {
    id: 'retirement',
    displayName: 'Retirement',
    displayIcon: Gem,
    color: {
      bg: 'bg-emerald-100',
      stroke: 'stroke-emerald-600'
    },
  },
  {
    id: 'education',
    displayName: 'Education',
    displayIcon: GraduationCap,
    color: {
      bg: 'bg-fuchsia-100',
      stroke: 'stroke-fuchsia-600'
    },
  },
  {
    id: 'savings',
    displayName: 'Savings',
    displayIcon: Landmark,
    color: {
      bg: 'bg-purple-100',
      stroke: 'stroke-purple-600'
    },
  },
  {
    id: 'donations-gifts',
    displayName: 'Donations/Gifts',
    displayIcon: Gift,
    color: {
      bg: 'bg-indigo-100',
      stroke: 'stroke-indigo-600'
    },
  },
  {
    id: 'entertainment',
    displayName: 'Entertainment ',
    displayIcon: Ticket,
    color: {
      bg: 'bg-pink-100',
      stroke: 'stroke-pink-600'
    },
  },
];
