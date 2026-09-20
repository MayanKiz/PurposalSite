import "./globals.css";

export const metadata = {
  title: "Responsive Presentation Experience",
  description: "A responsive front-end presentation demonstrating visual storytelling, layout transitions, and mobile-friendly interaction patterns.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
