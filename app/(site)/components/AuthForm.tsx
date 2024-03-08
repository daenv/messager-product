'use client';
import Input from '@/app/components/input/Input';
import Button from '@/app/components/Button';
import { useState, useCallback } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { CiLock } from 'react-icons/ci';
import AuthSocialButton from './AuthSocialButton';
import { BsGithub, BsGoogle } from 'react-icons/bs';

type Variant = 'LOGIN' | 'REGISTER';
const AuthForm = () => {
   const [variant, setVariant] = useState<Variant>('LOGIN');
   const [IsLoading, setIsLoading] = useState(false);

   const toggleVariant = useCallback(() => {
      if (variant === 'LOGIN') {
         setVariant('REGISTER');
      } else {
         setVariant('LOGIN');
      }
   }, [variant]);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FieldValues>({
      defaultValues: {
         name: '',
         email: '',
         password: '',
      },
   });
   return (
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
         <div className="bg-white px-2 py-8 shadow sm:round-lg sm:px-10">
            <form
               className="space-y-3"
               onSubmit={() => {
                  console.log('OnSubmit form');
               }}
            >
               <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none mt-8">
                     <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                     >
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                     </svg>
                  </div>
                  <Input
                     disabled={IsLoading}
                     register={register}
                     errors={errors}
                     required
                     id="email"
                     label="Email address or phone number"
                     type="text"
                     placeholder="nguyen@gmail.com...."
                  />
               </div>
               <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none mt-8">
                     <CiLock />
                  </div>
                  <Input
                     disabled={IsLoading}
                     register={register}
                     required
                     errors={errors}
                     id="password"
                     label="Password"
                     type="password"
                     placeholder="Enter your password..."
                  />
               </div>
               <div className="flex items-center justify-center">
                  <a href="#">Forgot password?</a>
               </div>

               <div>
                  <Button disabled={IsLoading} fullWidth type="submit">
                     {variant === 'LOGIN' ? 'Sign in' : 'Register'}
                  </Button>
               </div>
            </form>
            <div className="mt-6">
               <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                     <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center textt-sm">
                     <span className="bg-while px-2 text-gray-500">Or continue with</span>
                  </div>
               </div>

               <div className="mt-6 flex gap-2">
                  <AuthSocialButton icon={BsGithub} onClick={() => {}} />
                  <AuthSocialButton icon={BsGoogle} onClick={() => {}} />
               </div>
            </div>
            <div
               className="
            flex 
            gap-2 
            justify-center 
            text-sm 
            mt-6 
            px-2 
            text-gray-500
          "
            >
               <div>{variant === 'LOGIN' ? 'New to Talks?' : 'Already have an account?'}</div>
               <div onClick={toggleVariant} className="underline cursor-pointer">
                  {variant === 'LOGIN' ? 'Create an account' : 'Login'}
               </div>
            </div>
         </div>
      </div>
   );
};
export default AuthForm;
