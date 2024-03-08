'use client';

import clsx from 'clsx';
import { platform } from 'os';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
   label: string;
   id: string;
   type?: string;
   required?: boolean;
   register: UseFormRegister<FieldValues>;
   errors: FieldErrors;
   disabled?: boolean;
   placeholder?: string;
}

const Input: React.FC<InputProps> = ({
   label,
   id,
   register,
   required,
   errors,
   type = 'text',
   disabled,
   placeholder,
}) => {
   return (
      <div>
         <label
            htmlFor={id}
            className="
          block 
          text-sm 
          font-medium 
          leading-6 
          text-gray-900
        "
         >
            {label}
         </label>
         <div className="mt-2">
            <input
               id={id}
               type={type}
               autoComplete={id}
               disabled={disabled}
               placeholder={placeholder}
               {...register(id, { required })}
               className={clsx(
                  `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`,
                  errors[id] && 'focus:ring-rose-500',
                  disabled && 'opacity-50 cursor-default',
               )}
            />
         </div>
      </div>
   );
};

export default Input;
