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
  Spinner
} from "reactstrap";
import Images from "utils/Images";

import { forgotRequest } from "./redux/actions";
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import useForm from "../../utils/useForm"
import validator from "../../utils/validation"

import { Toaster } from "react-hot-toast"


const ForgotScreen = (props) => {

  const {
    history,
    forgotRequest,
    requesting
  } = props

  const stateSchema = {
    email: {
      value: "",
      error: ""
    },
  }

  const validationStateSchema = {
    email: {
      required: true,
      validator: validator.email
    },
  }

  const { state, handleOnChange, disable } = useForm(
    stateSchema,
    validationStateSchema
  )

  const handleForgotPass = () => {
    const data = {
      email: state.email.value,
    }
    forgotRequest(data)
  }


  return (
    <>
      <div className="register-page">
        <Container>
          <Row style={{ justifyContent: 'space-between', marginTop: '2rem' }}>
            <Col className="mr-auto ml-atuo" lg="6" md="6">
              <img src={require("assets/img/left_images.png")} />
            </Col>

            <Col className="m-0" lg="6" md="6" >
              <p style={{
                display: 'flex',
                justifyContent: 'center',
                color: 'white',
                fontFamily: 'Libre Caslon Text',
                fontSize: '30px',
                fontWeight: '700'
              }}>Forgot Password</p>
              <Card className="card-signup text-center" style={{ padding: '30px' }}>
                <CardBody style={{ paddingTop: '30px' }}>
                  <Form action="m-0" className="form" method="">
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
                      <label style={{ color: "red", display: 'flex' }}>
                        {state.email.error}
                      </label>
                    )}

                    <FormGroup
                      check
                    // className="text-left"
                    >
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleForgotPass()}
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
                      /> : 'Submit'}</p>
                    </div>
                  </div>
                  {/* <Button
                    style={{ backgroundColor: '#3A0F7D', width: '50%', }}
                    className="btn-round"
                    color=""
                    href="#pablo"
                    onClick={(e) => { e.preventDefault(); handlelogin() }}
                  >
                    Submit
                  </Button> */}
                </CardFooter>

              </Card>
              <Link to="/auth/login">
                <p style={{ color: 'white' }}> <img src={require("assets/img/back_vector.png")} style={{ marginRight: '10px' }} />Cancel, Forgot Password</p>
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
  requesting: state.ForgotScreen.requesting,
  // error: state.login.error
})

const mapDispatchToProps = dispatch => ({
  forgotRequest: data => dispatch(forgotRequest(data)),
  // resetMsg: () => dispatch(resetMsg())
})
export default connect(mapStateToProps, mapDispatchToProps)(ForgotScreen)
