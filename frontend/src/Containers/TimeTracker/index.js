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
  Col
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

  const handleSubmit = () => { }

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                {/* <CardTitle tag='h4' className='text-center'>
                  Registration
                </CardTitle> */}
              </CardHeader>

              <CardBody>
                <Form action="#" method="#">
                  {/* <CardTitle tag='h5'>Business Profile</CardTitle> */}
                  <Row>
                    <Col md="3" lg="3" sm="3" xs="3">
                      <label md="3">Engagement</label>
                      <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        name="singleSelect"
                        value={category}
                        onChange={value => setCategory(value)}
                        options={[
                          { value: 1, label: "Coffee" },
                          { value: 2, label: "Resturant" }
                        ]}
                        placeholder="-Select from below"
                      />
                    </Col>
                    <Col md="3" lg="3" sm="3" xs="3">
                      <label md="3">Client</label>
                      <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        name="singleSelect"
                        value={category}
                        onChange={value => setCategory(value)}
                        options={[
                          { value: 1, label: "Coffee" },
                          { value: 2, label: "Resturant" }
                        ]}
                        placeholder="-Select from below"
                      />
                    </Col>

                    <Col md="2" lg="2" sm="2" xs="2">
                      <label>Time</label>
                      <FormGroup>
                        <Input
                          placeholder="hour"
                          type="text"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col
                      md="1"
                      lg="1"
                      sm="1"
                      xs="1"
                      style={{
                        alignSelf: "center",
                        padding: "0px",
                        margin: "0px"
                      }}
                    >
                      <label style={{ margin: "0px" }}>Hour</label>
                    </Col>
                    <Col md="2" lg="2" sm="2" xs="2">
                      <label md="3"></label>
                      <FormGroup>
                        <Input
                          placeholder="Minutes"
                          type="text"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col
                      md="1"
                      lg="1"
                      sm="1"
                      xs="1"
                      style={{
                        alignSelf: "center",
                        padding: "0px",
                        margin: "0px"
                      }}
                    >
                      <label style={{ margin: "0px" }}>Minutes</label>
                    </Col>
                    <Col md="4">
                      <label md="3">Date</label>
                      <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        name="singleSelect"
                        value={branches}
                        onChange={value => setBranches(value)}
                        options={[
                          {
                            value: 1,
                            label: "1"
                          },
                          { value: 2, label: "2" },
                          { value: 3, label: "3" },
                          { value: 4, label: "4" }
                        ]}
                        placeholder="-Select date"
                      />
                    </Col>
                    {/* <Col md='6'>
                      <label md='3'>CR Number</label>
                      <Input placeholder='Type Here' type='text' />
                    </Col> */}
                  </Row>

                  {/* <CardTitle tag='h5' className='mt-4'>
                    Applier Information
                  </CardTitle> */}
                  <Row>
                    <Col md="12">
                      <label md="3">Description</label>
                      <FormGroup>
                        <Input
                          placeholder="Type Here"
                          type="textarea"
                          onChange={e => setFullName(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    {/* <Col md='6'>
                      <label md='3'>Business Position</label>
                      <Select
                        className='react-select primary'
                        classNamePrefix='react-select'
                        name='singleSelect'
                        value={position}
                        onChange={value => setPosition(value)}
                        options={[
                          { value: 1, label: 'Publisher' },
                          { value: 2, label: 'Not a Publisher' }
                        ]}
                        placeholder='Select Position'
                      />
                    </Col>
                    <Col md='6'>
                      <label>Mobile</label>
                      <FormGroup>
                        <Input
                          placeholder='Type Here'
                          type='text'
                          onChange={e => setMobileNo(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md='6'>
                      <label>Email</label>
                      <FormGroup>
                        <Input
                          placeholder='Type Here'
                          type='email'
                          setEmail={e => e.target.value}
                        />
                      </FormGroup>
                    </Col> */}
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                {/* <Button className='btn-round' color='info' style={{ backgroundColor: '#3A0F7D' }}>
                  Submit
                </Button> */}
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  onClick={e => {
                    e.preventDefault()
                    handleSubmit()
                  }}
                >
                  <div style={{ cursor: "pointer" }}>
                    <p
                      style={{
                        backgroundColor: "#3A0F7D",
                        padding: "10px 65px 10px 65px",
                        borderRadius: "50px",
                        color: "white",
                        fontWeight: "700",
                        fontSize: "16px"
                      }}
                    >
                      {"Submit"}
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default TimeTracker
