import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
  <div>
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-12">
        <div className="text-center mt-5">
          <h1 className="navbar-brand text-danger fw-bold fs-2">Kocina</h1>
          <h2 className=" display-5" style={{fontWeight: 200}}>Create an Account</h2>
          <div className>
            <span className="fa fa-facebook-f me-3 icon" />
            <span className="fa fa-google-plus  icos" />
            <span className="fa fa-linkedin ms-3 icon" />
          </div>
          <p className="mt-4 fs-5">Or use your email for registration:</p>
          <form action>
            <div className="form-element">
              <label htmlFor className="mb-3">Full Name</label><br />
              <input type="text" placeholder="Full Name" className="bg-transparent border border-2 border-secconadary w-75  rounded-pill p-2 text-center" />
            </div>
            <div className="form-element">
              <label htmlFor className="my-3">Email</label><br />
              <input type="email" placeholder="abc@gmail.com" className="bg-transparent border border-2 border-secconadary w-75  rounded-pill p-2 text-center" />
            </div>
            <div className="form-element">
              <label htmlFor className="my-3">Password</label><br />
              <input type="password" placeholder="min 8 characters" minLength={8} className="bg-transparent border border-2 w-75 border-secconadary  rounded-pill p-2 text-center mb-3" />
            </div>
            <button className="border-0  rounded-pill text-white fw-bold  my-2 " style={{backgroundColor: '#eb4a36', padding: '14px 40px'}}>Sign Up</button>
            <p>By signing up you agree to our <a href style={{color: '#eb4a36'}}>terms</a> of service.</p>
          </form>
        </div>
      </div>
      <div className="col-lg-6 col-12  mt-5 " style={{height: 650, backgroundColor: 'rgb(100, 90, 90)', borderRadius: 20}}>
        <div className=" text-center ">
          <div className="p-5" style={{marginTop: 180}}>
            <h1 className="fw-bold text-white">Welcome Back</h1>
            <p className="text-white fs-5 mt-3">Already signed up, enter your details and start cooking your first meal today</p>
            <button className="border-0  rounded-pill fw-bold send mt-4" style={{backgroundColor: 'white', padding: '14px 40px'}}><Link to="/signin" className="text-dark text-decoration-none"> Sign In</Link></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Signup