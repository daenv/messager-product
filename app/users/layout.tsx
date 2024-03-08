import Sidebar from '../components/sidebar/sidebar';
import UserList from './components/UserList';
import { users } from './data';

export default async function UsersLayout({ children }: { children: React.ReactNode }) {
   return (
      <Sidebar>
         <div className="h-full">
            <UserList items={users} />

            {children}
         </div>
      </Sidebar>
   );
}
