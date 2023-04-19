import HeaderStyles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <>
      <div className={HeaderStyles.headerBackground}>
        <div className="py-2 mb-1">
          <div className="container d-flex flex-wrap justify-content-center">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
            >
              <img
                src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
                alt="Logo"
                width="34"
                height="28"
                className="d-inline-block align-text-top"
              />
              <small>
                <b>
                  <span className="fs-6 txtWhite">ANK</span>
                </b>
              </small>
            </a>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0">
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
