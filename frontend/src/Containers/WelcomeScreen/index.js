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
            <Col className="ml-auto mr-auto" lg="6" md="8" sm="">
              <Form action="" className="form" method="">
                <Card className="card-login" style={{ marginTop: "8rem", }}>
                  <CardHeader>
                    <CardHeader>
                      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '30px' }}>
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
                    <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly', paddingBottom: '30px', marginLeft: 10, marginRight: 10 }}>
                      <Link to="/auth/register">
                        <div
                        // style={{width:'209px', height: '54px'}}
                        >
                          <p style={{
                            backgroundColor: '#3A0F7D',
                            padding: '15px 65px 15px 65px',
                            borderRadius: '50px',
                            color: 'white',
                            fontWeight: '700',
                            fontSize: '16px'
                          }}>Sign Up</p>
                        </div>
                      </Link>
                      <Link to="/auth/login">
                        <div >
                          <p style={{
                            border: '2px #3A0F7D solid',
                            padding: '15px 65px 15px 65px',
                            borderRadius: '50px',
                            color: '#3A0F7D',
                            fontWeight: '700',
                            fontSize: '16px'
                          }}>Log In</p>
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
