import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row,
} from "reactstrap";

import ImageUpload from "components/CustomUpload/ImageUpload";

import { Link } from "react-router-dom"


import Images from "utils/Images";
import useForm from "../../utils/useForm"
import validator from "../../utils/validation"


const HomeIntialProfile = () => {
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
  return (
    // <div
    //   className="full-page-background"
    //   style={{
    //     backgroundImage: `url(${require("assets/img/bg/simple_bg.png")})`,
    //     // paddingBottom: '10px'
    //   }}
    // >
    <div className="login-page">
      <Container>
        <div style={{ justifyContent: 'center', display: 'flex', marginTop: '0px', marginBottom: '47px' }}>
          <img style={{ width: '140px', height: '40px' }} src={Images.logo_name} alt="Logo" />
          {/* <h1>Complete Your Profile</h1> */}
        </div>
        <div style={{ justifyContent: 'center', display: 'flex', }}>
          {/* <img style={{ width: '140px', height: '40px' }} src={Images.logo_name} alt="Logo" /> */}
          <p style={{
            fontFamily: 'Libre Caslon Text',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '22px',
            lineHeight: '27px',
            color: 'white'
          }}>Complete Your Profile</p>
        </div>
        <div style={{ justifyContent: 'center', display: 'flex', marginTop: '30px', marginBottom: '0px' }}>
          <img style={{ width: '90px', height: '25px' }} src={Images.profile_page_1} alt="Logo" />
          {/* <h1>Complete Your Profile</h1> */}
        </div>
        <Row>
          <Col className="ml-auto mr-auto" lg="8" md="8" sm="8" xs="8">
            <Form action="" className="form" method="">
              <Card className="card-login" style={{ marginTop: "30px", }}>
                <CardHeader>
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                    <ImageUpload />
                  </div>
                  {/* <div className="author" style={{ justifyContent: 'center', display: 'flex', marginTop: '40px' }}>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={Images.default_picture}
                        style={{ width: '138px', height: '138px' }}
                      />
                      <div
                      // style={{width:'209px', height: '54px'}}
                      >
                        <p style={{
                          backgroundColor: '#6EF5C3',
                          padding: '10px 24px 6px 24px',
                          borderRadius: '50px',
                          color: '#3A0F7D',
                          fontWeight: '700',
                          fontSize: '16px'
                        }}>Upload Picture</p>
                      </div>
                    </a>
                  </div> */}
                </CardHeader>
                <CardBody>
                  <div style={{ justifyContent: 'center', display: 'flex', }}>
                    <div style={{ width: '400px' }}>
                      <div>
                        <label style={{ display: 'flex', marginTop: '10px' }}>Full Name</label>
                        {/* <InputGroup> */}
                        {/* <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <img src={Images.email_logo} />
                          </InputGroupText>
                        </InputGroupAddon> */}
                        <Input placeholder="Type name" type="email" onChange={e => handleOnChange("email", e.target.value)} style={{ height: '55px' }} />
                        {/* </InputGroup> */}
                        {state.email.error && (
                          <label style={{ color: "red", display: 'flex', marginBottom: '0px', }}>
                            {state.email.error}
                          </label>
                        )}
                      </div>
                      <div>
                        <label style={{ display: 'flex', marginTop: '10px' }}>Eamil</label>
                        {/* <InputGroup> */}
                        <Input placeholder="Type email" type="email" onChange={e => handleOnChange("email", e.target.value)} style={{ height: '55px' }} />
                        {/* </InputGroup> */}
                        {state.email.error && (
                          <label style={{ color: "red", display: 'flex', marginBottom: '0px' }}>
                            {state.email.error}
                          </label>
                        )}
                      </div>
                      <div>
                        <label style={{ display: 'flex', marginTop: '10px' }}>LinkedIn Profile Link</label>
                        {/* <InputGroup> */}
                        <Input placeholder="https://" type="email" onChange={e => handleOnChange("email", e.target.value)} style={{ height: '55px' }} />
                        {/* </InputGroup> */}
                        {state.email.error && (
                          <label style={{ color: "red", display: 'flex', marginBottom: '0px' }}>
                            {state.email.error}
                          </label>
                        )}
                      </div>
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly', paddingBottom: '30px', marginLeft: 10, marginRight: 10 }}>
                    <Link to="/auth/HomeInitialProfileV2">
                      <div
                      // style={{width:'209px', height: '54px'}}
                      >
                        <p style={{
                          backgroundColor: '#3A0F7D',
                          padding: '15px 21px 15px 35px',
                          borderRadius: '50px',
                          color: 'white',
                          fontWeight: '700',
                          fontSize: '16px'
                        }}>Continue <img src={Images.forward_vector} style={{ marginLeft: '48px' }} /></p>

                      </div>
                    </Link>
                  </div>
                  {/* <Link to="/auth/register">
                      <Button
                        className="btn-round"
                        style={{ backgroundColor: '#3A0F7D', width: '40%', marginLeft: '20px', marginRight: '50px', TextDecoration: 'none' }}
                        onClick={(e) => e.preventDefault()}
                      >
                        Sign Up
                      </Button>
                    </Link>
                    <Link to="/auth/register">
                      <Button
                        className="btn-round"
                        outline
                        style={{ color: '#3A0F7D', borderColor: '#3A0F7D', width: '40%', }}
                        onClick={(e) => e.preventDefault()}
                        href="/auth/login"
                      >
                        Log In
                      </Button>
                    </Link> */}
                </CardFooter>
              </Card>
            </Form>
          </Col>
        </Row>
      </Container>
      <div
        className="full-page-background"
        style={{
          backgroundImage: `url(${require("assets/img/bg/simple_bg.png")})`
        }}
      />
    </div>
    // </div >
  )
}

export default HomeIntialProfile
