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


const ForgotScreen = () => {
  return (
    <div
      className="register-page">
      <Container>
        <Row>
          <Col className="ml-auto" lg="5" md="5">
            <img src={require("assets/img/left_images.png")} />
          </Col>

          <Col className="mr-auto" lg="4" md="6">
            <h5 style={{ display: 'flex', justifyContent: 'center', color: 'white', fontFamily: 'Libre Caslon Text', fontWeight: '  ' }}>Forgot Password</h5>
            <Card className="card-signup text-center">
              <CardBody>
                <Form action="" className="form" method="">
                  <label style={{ display: 'flex' }}>Email</label>
                  <InputGroup>

                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        {/* <i className="nc-icon nc-single-02" /> */}
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Type email" type="text" />
                  </InputGroup>


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
                  Submit
                </Button>
              </CardFooter>
            </Card>
            <p style={{ color: 'white' }}> <img src={require("assets/img/back_vector.png")} style={{ marginRight: '10px' }} /> Cancel, Forgot Password</p>
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

export default ForgotScreen
