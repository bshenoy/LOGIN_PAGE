import React, { Component } from 'react'
export default class Login extends Component {
  render() {
    return (
    <div className="Auth-form-container">

      <form>
        <h3>Log In</h3>
        <div className="mb-3">
        {/* <img src="https://cdncontribute.geeksforgeeks.org/wp-content/uploads/GG-2.png" class="img-responsive" alt="Responsive image" width="30" height="24" /> */}
          {/* <label>Email address</label> */}
          
            
              <img src="https://cdncontribute.geeksforgeeks.org/wp-content/uploads/GG-2.png" class="img-responsive" alt="Responsive image" width="30" height="24" />
            
          
          
          <input
            type="email"
            className="form-control"
            placeholder="Email"
           />
        </div>
        <div className="mb-3">
          {/* <label>Password</label> */}
          
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
          
        </div>

        <p className="forgot-password text-right my-3">
           <a href="#"> Forgot password?</a>
        </p>
        
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            {/* <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label> */}
          </div>
        
        </div>
        

        

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        {/* <p className="forgot-password text-right">
           <a href="#"> Forgot password?</a>
        </p> */}

        {/* <!-- Register buttons --> */}
          <div class="text-center">
            
            <p>OR</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-lg btn-google btn-block text-uppercase btn-outline">
              <i class="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i class="fab fa-github"></i>
            </button>
            <div class="row">
            <div class="col-md-12">
            <a class="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png"/>ghhg</a>

                 </div>
            </div>
            
          </div>
        

          

          <p>Dont have Account? <a href="/sign-up">Sign up now</a></p>

      </form>
      
    </div>
    
    
    )
  }
}