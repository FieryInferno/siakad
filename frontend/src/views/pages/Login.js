import React, {useState} from 'react';
import {
  CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CFormInput,
  CInputGroup, CInputGroupText, CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {cilLockLocked, cilUser} from '@coreui/icons';
import {login} from '../../actions/login';
import {useDispatch} from 'react-redux';

const Login = (props) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const onSubmit = () => {
    dispatch(login(values))
        .then((data) => navigate('/dashboard'))
        .catch((e) => console.log(e));
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">
                      Sign In to your account
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                        value={values.username}
                        onChange={(e) => setValues({
                          ...values, username: e.target.value,
                        })}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={values.password}
                        onChange={(e) => setValues({
                          ...values, password: e.target.value,
                        })}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          color="primary"
                          className="px-4"
                          onClick={onSubmit}
                        >
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
      {/* <CToaster ref={toaster} push={toast} placement="top-center" /> */}
    </div>
  );
};

export default Login;
