import React from 'react';
import {Link} from 'react-router-dom';
import {Form} from 'react-bootstrap';

export const Login = () => {
  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="card text-left py-5 px-4 px-sm-5">
              <h4>SIAKAD</h4>
              <h6 className="font-weight-light">Sign in to continue.</h6>
              <Form className="pt-3">
                <Form.Group className="d-flex search-field">
                  <Form.Control
                    type="email"
                    placeholder="Username" size="lg" className="h-auto" />
                </Form.Group>
                <Form.Group className="d-flex search-field">
                  <Form.Control
                    type="password"
                    placeholder="Password" size="lg" className="h-auto" />
                </Form.Group>
                <div className="mt-3">
                  <Link
                    className="btn btn-block
                    btn-primary btn-lg font-weight-medium auth-form-btn"
                    to="/dashboard">
                    SIGN IN
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
