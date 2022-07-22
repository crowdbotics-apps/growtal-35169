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
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap"
import Select from "react-select"

function TimeTracker() {
  const [businessName, setBusinessName] = useState(false)
  const [category, setCategory] = useState(false)
  const [city, setCity] = useState(false)
  const [branches, setBranches] = useState(false)
  const [fullName, setFullName] = useState(false)
  const [position, setPosition] = useState(false)
  const [mobileNo, setMobileNo] = useState(false)
  const [modal, setModal] = useState(false)
  const [modals, setModals] = useState(false)
  const toggle = () => setModal(!modal)
  const toggles = () => setModals(!modal)
  const handleSubmit = () => {}

  return (
    <>
      <div
        style={
          {
            // backgroundColor: "#E8E8E8"
          }
        }
        className="content"
      >
        <div
          className="header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row"
          }}
        >
          <h3
            style={{
              color: "#CACACA",
              fontSize: 22,
              fontFamily: "Libre Caslon Tex"
            }}
          >
            Approve Accounts
          </h3>
          <div
            className="header"
            style={{
              display: "flex",
              alignItems: "center",

              marginTop: "-20px"
            }}
          >
            <UncontrolledDropdown>
              <DropdownToggle
                aria-haspopup={true}
                // caret
                color="default"
                data-toggle="dropdown"
                id="navbarDropdownMenuLink"
                nav
              >
                <Button
                  className="btn-round btn"
                  style={{
                    backgroundColor: "#fff",
                    color: "#3A0F7D",
                    border: "1px solid  #3A0F7D"
                  }}
                >
                  <img
                    style={{
                      height: "11px",
                      width: "12px",
                      // marginLeft: "20px",
                      marginRight: "4px"
                    }}
                    src={require("assets/img/filtericon.png")}
                  />
                  filter
                </Button>
                {/* <img
                  style={{
                    height: 42,
                    width: 115,
                    marginLeft: "20px"
                    // marginRight: "12px"
                  }}
                  src={require("assets/img/filter.png")}
                /> */}
              </DropdownToggle>
              <DropdownMenu
                persist
                aria-labelledby="navbarDropdownMenuLink"
                right
              >
                <div style={{ margin: 10, width: 326 }}>
                  <InputGroup style={{}}>
                    <Input
                      placeholder="Search"
                      type="text"
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
                  <h6
                    style={{
                      color: "#808080",
                      fontSize: "14px",
                      marginTop: "20px"
                    }}
                  >
                    Custom Time
                  </h6>
                  <div style={{ display: "flex" }}>
                    <InputGroup style={{ margin: 5 }}>
                      <Input
                        placeholder="-From"
                        type="date"
                        // onChange={e => handleOnChange("password", e.target.value)}
                      />
                    </InputGroup>
                    <InputGroup style={{ margin: 5 }}>
                      <Input
                        placeholder="-To"
                        type="date"
                        // onChange={e => handleOnChange("password", e.target.value)}
                      />
                    </InputGroup>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "30px"
                    }}
                  >
                    <Button
                      className="btn-link"
                      color="secondary"
                      style={{ color: "#3A0F7D" }}
                    >
                      <img
                        style={{
                          height: 12,
                          width: 12,
                          // marginLeft: "20px"
                          marginRight: "5px"
                        }}
                        src={require("assets/img/cross.png")}
                      />
                      Clear
                    </Button>
                    <img
                      style={{
                        height: 42,
                        width: 115,
                        marginLeft: "20px",
                        marginRight: "5px"
                      }}
                      src={require("assets/img/apply.png")}
                    />
                  </div>
                </div>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle
                aria-haspopup={true}
                // caret
                color="default"
                data-toggle="dropdown"
                id="navbarDropdownMenuLink"
                nav
              >
                <Button
                  className="btn-round"
                  // color="secondary"
                  style={{
                    backgroundColor: "#3A0F7D",
                    width: 160,
                    marginLeft: "-20px"
                  }}
                >
                  More Action
                  <img
                    style={{
                      height: 12,
                      width: 12,
                      marginLeft: "10px",
                      marginTop: "-3px"
                      // marginRight: "5px"
                      // backgroundColor: "#3A0F7D"
                    }}
                    src={require("assets/img/down.png")}
                  />
                </Button>
                {/* <img
                  style={{
                    height: 42,
                    width: 152,
                    // marginLeft: "20px"
                    marginRight: "20px"
                  }}
                  src={require("assets/img/moreAction.png")}
                /> */}
              </DropdownToggle>
              <DropdownMenu
                persist
                aria-labelledby="navbarDropdownMenuLink"
                right
              >
                <DropdownItem
                  style={{
                    color: "#3A0F7D",
                    fontFamily: "Khula",
                    fontSize: 15
                  }}
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Request Hours
                </DropdownItem>
                <DropdownItem
                  style={{
                    color: "#3A0F7D",
                    fontFamily: "Khula",
                    fontSize: 15
                  }}
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Request Engagement
                </DropdownItem>
                <DropdownItem
                  style={{
                    color: "#3A0F7D",
                    fontFamily: "Khula",
                    fontSize: 15
                  }}
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  End Engagement
                </DropdownItem>
                <DropdownItem
                  style={{
                    color: "#3A0F7D",
                    fontFamily: "Khula",
                    fontSize: 15
                  }}
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Manage Engagement Hour
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
        <div
          className="header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "-75px"
          }}
        >
          <h3
            onClick={toggle}
            style={{
              color: "#808080",
              fontSize: "14px",
              fountFimly: "khula",
              marginLeft: "20px"
            }}
          >
            Experts
          </h3>
          <h3
            onClick={toggle}
            style={{
              color: "#808080",
              fontSize: "14px",
              fountFimly: "khula",
              marginRight: "34px"
            }}
          >
            Actions
          </h3>
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
              Expert Rating
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
                <Input
                  placeholder="Expert Name goes here.."
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
                border: "1px solid  #3A0F7D"
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={toggle}
              className="btn-round"
              // color="secondary"
              style={{ backgroundColor: "#3A0F7D" }}
            >
              Submit
            </Button>
          </div>
        </Modal>


       

        

      
      </div>
    </>
  )
}

export default TimeTracker
