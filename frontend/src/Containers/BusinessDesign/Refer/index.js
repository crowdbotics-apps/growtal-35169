import React, { useState } from "react"

// hooks
// import {useForm} from 'react-hook-form'

//Components
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
  FormText,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap"
import Select from "react-select"

function Refer() {
  const [businessName, setBusinessName] = useState(false)
  const [category, setCategory] = useState(false)
  const [city, setCity] = useState(false)
  const [branches, setBranches] = useState(false)
  const [fullName, setFullName] = useState(false)
  const [position, setPosition] = useState(false)
  const [mobileNo, setMobileNo] = useState(false)
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  const handleSubmit = () => {}

  return (
    <>
      <div className="content">
        <div className="header text-left">
          <h3
            className="title"
            style={{
              color: "#CACACA",
              fontFamily: "Libre Caslon Text",
              fontWeight: "700",
              fontSize: "22px"
            }}
          >
            Refer
          </h3>
        </div>
        <div style={{ marginTop: "-30px" }}>
          <Row>
            <Col md="12">
              <Card>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "2px solid #E2E2E2",
                    borderRadius: "10px"
                  }}
                >
                  <CardHeader>
                    <CardTitle
                      className="text-center"
                      style={{ marginTop: "0px" }}
                      onClick={toggle}
                    >
                      You can refer an Expert
                    </CardTitle>
                  </CardHeader>

                  <CardFooter>
                    <Button
                      className="btn-round"
                      color="info"
                      style={{ backgroundColor: "#3A0F7D" }}
                    >
                      Refer Expert
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div style={{}}>
          <Row>
            <Col md="12">
              <Card>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "2px solid #E2E2E2",
                    borderRadius: "10px"
                  }}
                >
                  <CardHeader>
                    <CardTitle
                      className="text-center"
                      style={{ marginTop: "0px" }}
                    >
                      You can refer a Business
                    </CardTitle>
                  </CardHeader>

                  <CardFooter>
                    <Button
                      className="btn-round"
                      color="info"
                      style={{ backgroundColor: "#3A0F7D" }}
                      onClick={toggle}
                    >
                      Refer Business
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div style={{}}>
          <Row>
            <Col md="12">
              <Card>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "2px solid #E2E2E2",
                    borderRadius: "10px"
                  }}
                >
                  <CardHeader>
                    <CardTitle
                      className="text-center"
                      style={{ marginTop: "0px" }}
                    >
                      Preview you referral History
                    </CardTitle>
                  </CardHeader>

                  <CardFooter>
                    <Button
                      className="btn-round"
                      color="info"
                      style={{ backgroundColor: "#3A0F7D" }}
                    >
                      Referral History
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </Col>
          </Row>
        </div>

        <Modal
          isOpen={false}
          toggle={toggle}
          // className={className}
          // external={externalCloseBtn}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              margin: "20px"
            }}
          >
            <h5
              style={{
                color: "#CACACA",
                fontSize: "22px",
                fountFimly: "Libre Caslon Text",

                fontWeight: "700",
                marginRight: "10px"
              }}
            >
              Refer an Expert
            </h5>
            <img
              onClick={toggle}
              style={{
                height: 15,
                width: 15,
                marginTop: "-10px",
                marginLeft: "20px"
                // marginRight: "12px"
              }}
              src={require("assets/img/cros.png")}
            />
          </div>
          <div style={{ marginLeft: "20px", marginRight: "20px" }}>
            <Form>
              <FormGroup>
                <Label
                  style={{
                    color: "#808080",
                    fontSize: 14,
                    fontFamily: "khula"
                  }}
                >
                  Name of Expert
                </Label>
                <Input placeholder="Type here" type="text" />
              </FormGroup>
              <FormGroup>
                <Label
                  style={{
                    color: "#808080",
                    fontSize: 14,
                    fontFamily: "khula"
                  }}
                >
                  Shareable Application Link
                </Label>
                <Input placeholder="https://" type="text" />
              </FormGroup>
              <FormGroup>
                <Label
                  style={{
                    color: "#808080",
                    fontSize: 14,
                    fontFamily: "khula"
                  }}
                >
                  Explanation of Incentives
                </Label>
                <Input
                  id="exampleText"
                  placeholder="Description"
                  name="text"
                  type="textarea"
                />
              </FormGroup>
            </Form>
          </div>

          <div
            style={{
              margin: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Button
              onClick={toggle}
              className="btn-round btn"
              style={{
                backgroundColor: "#fff",
                color: "#3A0F7D",
                border: "1px solid  #3A0F7D",
                width: "132px",
                height: "49px"
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={toggle}
              className="btn-round"
              // color="secondary"
              style={{
                backgroundColor: "#3A0F7D",
                width: "132px",
                height: "49px"
              }}
            >
              Submit
            </Button>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default Refer
