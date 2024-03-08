import clsx from 'clsx';

import { MdOutlineGroupAdd } from 'react-icons/md';
import ConversationBox from './ConversationBox';
const ConversationList: React.FC = () => {
   return (
      <aside
         className={clsx(`
        fixed 
        inset-y-0 
        pb-20
        lg:pb-0
        lg:left-20 
        lg:w-80 
        lg:block
        overflow-y-auto 
        border-r 
        border-gray-200 
      `)}
      >
         <div className="px-5">
            <div className="flex justify-between mb-4 pt-4">
               <div className="text-2xl font-bold text-neutral-800">
                  <input
                     type="search"
                     placeholder="Search messages"
                     className="w-full text-justify rounded-md border border-neutral-300 text-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  ></input>
               </div>

               <div
                  className="
                rounded-full 
                p-2 
                bg-gray-100 
                text-gray-600 
                cursor-pointer 
                hover:opacity-75 
                transition
              "
               >
                  <MdOutlineGroupAdd size={20} />
               </div>
            </div>
            <ConversationBox />
         </div>
      </aside>
   );
};
export default ConversationList;
