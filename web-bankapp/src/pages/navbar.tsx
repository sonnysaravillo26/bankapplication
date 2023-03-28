import navbarstyles from "@/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link link-dark px-2 active"
                aria-current="page"
              >
                Home
              </a>
            </li>  
            <li className="nav-item dropdown">
                <a className="nav-link link-dark btn-sm px-2 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Account
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item btn-sm" href="#">Open Account</a></li>
                    <li><a className="dropdown-item btn-sm" href="#">Deactivate Account</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item btn-sm" href="#">Report Account</a></li>
                </ul> 
            </li> 
            <li className="nav-item dropdown">
                <a className="nav-link link-dark btn-sm px-2 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Loan
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item btn-sm" href="#">Home Loan</a></li>
                    <li><a className="dropdown-item btn-sm" href="#">Personal Loan</a></li> 
                    <li><a className="dropdown-item btn-sm" href="#">Car Loan</a></li> 
                    <li><a className="dropdown-item btn-sm" href="#">Cash Loan</a></li> 
                </ul> 
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link link-dark btn-sm px-2 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Card
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item btn-sm" href="#">Credit Card</a></li>
                    <li><a className="dropdown-item btn-sm" href="#">Debit Card</a></li>  
                </ul> 
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item px-2">
              <a href="#" className="btn btn-outline-danger btn-sm">
                Logout
              </a>
            </li>
            <li className="nav-item px-2">
              <a href="#" className="btn btn-outline-primary btn-sm">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
