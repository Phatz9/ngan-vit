import Footer from "~/components/Footer";
import Header from "~/components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="min-h-auto">{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
