import LayoutStyles from "@/styles/Layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="container">
        <main className={LayoutStyles.contentbody}>{children}</main>
      </div>
    </>
  );
}
