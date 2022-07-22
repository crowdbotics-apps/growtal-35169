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
            Historical View
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
      </div>
    </>
  )
}

export default Benefits
