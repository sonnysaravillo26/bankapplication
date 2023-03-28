import Navbar from "./navbar";
import Header from "./header";
import Footer from "./footer";
import layoutstyles from "@/styles/Layout.module.css";

// FROM
// export default function Layout({ children }) { // Binding element 'children' implicitly has an 'any' type.ts(7031)
//     return (
//         <div>{children}</div>
//     )
// }

// TO
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <div className={layoutstyles.contentbody}>{children}</div>
      <Footer></Footer>
    </>
  );
}
