import React from 'react';
import { Control } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';

interface InputProps {
  type: 'input' | 'select' | 'checkbox' | 'switch' | 'radio' | 'textarea';
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  inputType?: 'text' | 'email' | 'password' | 'date';
  selectList?: { label: string; value: string }[];
  defaultValue?: string;
}

const RenderInput = ({ field, props }: { field: any; props: InputProps }) => {
  switch (props.type) {
    case 'input':
      return (
        <FormControl>
          <Input
            type={props.inputType}
            placeholder={props.placeholder}
            {...field}
          />
        </FormControl>
      );
  }
};

export const CustomInput = (props: InputProps) => {
  const { name, label, control, type } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='w-full'>
          {type !== 'radio' && type !== 'checkbox' && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderInput field={field} props={props} />
          <FormMessage />
        </FormItem>
      )}
    ></FormField>
  );
};
