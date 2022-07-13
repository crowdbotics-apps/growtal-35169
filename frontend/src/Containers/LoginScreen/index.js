/*!

=========================================================
* Paper Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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


const LoginScreen = () => {
  return (
    <div className="register-page">
      <Container>
        <Row>
          <Col className="ml-auto" lg="5" md="5">
            <img src={require("assets/img/left_images.png")} />
          </Col>

          <Col className="mr-auto" lg="4" md="6">
            <h5 style={{ display: 'flex', justifyContent: 'center', color: 'white', fontFamily: 'Libre Caslon Text', fontWeight: '  ' }}>Login</h5>
            <Card className="card-signup text-center">
              <CardBody>
                <Form action="" className="form" method="">

                  <label style={{ display: 'flex' }}>Email</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        {/* <i className="nc-icon nc-circle-10" /> */}
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Type eamil" type="text" />
                  </InputGroup>
                  <label style={{ display: 'flex' }}>Password</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        {/* <i className="nc-icon nc-email-85" /> */}
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Type password" type="email" />
                  </InputGroup>

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
                        <a style={{ color: '#3A0F7D' }} href="#pablo" onClick={(e) => e.preventDefault()}>
                          Forgot Password
                        </a>
                      </Label>
                    </div>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                {/* <div style={{ backgroundColor: '#3A0F7D' }}> */}
                <Button
                  style={{ backgroundColor: '#3A0F7D', width: '50%' }}
                  className="btn-round"
                  color=""
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Login
                </Button>
                {/* </div> */}
              </CardFooter>
              <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <div style={{ borderBottom: '1px black solid', width: '30%' }} />
                <p style={{ textAlign: 'center' }}>or login with</p>
                <div style={{ borderBottom: '1px black solid', width: '30%' }} />
              </div>
              <div className="social">
                <img src={require("assets/img/facebook_img.png")} />
                <img style={{ marginLeft: '20px', marginRight: '20px' }} src={require("assets/img/google_img.png")} />
                <img src={require("assets/img/apple_img.png")} />
              </div>
              <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <p>
                  Don’t have an account yet?
                  <a href="#" style={{ color: '#3A0F7D' }}>
                    Create New Account
                  </a>
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
      />
    </div >
  )
}

export default LoginScreen
