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

function UsersList() {
  const [businessName, setBusinessName] = useState(false)
  const [category, setCategory] = useState(false)
  const [city, setCity] = useState(false)
  const [branches, setBranches] = useState(false)
  const [fullName, setFullName] = useState(false)
  const [position, setPosition] = useState(false)
  const [mobileNo, setMobileNo] = useState(false)

  const handleSubmit = () => {

  }

  return (
    <>
      <div className='content'>
      <div className="header ">
          <h3 className="title">Feed Back</h3>
          <div style={{ justifyContent: "space-between", display: "flex" }}>
            Experts
            <div>Actions</div>
          </div>
        </div>
        {/* <Row>
          <Col md='12'>
            <Card>
              <CardHeader >
              <div style={{justifyContent:'space-between', display: 'flex'}}> 
                <CardTitle tag='h4' className='text-left'>
                  Muhammad Wajid Raza
                </CardTitle>
                <div > <Button className='btn-round' color='info' style={{ backgroundColor: '#3A0F7D' }}>
                  Submit
                </Button> <Button className='btn-round' color='info' style={{ backgroundColor: '#3A0F7D' }}>
                  Submit
                </Button></div>
                </div>
                <div style={{justifyContent:'space-between', display: 'flex'}}>
                  Actions
                  <div>
                      Experts
                    </div>
                </div>
              </CardHeader>

              <CardBody>
                <Form action='#' method='#'>
                  <Row>
                    <Col md='12'>
                      <FormGroup>
                        <Input
                          placeholder='Expert names goes here...'
                          //type='textarea'
                          onChange={e => setFullName(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                {/* <Button className='btn-round' color='info' style={{ backgroundColor: '#3A0F7D' }}>
                  Submit
                </Button> 
                <div style={{ display: 'flex', justifyContent: 'center' }} onClick={(e) => { e.preventDefault(); handleSubmit() }}>
                  <div
                    style={{ cursor: 'pointer' }}
                  >
                    <p style={{
                      backgroundColor: '#3A0F7D',
                      padding: '10px 65px 10px 65px',
                      borderRadius: '50px',
                      color: 'white',
                      fontWeight: '700',
                      fontSize: '16px'
                    }}>{"Submit"}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row> */}
      </div>
    </>
  )
}

export default UsersList
