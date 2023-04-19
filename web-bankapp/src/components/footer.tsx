export default function Footer() {
  return (
    <>
      <div className="container">
        <div className="row row-cols-5 py-5 my-5 border-top">
          <div className="col">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            />
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
            />
            <img
              src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
              alt="Logo"
              width="34"
              height="28"
              className="d-inline-block align-text-top"
            />
            <small>
              <b>
                <span className="fs-6">ANK</span>
              </b>
            </small>

            <p className="text-muted">&copy; 2023 / Powered by: sosaravillo </p>
          </div>

          <div className="col"></div>

          <div className="col">
            <h5>Account</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Open Account
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Deactivate Account
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Report
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>Loan</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Home Loan
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Personal Loan
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Car Loan
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Cash Loan
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>Card</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Credit Card
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Debit Card
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
