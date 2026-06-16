import "./globals.css";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/theme-toggle";

export const metadata = {
  title: "OpenBio - Link in Bio miễn phí",
  description: "Trang tổng hợp link cá nhân, tự host, mã nguồn mở.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeToggle />
          <main className="flex flex-col items-center justify-center px-4 py-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
