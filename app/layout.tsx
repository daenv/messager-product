import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthContext from './context/AuthContext';
// import ActiveStatus from './components/ActiveStatus';
import ToasterContext from './context/ToasterContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'Zalo',
   description: 'Zalo Clone',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body>
            <AuthContext>
               <ToasterContext />
               {/* <ActiveStatus /> */}
               {children}
            </AuthContext>
         </body>
      </html>
   );
}
