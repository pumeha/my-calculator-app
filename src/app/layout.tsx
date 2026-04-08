import ThemeRegistry from './themeRegistry';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My App',
  description: 'Next.js with MUI',
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