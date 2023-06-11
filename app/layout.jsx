import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promtia",
  description: "app description",
  icons: {
    icon: "/assets/logo.svg",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Nav />
          <main className="px-2">{children}</main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
