import type { Metadata } from 'next';
import './globals.css';

import { pretandard } from '@/assets/fonts';

export const metadata: Metadata = {
  title: '한글 풀어쓰기 변환기',
  description: '한글 풀어쓰기 변환기',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={'ko'}>
      <body className={pretandard.className + '  overflow-hidden'}>
        {children}
      </body>
    </html>
  );
}
