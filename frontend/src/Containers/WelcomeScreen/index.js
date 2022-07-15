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

import { Link } from "react-router-dom"


import Images from "utils/Images";


const WelcomeScreen = () => {
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
            <Col className="ml-auto mr-auto" lg="6" md="8">
              <Form action="" className="form m-0" method="">
                <Card className="card-login" style={{ marginTop: "8rem", padding: '50px', }}>
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
                    <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                      <Link to="/auth/register">
                        <div >
                          <p style={{ backgroundColor: '#3A0F7D', padding: '15px 65px 15px 65px', borderRadius: '50px', color: 'white' }}>Sign Up</p>
                        </div>
                      </Link>
                      <Link to="/auth/login">
                        <div >
                          <p style={{ border: '1px #3A0F7D solid', padding: '15px 65px 15px 65px', borderRadius: '50px', color: '#3A0F7D' }}>Sign In</p>
                        </div>
                      </Link>
                    </div>

                    {/* <Button
                        className=""
                        style={{ backgroundColor: '#3A0F7D', width: '40%', marginLeft: '20px', marginRight: '50px', TextDecoration: 'none' }}
                        onClick={(e) => e.preventDefault()}
                      >
                        Sign Up
                      </Button>

                    <Link to="/auth/register">
                      <Button
                        className=""
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
            backgroundImage: `url(${require("assets/img/bg/bg_img1.png")})`,

          }}
        >
          <div style={{ position: 'relative' }}>
            <img src={Images.vector_1} style={{ position: 'absolute', right: 19, top: 19, height: '80px', width: '80px' }} />
          </div>
          <img src={Images.vector_2} style={{ position: 'absolute', bottom: 19, left: 19, height: '80px', width: '80px' }} />
        </div>
      </div>
    </div >
  )
}

export default WelcomeScreen
