'use server';

import { PatientFormSchema } from '@/lib/schema';
import { clerkClient } from '@clerk/nextjs/server';

export async function createNewPatient(data: any, pid: string) {
  try {
    const validateData = PatientFormSchema.safeParse(data);

    if (!validateData.success) {
      return {
        success: false,
        error: true,
        msg: 'Provide all required fields',
      };
    }

    const patientData = validateData.data;
    let patient_id = pid;

    if (pid === 'new-patient') {
      const client = await clerkClient();

      const user = await client.users.createUser({
        emailAddress: [patientData.email],
        password: patientData.phone,
        firstName: patientData.first_name,
        lastName: patientData.last_name,
        publicMetadata: { role: 'patient' },
      });
    }
  } catch (error: any) {
    console.error(error);
    return { success: false, error: true, msg: error?.message };
  }
}
