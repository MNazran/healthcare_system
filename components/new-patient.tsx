'use client';

import { Patient } from '@/lib/generated/prisma';
import { useUser } from '@clerk/nextjs';
import React, { useState } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useRouter } from 'next/navigation';
import { Form } from './ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { PatientFormSchema } from '@/lib/schema';
import z from 'zod';

interface DataProps {
  data?: Patient;
  type: 'create' | 'update';
}

export const NewPatient = ({ data, type }: DataProps) => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [imgURL, setImgURL] = useState<any>();
  const router = useRouter();

  const userData = {
    first_name: user?.firstName || '',
    last_name: user?.lastName || '',
    email: user?.emailAddresses[0].emailAddress || '',
    phone: user?.phoneNumbers?.toString() || '',
  };

  type PatientFormType = z.infer<typeof PatientFormSchema>;
  const form = useForm<PatientFormType>({
    resolver: zodResolver(PatientFormSchema) as any,
    defaultValues: {
      ...userData,
    },
  });

  return (
    <Card className='max-w-6xl w-full p-4'>
      <CardHeader>
        <CardTitle>Patient Registration</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={() => {}} className='space-y-8 mt-5'>
          <h3 className='text-lg font-semibold'>Personal Information</h3>
        </form>
      </Form>
    </Card>
  );
};
