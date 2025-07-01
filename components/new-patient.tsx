'use client';

import { Patient } from '@/lib/generated/prisma';
import { useUser } from '@clerk/nextjs';
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { useRouter } from 'next/navigation';
import { Form } from './ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { PatientFormSchema } from '@/lib/schema';
import z from 'zod';
import { CustomInput } from './custom-input';
import { GENDER, MARITAL_STATUS, RELATION } from '@/lib';

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
    resolver: zodResolver(PatientFormSchema) as any, // dev mode
    defaultValues: {
      ...userData,
    },
  });

  return (
    <Card className='max-w-6xl w-full p-4'>
      <CardHeader>
        <CardTitle>Patient Registration</CardTitle>
        <CardDescription>
          Please provide all the information below to help us understand better
          and provide good and quality service to you.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={() => {}} className='space-y-8 mt-5'>
            <h3 className='text-lg font-semibold'>Personal Information</h3>
            <>
              <div className='flex flex-col lg:flex-row gap-y-6 items-center gap-2 md:gap-x-4'>
                <CustomInput
                  type='input'
                  control={form.control}
                  name='first_name'
                  placeholder='First Name'
                  label='First Name'
                />
                <CustomInput
                  type='input'
                  control={form.control}
                  name='last_name'
                  placeholder='Last Name'
                  label='Last Name'
                />
              </div>
              <CustomInput
                type='input'
                control={form.control}
                name='email'
                placeholder='eric@example.com'
                label='Email Address'
              />

              <div className='flex flex-col lg:flex-row gap-y-6 items-center gap-2 md:gap-x-4'>
                <CustomInput
                  type='select'
                  control={form.control}
                  name='gender'
                  placeholder='select gender'
                  label='Gender'
                  selectList={GENDER!}
                />
                <CustomInput
                  type='input'
                  control={form.control}
                  name='date_of_birth'
                  placeholder='02-01-2000'
                  label='Date of Birth'
                  inputType='date'
                />
              </div>

              <div className=' flex flex-col lg:flex-row gap-y-6 items-center gap-2 md:gap-x-4'>
                <CustomInput
                  type='input'
                  control={form.control}
                  name='phone'
                  placeholder='0125463748'
                  label='Contact Number'
                />
                <CustomInput
                  type='select'
                  control={form.control}
                  name='marital_status'
                  placeholder='Select marital status'
                  label='Marital Status'
                  selectList={MARITAL_STATUS!}
                />
              </div>

              <CustomInput
                type='input'
                control={form.control}
                name='address'
                placeholder='153 Street, Apt 1930-G, KL'
                label='Address'
              />
            </>

            <div className='space-y-8'>
              <h3 className='text-lg font-semibold'>Family Information</h3>
              <CustomInput
                type='input'
                control={form.control}
                name='emergency_contact_name'
                placeholder='Adam'
                label='Emergency contact name'
              />
              <CustomInput
                type='input'
                control={form.control}
                name='emergency_contact_number'
                placeholder='0168753965'
                label='Emergency contact'
              />
              <CustomInput
                type='select'
                control={form.control}
                name='relation'
                placeholder='Select relation with contact person'
                label='Relation'
                selectList={RELATION}
              />
            </div>

            <div className='space-y-8'>
              <h3 className='text-lg font-semibold'>Medical Information</h3>

              <CustomInput
                type='input'
                control={form.control}
                name='blood_group'
                placeholder='A+'
                label='Blood group'
              />
              <CustomInput
                type='input'
                control={form.control}
                name='allergies'
                placeholder='Milk'
                label='Allergies'
              />
              <CustomInput
                type='input'
                control={form.control}
                name='medical_conditions'
                placeholder='Medical conditions'
                label='Medical conditions'
              />
              <CustomInput
                type='input'
                control={form.control}
                name='medical_history'
                placeholder='Medical history'
                label='Medical history'
              />
              <div className='flex flex-col lg:flex-row  gap-y-6 items-center gap-2 md:gap-4'>
                <CustomInput
                  type='input'
                  control={form.control}
                  name='insurance_provider'
                  placeholder='Insurance provider'
                  label='Insurance provider'
                />{' '}
                <CustomInput
                  type='input'
                  control={form.control}
                  name='insurance_number'
                  placeholder='Insurance number'
                  label='Insurance number'
                />
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
