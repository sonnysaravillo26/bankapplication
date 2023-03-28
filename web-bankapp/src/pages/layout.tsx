
import Navbar from './navbar'
import Header from './header'
import Footer from './footer'

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
            <Header></Header>
            <Navbar></Navbar>
            <main> {children} </main>
            <Footer></Footer>
        </>
    )
}