import { useCallback } from 'react';
import { User } from '../data';

interface UserBoxProps {
   data: User;
}
const UserBox: React.FC<UserBoxProps> = () => {
   const handleClick = useCallback(() => {}, []);
   return (
      <>
         <div
            onClick={handleClick}
            className="
            w-full 
          relative 
          flex 
          items-center 
          space-x-3 
          bg-white 
          p-3 
          hover:bg-neutral-100
          rounded-lg
          transition
          cursor-pointer"
         >
            {/* Avatar */}

            {/*  */}
            <div className="min-w-0 flex-1">
               <div className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <div className="flex justify-between items-center mb-1">
                     <p className="text-sm font-medium text-gray-900">test</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default UserBox;
