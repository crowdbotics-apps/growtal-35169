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

function Benefits() {
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
            Benefits
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
                    >
                      Check all the details of offer and benefits
                    </CardTitle>
                  </CardHeader>

                  <CardFooter>
                    <Button
                      className="btn-round"
                      color="info"
                      style={{ backgroundColor: "#3A0F7D" }}
                    >
                      Submit
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </Col>
          </Row>
        </div>

        <Modal
          isOpen={false}
          //   toggle={toggle}
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
              Expert Information
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
                  Expert
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
                  Rate
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
                  Description
                </Label>
                <Input
                  id="exampleText"
                  placeholder="Type here"
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
              Save
            </Button>
          </div>
        </Modal>
        <Modal
          isOpen={false}
          //   toggle={toggle}
          //    className={className}
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
              Edit Profile Information
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
                  Name
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
                  Company Name
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
                  Associate Email
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
                  Email for Invoice
                </Label>
                <Input placeholder="Type here" type="text" />
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
              Save
            </Button>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default Benefits
