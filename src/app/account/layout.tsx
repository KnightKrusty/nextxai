import "primereact/resources/themes/tailwind-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"; // icons

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {
        /*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */
      }
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
