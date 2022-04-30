import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {login} from '../actions/login';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [values, setValues] = useState();
  const onSubmit = () => {
    dispatch(login(values))
        .then((data) => {
          localStorage.setItem('login', JSON.stringify(data));
          history.push('/dashboard');
        })
        .catch((e) => console.log(e.response.data.message));
  };

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
                    type="text" placeholder="Username" size="lg"
                    className="h-auto" onChange={(e) => setValues({
                      ...values,
                      username: e.target.value,
                    })}
                  />
                </Form.Group>
                <Form.Group className="d-flex search-field">
                  <Form.Control
                    type="password" placeholder="Password" size="lg"
                    className="h-auto" onChange={(e) => setValues({
                      ...values,
                      password: e.target.value,
                    })}
                  />
                </Form.Group>
                <div className="mt-3">
                  <Button
                    className="btn btn-block btn-primary btn-lg
                    font-weight-medium auth-form-btn"
                    onClick={onSubmit}>
                    SIGN IN
                  </Button>
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
