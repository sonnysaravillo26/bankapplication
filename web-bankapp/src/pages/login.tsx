import styles from '@/styles/Login.module.css'

export default function Login() {
    return (
        <>
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 mb-3">Login</h1>
                        <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. 
                        Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-light">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="abc" />
                                <label htmlFor="floatingInput">Username</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="checkbox mb-3">
                                <a href="#" className="btn btn-link" role="button">Forgot password?</a>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button> 

                            <hr className="my-4" />
                            <small className="text-muted">By clicking Login, you agree to the terms of use. </small>
                            <a href="./" className="btn-link" role="button">Back Start</a>
                            <br/>
                            <a href="/layout" className="btn-link" role="button">Main Page</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}