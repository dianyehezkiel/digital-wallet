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
  name: string;
  route: string;
  displayName: string;
  displayIcon: typeof HomeIcon;
  color: {bg: string, border: string};
};

export const mainMenus: Menu[] = [
  {
    name: 'dashboard',
    route: '/',
    displayName: 'Dashboard',
    displayIcon: HomeIcon,
    color: {
      bg: 'bg-indigo-500',
      border: 'border-indigo-500'
    },
  },
  {
    name: 'send-money',
    route: `/send-money`,
    displayName: 'Send Money',
    displayIcon: PaperAirplaneIcon,
    color: {
      bg: 'bg-sky-500',
      border: 'border-sky-500'
    },
  },
  {
    name: 'top-up',
    route: '/top-up',
    displayName: 'Top-up Wallet',
    displayIcon: CreditCardIcon,
    color: {
      bg: 'bg-fuchsia-500',
      border: 'border-fuchsia-500'
    },
  },
  {
    name: 'withdraw',
    route: '/withdraw',
    displayName: 'Withdraw',
    displayIcon: BanknotesIcon,
    color: {
      bg: 'bg-emerald-500',
      border: 'border-emerald-500'
    },
  },
  {
    name: 'bills',
    route: '/bills',
    displayName: 'Bill Payment',
    displayIcon: WalletIcon,
    color: {
      bg: 'bg-orange-500',
      border: 'border-orange-500'
    },
  },
  {
    name: 'settings',
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
    name: 'transactions',
    route: '/transactions',
    displayName: 'Transactions History',
    displayIcon: ArrowsUpDownIcon,
    color: {
      bg: 'bg-teal-500',
      border: 'border-teal-500'
    },
  },
  {
    name: 'request',
    route: '/request',
    displayName: 'Request Payment',
    displayIcon: GiftIcon,
    color: {
      bg: 'bg-red-500',
      border: 'border-red-500'
    },
  },
  {
    name: 'help',
    route: '/help',
    displayName: 'Help',
    displayIcon: QuestionMarkCircleIcon,
    color: {
      bg: 'bg-stone-500',
      border: 'border-stone-500'
    },
  },
]
