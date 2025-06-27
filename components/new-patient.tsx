'use client';

import { Patient } from '@/lib/generated/prisma';
import { useUser } from '@clerk/nextjs';
import React, { useState } from 'react';

interface DataProps {
  data?: Patient;
  type: 'create' | 'update';
}

export const NewPatient = ({ data, type }: DataProps) => {
  const { user } = useUser();

  const userData = {
    first_name: user?.firstName || '',
    last_name: user?.lastName || '',
    email: user?.emailAddresses[0].emailAddress || '',
    phone: user?.phoneNumbers?.toString() || '',
  };

  return <div>NewPatient</div>;
};
