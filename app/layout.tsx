import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './provider';
import ClientRoot from '@/components/ClientRoot'; // Adjust the path as needed

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Darrel's Portfolio",
  description: "Modern & Minimalist Software Engineer's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          <ClientRoot>
            {children}
          </ClientRoot>
        </ThemeProvider>
      </body>
    </html>
  );
}
