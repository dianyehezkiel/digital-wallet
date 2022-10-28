import {
  ArrowsUpDownIcon,
  BanknotesIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  GiftIcon,
  HomeIcon,
  PaperAirplaneIcon,
  QuestionMarkCircleIcon,
  WalletIcon,
} from '@heroicons/react/24/solid';

type Menu = {
  id: string;
  route: string;
  displayName: string;
  displayIcon: typeof HomeIcon;
  color: {bg: string, border: string};
};

export const mainMenus: Menu[] = [
  {
    id: 'dashboard',
    route: '/',
    displayName: 'Dashboard',
    displayIcon: HomeIcon,
    color: {
      bg: 'bg-indigo-500',
      border: 'border-indigo-500'
    },
  },
  {
    id: 'send-money',
    route: `/send-money`,
    displayName: 'Send Money',
    displayIcon: PaperAirplaneIcon,
    color: {
      bg: 'bg-sky-500',
      border: 'border-sky-500'
    },
  },
  {
    id: 'top-up',
    route: '/top-up',
    displayName: 'Top-up Wallet',
    displayIcon: CreditCardIcon,
    color: {
      bg: 'bg-fuchsia-500',
      border: 'border-fuchsia-500'
    },
  },
  {
    id: 'withdraw',
    route: '/withdraw',
    displayName: 'Withdraw',
    displayIcon: BanknotesIcon,
    color: {
      bg: 'bg-emerald-500',
      border: 'border-emerald-500'
    },
  },
  {
    id: 'bills',
    route: '/bills',
    displayName: 'Bill Payment',
    displayIcon: WalletIcon,
    color: {
      bg: 'bg-orange-500',
      border: 'border-orange-500'
    },
  },
  {
    id: 'settings',
    route: '/settings',
    displayName: 'Settings',
    displayIcon: Cog6ToothIcon,
    color: {
      bg: 'bg-violet-500',
      border: 'border-violet-500'
    },
  },
];

export const otherMenus: Menu[] = [
  {
    id: 'transactions',
    route: '/transactions',
    displayName: 'Transactions History',
    displayIcon: ArrowsUpDownIcon,
    color: {
      bg: 'bg-teal-500',
      border: 'border-teal-500'
    },
  },
  {
    id: 'request',
    route: '/request',
    displayName: 'Request Payment',
    displayIcon: GiftIcon,
    color: {
      bg: 'bg-red-500',
      border: 'border-red-500'
    },
  },
  {
    id: 'help',
    route: '/help',
    displayName: 'Help',
    displayIcon: QuestionMarkCircleIcon,
    color: {
      bg: 'bg-stone-500',
      border: 'border-stone-500'
    },
  },
]
