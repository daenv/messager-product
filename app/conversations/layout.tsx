/* This code snippet is defining a React functional component called `ConversationList` that takes in
props of type `ConversationListProps`. */
/* The code snippet provided is a TypeScript React component named `ConversationList`. Here is a
breakdown of what each part of the code is doing: */
import Sidebar from "../components/sidebar/sidebar";
// import ConversationList from "./components/ConversationList";


export default async function ConversationsLayout({ children }: { children: React.ReactNode }) {
   // const conversations = await ();

   return (
      <Sidebar>
         <div className="h-full">
            {/* <ConversationList  /> */}
            {children}
         </div>
      </Sidebar>
   );
}
