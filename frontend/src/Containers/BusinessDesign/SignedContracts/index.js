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
        <div
          className="header text-left"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h3
            className="title"
            style={{
              color: "#CACACA",
              fontFamily: "Libre Caslon Text",
              fontWeight: "700",
              fontSize: "22px"
            }}
            onClick={toggle}
          >
            Signed Contracts
          </h3>
          <Button
            onClick={toggle}
            className="btn-round btn"
            style={{
              backgroundColor: "#fff",
              color: "#3A0F7D",
              border: "1px solid  #3A0F7D",
              width: "220px",
              height: "49px",
              marginTop: "0px"
            }}
          >
            <img
              //   onClick={toggle}
              style={{
                height: 13,
                width: 13,
                marginTop: "-4px",
                // marginLeft: "20px"
                marginRight: "16px"
              }}
              src={require("assets/img/CSV.png")}
            />
            Expport Excel, CSV
          </Button>
        </div>

        <Modal
          isOpen={modal}
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
              Contract Details
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
                  Client Agreement
                </Label>
                <Input
                  placeholder="Client agreement title..."
                  type="text"
                  style={{ backgroundColor: "#EFEFEF" }}
                />
              </FormGroup>
              <FormGroup>
                <Label
                  style={{
                    color: "#808080",
                    fontSize: 14,
                    fontFamily: "khula"
                  }}
                >
                  Project Exhibitions
                </Label>
                <Input
                  placeholder="Lorem ipsum dolor sit amet, 
                  "
                  type="textarea"
                  style={{ backgroundColor: "#EFEFEF" }}
                />
              </FormGroup>
              <FormGroup>
                <Label
                  style={{
                    color: "#808080",
                    fontSize: 14,
                    fontFamily: "khula"
                  }}
                >
                  Expert FullName
                </Label>
                <Input
                  id="exampleText"
                  placeholder="Expert fullname goes here.."
                  name="text"
                  type="text"
                  style={{ backgroundColor: "#EFEFEF" }}
                />
              </FormGroup>
              <FormGroup>
                <Label
                  style={{
                    color: "#808080",
                    fontSize: 14,
                    fontFamily: "khula"
                  }}
                >
                  Document Type
                </Label>
                <Input
                  id="exampleText"
                  placeholder="Type of document goes here..."
                  name="text"
                  type="text"
                  style={{ backgroundColor: "#EFEFEF" }}
                />
              </FormGroup>
            </Form>
          </div>

          <div
            style={{
              margin: "20px",
              display: "flex"
              //   justifyContent: "center",
              //   alignItems: "center"
            }}
          >
            <Button
              onClick={toggle}
              className="btn-round"
              // color="secondary"
              style={{
                backgroundColor: "#3A0F7D",
                // width: "132px",
                height: "49px"
              }}
            >
              <img
                //   onClick={toggle}
                style={{
                  height: 13,
                  width: 13,
                  marginTop: "-4px",
                  // marginLeft: "20px"
                  marginRight: "16px"
                }}
                src={require("assets/img/csv.png")}
              />
              Expport Excel, CSV
            </Button>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default Benefits
