import './style.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
   weight: ['400', '700'],
   subsets: ['latin'],
});

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={poppins.className}>
            <h1>Top Info</h1>
            {children}
         </body>
      </html>
   );
}
