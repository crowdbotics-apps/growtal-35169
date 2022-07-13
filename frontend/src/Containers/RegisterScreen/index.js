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

const RegisterScreen = () => {
  return (
    <div
      className="register-page">
      <Container>
        <Row>
          <Col className="ml-auto" lg="5" md="5">
            <img src={require("assets/img/left_images.png")} />
          </Col>

          <Col className="mr-auto" lg="4" md="6">
            <h5 style={{ display: 'flex', justifyContent: 'center', color: 'white', fontFamily: 'Libre Caslon Text', fontWeight: '  ' }}>Join as an Expert</h5>
            <Card className="card-signup text-center">
              <CardBody>
                <Form action="" className="form" method="">
                  <label style={{ display: 'flex' }}>First Name</label>
                  <InputGroup>

                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        {/* <i className="nc-icon nc-single-02" /> */}
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Type fullname" type="text" />
                  </InputGroup>
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
                  <label style={{ display: 'flex' }}>Confirm Password</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        {/* <i className="nc-icon nc-email-85" /> */}
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Type password" type="email" />
                  </InputGroup>
                  <FormGroup check className="text-left">
                    <Label check>
                      <Input type="checkbox" style={{ height: '10px' }} />
                      <span className="form-check-sign" />By signing up, you agree to our{" "}
                      <a style={{ color: '#3A0F7D' }} href="#pablo" onClick={(e) => e.preventDefault()}>
                        terms and conditions
                      </a>
                      .
                    </Label>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button
                  style={{ backgroundColor: '#3A0F7D', width: '50%' }}
                  className="btn-round"
                  color=""
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Sign Up
                </Button>
              </CardFooter>
            </Card>
            <p style={{ color: 'white' }}> <img src={require("assets/img/back_vector.png")} style={{ marginRight: '10px' }} /> Cancel, Creating account</p>
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

export default RegisterScreen
