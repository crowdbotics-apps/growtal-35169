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


const WellcomeScreen = () => {
  return (
    <div
    // style={{ height: "100%", margin: 0 }}
    // className="full-page-background" 
    // style={{ backgroundColor: 'red', flex: 1 }}
    // className="full-page-background"
    // style={{
    //   backgroundImage: `url(${require("assets/img/bg/bg_img.png")})`,

    // }}
    >
      <div className="login-page">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4" md="6">
              <Form action="" className="form" method="">
                <Card className="card-login" style={{}}>
                  <CardHeader>
                    <CardHeader>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img style={{ alignSelf: 'center' }} src={require("assets/img/app_logo.png")} alt="Logo" />
                      </div>
                    </CardHeader>
                  </CardHeader>
                  <CardBody>
                    <br />
                    <FormGroup>
                      <p style={{ textAlign: 'center' }}>
                        Welcome to Growtal Inc. Please Login to access your

                      </p>
                      <p style={{ textAlign: 'center' }}>
                        account, or if you don’t

                      </p>
                      <p style={{ textAlign: 'center' }}>
                        have any account then Sign Up

                      </p>
                    </FormGroup>
                  </CardBody>
                  <CardFooter>

                    <Button
                      className="btn-round"
                      style={{ backgroundColor: '#3A0F7D', width: '40%', marginRight: 20, TextDecoration: 'none' }}
                      onClick={(e) => e.preventDefault()}
                    >
                      Sign Up
                    </Button>
                    <a>
                      <Button
                        className="btn-round"
                        color='primary'
                        outline
                        style={{ color: '#3A0F7D', borderColor: '#3A0F7D', width: '40%' }}
                        onClick={(e) => e.preventDefault()}
                        href="/login"
                      >
                        Log In
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
          </Row>
        </Container>
        <div
          className="full-page-background"
          style={{
            backgroundImage: `url(${require("assets/img/bg/bg_img.png")})`,

          }}
        />
      </div>
    </div>
  )
}

export default WellcomeScreen
