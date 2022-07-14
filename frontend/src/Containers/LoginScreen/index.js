import React from "react";

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
} from "reactstrap";
import Images from "utils/Images";

import { loginSuccess } from "./redux/actions";
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import useForm from "../../utils/useForm"
import validator from "../../utils/validation"

import { Toaster } from "react-hot-toast"


const LoginScreen = (props) => {

  const { history, loginSuccess, userData } = props

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
    const data = {
      email: state.email.value,
      password: state.password.value,
    }
    loginSuccess(data)
    console.log('data....', data);
  }

  console.log('userData........', userData);

  console.log('email...', state.email.value);
  return (
    <>
      <div className="register-page">
        <Container>
          <Row style={{ justifyContent: 'space-between', marginTop: '1rem' }}>
            <Col className="mr-auto ml-atuo" lg="6" md="6">
              <img src={require("assets/img/left_images.png")} />
            </Col>

            <Col className="m-0" lg="6" md="6" >
              <h5 style={{ display: 'flex', justifyContent: 'center', color: 'white', fontFamily: 'Libre Caslon Text' }}>Login</h5>
              <Card className="card-signup text-center" style={{ padding: '10px 30px 0 30px' }}>
                <CardBody style={{ paddingTop: '30px' }}>
                  <Form action="m-0" className="form" method="">
                    <label style={{ display: 'flex' }}>Email</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          {/* <i className="nc-icon nc-circle-10" /> */}
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
                        <Label check>
                          <Input type="checkbox" style={{}} />
                          <span className="form-check-sign" />Remember me
                          .
                        </Label>
                        <Label style={{ alignSelf: 'end' }}>
                          {/* <Input type="checkbox" style={{ height: '10px' }} /> */}
                          {/* <a style={{ color: '#3A0F7D' }} href="/auth/forgot" onClick={(e) => e.preventDefault()}>
                            Forgot Password
                          </a> */}
                          <Link to="/auth/forgot">
                            <p style={{ color: '#3A0F7D' }}>Forgot Password</p>
                          </Link>
                        </Label>
                      </div>
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button
                    style={{ backgroundColor: '#3A0F7D', width: '50%', }}
                    className="btn-round"
                    color=""
                    href="#pablo"
                    onClick={(e) => { e.preventDefault(); handlelogin() }}
                  >
                    Login
                  </Button>
                </CardFooter>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                  <div style={{ borderBottom: '1px black solid', width: '30%' }} />
                  <p style={{ alignSelf: 'center', marginTop: '10px' }}>or login with</p>
                  <div style={{ borderBottom: '1px black solid', width: '30%' }} />
                </div>
                <div className="social" style={{ marginTop: '20px', marginBottom: '20px' }}>
                  <img src={require("assets/img/facebook_img.png")} />
                  <img style={{ marginLeft: '20px', marginRight: '20px' }} src={require("assets/img/google_img.png")} />
                  <img src={require("assets/img/apple_img.png")} />
                </div>
                <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                  <p>
                    Don’t have an account yet?{" "}
                    <Link to="/auth/register" style={{ color: '#3A0F7D' }}>
                      Create New Account
                    </Link>
                  </p>
                </div>
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
  // requesting: state.login.requesting,
  // error: state.login.error
})

const mapDispatchToProps = dispatch => ({
  loginSuccess: data => dispatch(loginSuccess(data)),
  // resetMsg: () => dispatch(resetMsg())
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
