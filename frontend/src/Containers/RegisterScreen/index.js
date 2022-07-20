import React, { useState } from "react";

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

import { registerRequest } from "./redux/actions";
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import useForm from "../../utils/useForm"
import validator from "../../utils/validation"

import toast, { Toaster } from 'react-hot-toast';


const RegisterScreen = (props) => {

  const { history, registerRequest, requesting } = props

  const [check, setCheck] = useState(false)

  const stateSchema = {
    fullname: {
      value: "",
      error: ""
    },
    email: {
      value: "",
      error: ""
    },
    password: {
      value: "",
      error: ""
    },
    ConfirmPassword: {
      value: "",
      error: ""
    }
  }

  const validationStateSchema = {
    fullname: {
      required: true,
      // validator: validator.email
    },
    email: {
      required: true,
      validator: validator.email
    },
    password: {
      required: true
      //   validator: validator.password,
    },
    ConfirmPassword: {
      required: true
    }
  }

  const { state, handleOnChange, disable } = useForm(
    stateSchema,
    validationStateSchema
  )

  const handleSignUp = () => {
    if (state.fullname.value && state.email.value && state.password.value) {
      if (check) {
        const data = {
          name: state.fullname.value,
          email: state.email.value,
          password: state.password.value,
          user_type: "Expert"
        }
        console.log('data', data);
        registerRequest(data)
      } else {
        toast.error('Accept Terms and Condition');
      }
    } else {
      toast.error('All Fields are required');
    }
  }

  console.log('check..........', check);

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
              }}>Join as an Expert</h5>
              <Card className="card-signup text-center" style={{ padding: '30px 20px 0px 20px' }}>
                <CardBody style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                  <Form action="" className="form" method="">
                    <label style={{ display: 'flex' }}>Full Name</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          {/* <i className="nc-icon nc-circle-10" /> */}
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Type fullname" type="text" onChange={e => handleOnChange("fullname", e.target.value)} />
                    </InputGroup>
                    {state.fullname.error && (
                      <label style={{ color: "red", display: 'flex', marginBottom: '0px' }}>
                        {state.fullname.error}
                      </label>
                    )}
                    <label style={{ display: 'flex' }}>Eamil</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          {/* <i className="nc-icon nc-email-85" /> */}
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Type email" type="email" onChange={e => handleOnChange("email", e.target.value)} />
                    </InputGroup>
                    {state.email.error && (
                      <label style={{ color: "red", display: 'flex', marginBottom: '0px' }}>
                        {state.email.error}
                      </label>
                    )}

                    <label style={{ display: 'flex' }}>Password</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          {/* <i className="nc-icon nc-circle-10" /> */}
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Type password" type="password" onChange={e => handleOnChange("password", e.target.value)} />
                    </InputGroup>
                    {state.password.error && (
                      <label style={{ color: "red", display: 'flex', marginBottom: '0px' }}>
                        {state.password.error}
                      </label>
                    )}
                    <label style={{ display: 'flex' }}>Confirm Password</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          {/* <i className="nc-icon nc-email-85" /> */}
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Type password" type="password" onChange={e => handleOnChange("ConfirmPassword", e.target.value)} />
                    </InputGroup>
                    {state.ConfirmPassword.error && (
                      <label style={{ color: "red", display: 'flex', marginBottom: '0px' }}>
                        {state.ConfirmPassword.error}
                      </label>
                    )}

                    <FormGroup
                      check
                    // className="text-left"
                    >

                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Label check>
                          <Input type="checkbox" style={{}}
                            onClick={(e) => console.log(e)}
                            onChange={() => setCheck(!check)}
                          />
                          <span className="form-check-sign" style={{ height: '10px', backgroundColor: '#3A0F7D' }} />
                          <span style={{
                            color: '#808080',
                            fontFamily: 'Khula',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '22px',
                            margin: "0px"
                          }}> By signing up, you agree to our <span style={{ color: '#3A0F7D' }}> Terms and Conditions </span></span>
                        </Label>
                      </div>
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }} onClick={(e) => { e.preventDefault(); handleSignUp() }}>
                    <div
                      style={{ cursor: 'pointer' }}
                    >
                      <p style={{
                        backgroundColor: '#3A0F7D',
                        padding: '15px 85px 15px 85px',
                        borderRadius: '50px',
                        color: 'white',
                        fontWeight: '700',
                        fontSize: '16px'
                      }}>{requesting ? <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      /> : "Sign Up"}</p>
                    </div>
                  </div>
                  {/* <Button
                    style={{ backgroundColor: '#3A0F7D', width: '50%', }}
                    className="btn-round"
                    color=""
                    href="#pablo"
                    onClick={(e) => { e.preventDefault(); handleSignUp() }}
                  >
                    Sign Up
                  </Button> */}
                </CardFooter>

              </Card>
              <Link to="/auth/login">
                <p style={{ color: 'white' }}> <img src={require("assets/img/back_vector.png")} style={{ marginRight: '10px' }} /> Cancel, Creating account</p>
              </Link>
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
  // userData: state.LoginScreen.user,
  requesting: state.RegisterScreen.requesting,
  // error: state.login.error
})

const mapDispatchToProps = dispatch => ({
  registerRequest: data => dispatch(registerRequest(data)),
  // resetMsg: () => dispatch(resetMsg())
})
export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
