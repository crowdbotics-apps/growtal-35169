import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Spinner
} from "reactstrap";
import Images from "utils/Images";

import { loginRequest, loginViaFacebookRequest } from "./redux/actions";
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import useForm from "../../utils/useForm"
import validator from "../../utils/validation"

import "./style.css"


import toast, { Toaster } from 'react-hot-toast';

import { OS, currentBrowser } from "utils/platform";

// import FacebookLogin from 'react-facebook-login';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'



const LoginScreen = (props) => {

  const { history, loginRequest, userData, loginViaFacebookRequest, requesting } = props

  const [isAppleBtn, setAppleBtn] = useState(false)

  const [login, setLogin] = useState(false);
  const [FbData, setFbData] = useState(false);
  const [picture, setPicture] = useState('');

  const stateSchema = {
    email: {
      value: "",
      error: ""
    },
    password: {
      value: "",
      error: ""
    }
  }
  const validationStateSchema = {
    email: {
      required: true,
      validator: validator.email
    },
    password: {
      required: true
      //   validator: validator.password,
    }
  }

  const { state, handleOnChange, disable } = useForm(
    stateSchema,
    validationStateSchema
  )

  const handlelogin = () => {
    if (state.email.value && state.password.value) {
      const data = {
        username: state.email.value,
        password: state.password.value,
      }
      loginRequest(data)
    } else {
      toast.error('Both Fields are required');
    }
  }

  useEffect(() => {
    OS(window) == 'MacOS' && setAppleBtn(true)
    console.log(OS(window));
    console.log(currentBrowser(window));
  }, [])

  const responseFacebook = (response) => {
    console.log("response", response);
    setFbData(response);
    // setPicture(response.picture.data.url);
    // if (response.accessToken) {
    //   console.log('accessToken...', response.accessToken);
    //   setLogin(true);
    //   loginViaFacebookRequest({ access_token: response.accessToken })
    // } else {
    //   setLogin(false);
    // }
  }

  useEffect(() => {
    if (FbData?.accessToken) {
      console.log('FbData...', FbData.accessToken);
      // setLogin(true);
      loginViaFacebookRequest({ access_token: FbData.accessToken })
    } else {
      // setLogin(false);
    }
  }, [FbData])

  console.log('login.........', FbData);

  return (
    <>
      <Toaster position="top-center" />
      <div className="register-page">
        <Container>
          <Row style={{ justifyContent: 'space-between' }}>
            <Col className="mr-auto ml-atuo" lg="6" md="6">
              <img src={require("assets/img/left_images.png")} />
            </Col>

            <Col className="m-0" lg="6" md="6" >
              <h5 style={{
                display: 'flex',
                justifyContent: 'center',
                color: 'white',
                fontFamily: 'Libre Caslon Text',
                fontSize: '30px',
                fontWeight: '700'
              }}>Login</h5>
              <Card className="card-signup text-center" style={{ paddingLeft: '20px', paddingRight: '20px', marginBottom: '0px' }}>
                <CardBody style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                  <Form action="" className="form" method="">
                    <label style={{ display: 'flex', paddingTop: '30px' }}>Email</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <img src={Images.email_logo} />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Type eamil" type="email" onChange={e => handleOnChange("email", e.target.value)} />
                    </InputGroup>
                    {state.email.error && (
                      <label style={{ color: "red", display: 'flex' }}>
                        {state.email.error}
                      </label>
                    )}
                    <label style={{ display: 'flex' }}>Password</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <img src={Images.password_logo} />
                          {/* <i className="nc-icon nc-email-85" /> */}
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Type password" type="password" onChange={e => handleOnChange("password", e.target.value)} />
                    </InputGroup>
                    {state.password.error && (
                      <label style={{ color: "red", display: 'flex' }}>
                        {state.password.error}
                      </label>
                    )}

                    <FormGroup
                      check
                    // className="text-left"
                    >

                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Label style={{}}>
                          <Input type="checkbox" style={{ backgroundColor: 'black' }} />
                          <span className="form-check-sign" style={{ backgroundColor: '#3A0F7D' }} >
                          </span>
                          <span style={{
                            color: 'black',
                            fontFamily: 'Khula',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '22px',
                            margin: "0px"
                          }}>Remember me</span>

                        </Label>
                        <Label style={{ alignSelf: 'end' }}>
                          {/* <Input type="checkbox" style={{ height: '10px' }} /> */}
                          {/* <a style={{ color: '#3A0F7D' }} href="/auth/forgot" onClick={(e) => e.preventDefault()}>
                            Forgot Password
                          </a> */}
                          <Link to="/auth/forgot">
                            <p style={{
                              color: '#3A0F7D',
                              fontFamily: 'Khula',
                              fontStyle: 'normal',
                              fontWeight: '600',
                              fontSize: '16px',
                              lineHeight: '26px',
                            }}>Forgot Password</p>
                          </Link>
                        </Label>
                      </div>
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter style={{ padding: '0px' }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }} onClick={(e) => { e.preventDefault(); handlelogin() }}>
                    <div
                      style={{ cursor: 'pointer' }}
                    >
                      <p style={{ backgroundColor: '#3A0F7D', padding: '15px 85px 15px 85px', borderRadius: '50px', color: 'white', fontWeight: 'bold' }}>{requesting ? <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      /> : 'Login'}</p>
                    </div>
                  </div>
                  {/* <Button
                    style={{ backgroundColor: '#3A0F7D', width: '45%', paddingTop: '18px', paddingBottom: '18px' }}
                    className="btn-round"
                    color=""
                    href="#pablo"
                    onClick={(e) => { e.preventDefault(); handlelogin() }}
                  >
                    Login
                  </Button> */}
                  <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <div style={{ borderBottom: '1px #808080 solid', width: '35%' }} />
                    <p style={{
                      alignSelf: 'center',
                      marginTop: '10px',
                      color: '#808080',
                      fontFamily: 'Khula',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '22px',
                    }}>or login with</p>
                    <div style={{ borderBottom: '1px #808080 solid', width: '35%' }} />
                  </div>
                  <div className="social" style={{}}>
                    <FacebookLogin
                      appId="2124993807656772"
                      autoLoad={false}
                      callback={responseFacebook}
                      render={renderProps => (
                        <img onClick={renderProps.onClick} src={require("assets/img/facebook_img.png")} />
                        // <button >This is my custom FB button</button>
                      )}
                    />
                    {/* <img src={require("assets/img/facebook_img.png")} /> */}
                    <img style={{ marginLeft: '20px', marginRight: '20px' }} src={require("assets/img/google_img.png")} />
                    {isAppleBtn &&
                      <img src={require("assets/img/apple_img.png")} />
                    }
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <p>
                      Don’t have an account yet?{" "}
                      <Link to="/auth/register" style={{ color: '#3A0F7D' }}>
                        Create New Account
                      </Link>
                    </p>
                  </div>
                </CardFooter>

                {/* <FacebookLogin
                  appId="2124993807656772"
                  autoLoad={true}
                  fields="name,email,picture"
                  scope="public_profile,user_friends"
                  callback={responseFacebook}
                  icon="fa-facebook" /> */}

              </Card>
            </Col>
          </Row>
        </Container>
        <div
          className="full-page-background"
          style={{
            backgroundImage: `url(${require("assets/img/bg/auth_bg.png")})`,
          }}
        >
          <img src={Images.logo_name} style={{ bottom: 30, position: 'absolute', right: 30 }} />
        </div>
      </div >
    </>
  )
}

const mapStateToProps = state => ({
  userData: state.LoginScreen.user,
  requesting: state.LoginScreen.requesting,
  // error: state.login.error
})

const mapDispatchToProps = dispatch => ({
  loginRequest: data => dispatch(loginRequest(data)),
  loginViaFacebookRequest: (data) => dispatch(loginViaFacebookRequest(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)


const styles = {
  tooggleStyle: {
    backgroundColor: "transparent",
    padding: 0
  }
}