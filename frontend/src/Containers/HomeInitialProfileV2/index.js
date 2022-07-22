import React, { useState } from "react";
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

import { Link } from "react-router-dom"

import Select from "react-select";


import Images from "utils/Images";
import useForm from "../../utils/useForm"
import validator from "../../utils/validation"


const HomeInitialProfileV2 = () => {

  const [multipleSelect, setMultipleSelect] = useState('');
  const [singleSelect, setSingleSelect] = useState('');


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
          <img style={{ width: '90px', height: '25px' }} src={Images.profile_page_2} alt="Logo" />
          {/* <h1>Complete Your Profile</h1> */}
        </div>
        <Row>
          <Col className="ml-auto mr-auto" lg="8" md="8" sm="8" xs="8">
            <Form action="" className="form" method="">
              <Card className="card-login" style={{ marginTop: "30px", }}>
                <CardHeader>

                </CardHeader>
                <CardBody>
                  <div style={{ justifyContent: 'center', display: 'flex', }}>
                    <div style={{ width: '400px' }}>
                      <div>
                        <label style={{ display: 'flex', marginTop: '10px' }}>Resume</label>
                        <div style={{ backgroundColor: 'rgba(58, 15, 125, 0.3)', width: '100%', height: '55px', border: '1px black dotted' }}>
                          <p style={{ textAlign: 'center', paddingTop: '20px', color: '#6434AD' }}>+ Add Resume</p>
                        </div>
                        {/* <img style={{ width: '90px', height: '25px' }} src={Images.add_resume} alt="Logo" /> */}

                      </div>
                      <div style={{ maxWidth: '110px', marginTop: '25px' }}>
                        <label style={{ display: 'flex', marginTop: '10px' }}>Hourly Rate</label>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <Input placeholder="Rate" type="email" onChange={e => handleOnChange("email", e.target.value)} style={{ height: '55px' }} />
                          <p style={{ alignSelf: 'center', margin: 0, paddingLeft: '12px' }}>/hr</p>
                        </div>
                      </div>
                      <div style={{ marginTop: '25px' }}>
                        <label style={{ display: 'flex', marginTop: '10px' }}>Expert Bio</label>
                        {/* <InputGroup> */}
                        <Input placeholder="Type here" type="textarea" onChange={e => handleOnChange("email", e.target.value)} style={{ height: '170px' }} />
                        {/* </InputGroup> */}
                        {state.email.error && (
                          <label style={{ color: "red", display: 'flex', marginBottom: '0px' }}>
                            {state.email.error}
                          </label>
                        )}
                      </div>
                      <div style={{ marginTop: '25px' }}>
                        <label style={{ display: 'flex', marginTop: '10px' }}>Vertical Section</label>
                        <Select
                          className="react-select"
                          classNamePrefix="react-select"
                          placeholder="Choose"
                          name="multipleSelect"
                          closeMenuOnSelect={false}
                          isMulti
                          value={multipleSelect}
                          onChange={(value) => setMultipleSelect(value)
                            // this.setState({multipleSelect: value })
                          }
                          options={[
                            {
                              value: "",
                              label: " Multiple Options",
                              isDisabled: true,
                            },
                            { value: "2", label: "1 " },
                            { value: "3", label: "2" },
                            { value: "4", label: "3" },
                            { value: "5", label: "4" },
                            { value: "6", label: "5" },
                            { value: "7", label: "7" },
                            { value: "8", label: "8" },
                            { value: "9", label: "9" },
                            { value: "10", label: "10" },
                            { value: "11", label: "11" },
                            { value: "12", label: "12" },
                          ]}
                        />
                      </div>
                      <div style={{ marginTop: '25px' }}>
                        <label style={{ display: 'flex', marginTop: '10px' }}>Weekly Availability</label>
                        <Select
                          className="react-select"
                          classNamePrefix="react-select"
                          name="singleSelect"
                          value={singleSelect}
                          onChange={(value) =>
                            setSingleSelect(value)
                          }
                          options={[
                            {
                              value: "",
                              label: "Single Option",
                              isDisabled: true,
                            },
                            { value: "2", label: "Foobar" },
                            { value: "3", label: "Is great" },
                          ]}
                          placeholder="Single Select"
                        />
                      </div>

                      {/* <Col lg="5" md="6" sm="3">

                      </Col> */}
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px', marginLeft: 10, marginRight: 10 }}>
                    <Link to="/auth/register">
                      <div
                      // style={{width:'209px', height: '54px'}}
                      >
                        <p style={{
                          backgroundColor: '#3A0F7D',
                          padding: '15px 40px 15px 40px',
                          borderRadius: '50px',
                          color: 'white',
                          fontWeight: '700',
                          fontSize: '16px'
                        }}>Complete Profile</p>

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

export default HomeInitialProfileV2
