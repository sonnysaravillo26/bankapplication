export default function CreateNewCreditAccount() {
  return (
    <>
      {/* FORM FOR CREATING NEW CREDIT ACCOUNT  */}
      {/* Name, Date of birth, Mobile Number, 
            home Phone, Current Address, City, 
            zip code, etc.  */} 
      <div>
        <div className="col-md-12 mx-auto col-lg-12">
          <form className="p-4 p-md-5 border rounded-3 bg-light">
            <h4>APPLICANT NEW CREDIT ACCOUNT</h4>
            <br />
            <div className="row g-2">
              <div className="form-floating mb-4 col-lg-4">
                <input
                  type="text"
                  className="form-control"
                  id="floatingFirstName"
                  placeholder="First Name"
                />
                <label htmlFor="floatingFirstName">First Name</label>
              </div>
              <div className="form-floating mb-4 col-lg-4">
                <input
                  type="text"
                  className="form-control"
                  id="floatingMiddleName"
                  placeholder="Middle Name"
                />
                <label htmlFor="floatingMiddleName">Middle Name</label>
              </div>
              <div className="form-floating mb-4 col-lg-4">
                <input
                  type="text"
                  className="form-control"
                  id="floatingLastName"
                  placeholder="Last Name"
                />
                <label htmlFor="floatingLastName">Last Name</label>
              </div>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingAddress"
                placeholder="Address"
              />
              <label htmlFor="floatingAddress">Address</label>
            </div>
            <div className="row g-2">
              <div className="form-floating mb-4 col-lg-4">
                <input
                  type="number"
                  className="form-control"
                  id="floatingMobileNumber"
                  placeholder="Mobile Number"
                />
                <label htmlFor="floatingMobileNumber">Mobile Number</label>
              </div>

              {/* CHANGE THIS FORMAT LATER ON  */}
              {/* USE DATE PICKER BOOSTRAP */}
              <div className="form-floating mb-4 col-lg-4">
                <input
                  type="text"
                  className="form-control"
                  id="floatingDateOfBirth"
                  placeholder="DD/MM/YYYY"
                />
                <label htmlFor="floatingDateOfBirth">
                  Date of Birth (DD/MM/YYYY)
                </label>
              </div>

              <div className="form-floating mb-4 col-lg-4">
                <input
                  type="text"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="Email"
                />
                <label htmlFor="floatingEmail">Email</label>
              </div>
            </div>

            <button className="w-30 m-2 btn btn-lg btn-danger">Cancel</button>
            <button className="w-30 m-2 btn btn-lg btn-primary" type="submit">
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
