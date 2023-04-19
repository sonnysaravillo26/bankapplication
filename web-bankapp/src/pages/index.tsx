import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container px-4 py-2">
        {/* Page Headings */}
        <div className="row py-2 mb-3 card">
          <h3>Welcome</h3>
        </div>

        {/* Page Body  */}
        <p>Component Body</p>
      </div>
    </>
  );
}
