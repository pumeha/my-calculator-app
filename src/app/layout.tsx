import ThemeRegistry from '../components/themeRegistry';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Calculator App',
  description: 'Simple calculator built with Next.js and Material-UI',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}