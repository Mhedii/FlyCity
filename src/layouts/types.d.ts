interface MenuItem {
  id: string;
  title: string;
  path: string;
  icon: string;
  type: string;
  badgeType: string | null;
  badgeValue: string | null;
  badgeClass: string | null;
  active: boolean | null;
  isMenu: boolean;
  bookmark: boolean | null;
  children: MenuItem[] | null;
}
interface appData {
  agentInfo: string;
  setting: string | null;
  user: object;
  menuItems: MenuItem[];
  messages: [];
}
