import { getRole } from '@/utils/roles';
import { LucideIcon } from 'lucide-react';
import React from 'react';

const SidebarIcon = ({ Icon }: { Icon: LucideIcon }) => {
  return <Icon className='size-6 lg:size-5' />;
};
export const Sidebar = async () => {
  const role = await getRole();
  return <div>Sidebar</div>;
};
