'use client';

import React from 'react';
import { Button } from './ui/button';
import { LogOut } from 'lucide-react';

export const LogoutButton = () => {
  return (
    <Button onClick={() => {}}>
      <LogOut />
      <span className='hidden lg:block'>Logout</span>
    </Button>
  );
};
