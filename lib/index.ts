export * from './menus';
export * from './spending-category';

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}