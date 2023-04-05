import Navbar from "./navbar";
import Header from "./header";
import Footer from "./footer";
import Layoutstyles from "@/styles/Layout.module.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <main className={Layoutstyles.contentbody}>{children}</main>
      <Footer></Footer>
    </>
  );
}
