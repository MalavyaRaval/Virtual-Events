import React from 'react';
import '../CSS/Login.css';  // Reuse the same CSS as SignUp




const Login = () => {
  return (
    <div className="full-height">
      <div className="form-container">
        <form className='mb-3'>
          <label htmlFor='name'>Name</label>
          <input className="form-control mb-3" type='text' id='name' name='name' />
        </form>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword4" />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
