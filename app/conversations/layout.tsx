import Sidebar from "../components/sidebar/sidebar";
import ConversationList from "./components/ConversationList";

export default async function ConversationsLayout({ children }: { children: React.ReactNode }) {
//    const conversations = await getConversations();

   return (
      <Sidebar>
         <div className="h-full">
            <ConversationList />
            {children}
         </div>
      </Sidebar>
   );
}
