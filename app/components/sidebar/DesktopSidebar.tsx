'use client';
import useRoutes from '@/app/hooks/useRoutes';
import DesktopItem from './DesktopItem';
import Avatar from '../Avatar';

import { useState } from 'react';
import UserModal from '../modals/UserModal';

const DesktopSidebar: React.FC = () => {
   const routes = useRoutes();
   const [isModalOpen, setIsModalOpen] = useState(false);
   return (
      <>
         <div
            className="hidden 
        lg:fixed 
        lg:inset-y-0 
        lg:left-0 
        lg:z-40 
        lg:w-20 
        xl:px-6
        lg:overflow-y-auto 
        lg:bg-white 
        lg:border-r-[1px]
        lg:pb-4
        lg:flex
        lg:flex-col
        justify-between"
         >
            <nav className="mt-4 flex flex-col justify-between">
               <ul role="list" className="flex flex-col items-center space-y-1">
                  <div
                     className='className="cursor-pointer hover:opacity-75 transition'
                     onClick={() => setIsModalOpen(true)}
                  >
                     <Avatar />
                  </div>
                  {routes.map((item) => (
                     <DesktopItem
                        key={item.label}
                        href={item.href}
                        label={item.label}
                        icon={item.icon}
                        active={item.active}
                        onClick={item.onClick}
                     />
                  ))}
               </ul>
            </nav>
            <nav className="mt-4 flex flex-col justify-between items-center">Setting</nav>
         </div>
         <UserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>
   );
};

export default DesktopSidebar;
