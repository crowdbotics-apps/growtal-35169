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
  ModalFooter,
  InputGroup,
  InputGroupAddon,
  InputGroupText
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
          >
            Expert Hired
          </h3>
          <InputGroup style={{ width: "361px", height: "49px" }}>
            <Input
              placeholder="Name of expert"
              type="text"
              style={{ color: "#000000" }}
              // onChange={e => handleOnChange("password", e.target.value)}
            />
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <img
                  style={{
                    height: 16,
                    width: 16,
                    marginLeft: "20px"
                    // marginRight: "12px"
                  }}
                  src={require("assets/img/search.png")}
                />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </>
  )
}

export default Benefits
