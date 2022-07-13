import React, { useState } from 'react'

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
} from 'reactstrap'
import Select from 'react-select'

function Registration() {
  const [businessName, setBusinessName] = useState(false)
  const [category, setCategory] = useState(false)
  const [city, setCity] = useState(false)
  const [branches, setBranches] = useState(false)
  const [fullName, setFullName] = useState(false)
  const [position, setPosition] = useState(false)
  const [mobileNo, setMobileNo] = useState(false)

  return (
    <>
      <div className='content'>
        <Row>
          <Col md='12'>
            <Card>
              <CardHeader>
                <CardTitle tag='h4' className='text-center'>
                  Registration
                </CardTitle>
              </CardHeader>

              <CardBody>
                <Form action='#' method='#'>
                  <CardTitle tag='h5'>Business Profile</CardTitle>
                  <Row>
                    <Col md='6'>
                      <label md='3'>Business Name</label>
                      <FormGroup>
                        <Input
                          placeholder='Type Here'
                          type='text'
                          onChange={e => setBusinessName(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md='6'>
                      <label md='3'>Business Category</label>
                      <Select
                        className='react-select primary'
                        classNamePrefix='react-select'
                        name='singleSelect'
                        value={category}
                        onChange={value => setCategory(value)}
                        options={[
                          { value: 1, label: 'Coffee' },
                          { value: 2, label: 'Resturant' }
                        ]}
                        placeholder='Select Category'
                      />
                    </Col>

                    <Col md='6'>
                      <label>Password</label>
                      <FormGroup>
                        <Input
                          placeholder='Type Here'
                          type='password'
                          autoComplete='off'
                        />
                      </FormGroup>
                    </Col>
                    <Col md='6'>
                      <label md='3'>City</label>
                      <Select
                        className='react-select primary'
                        classNamePrefix='react-select'
                        name='singleSelect'
                        value={city}
                        onChange={value => setCity(value)}
                        options={[{ value: 1, label: 'Medina' }]}
                        placeholder='Select City'
                      />
                    </Col>
                    <Col md='6'>
                      <label md='3'>Number of Branches</label>
                      <Select
                        className='react-select primary'
                        classNamePrefix='react-select'
                        name='singleSelect'
                        value={branches}
                        onChange={value => setBranches(value)}
                        options={[
                          {
                            value: 1,
                            label: '1'
                          },
                          { value: 2, label: '2' },
                          { value: 3, label: '3' },
                          { value: 4, label: '4' }
                        ]}
                        placeholder='Select Branches'
                      />
                    </Col>
                    <Col md='6'>
                      <label md='3'>CR Number</label>
                      <Input placeholder='Type Here' type='text' />
                    </Col>
                  </Row>

                  <CardTitle tag='h5' className='mt-4'>
                    Applier Information
                  </CardTitle>
                  <Row>
                    <Col md='6'>
                      <label md='3'>Full Name</label>
                      <FormGroup>
                        <Input
                          placeholder='Type Here'
                          type='text'
                          onChange={e => setFullName(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md='6'>
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
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className='btn-round' color='info'>
                  Verify Mobile
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Registration
