import React, { useState, useEffect } from 'react'

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
    Table
} from 'reactstrap'
import Select from 'react-select'
// import './style.scss';

// import ReactPaginate from 'react-paginate';

import Pagination from '../../../../components/Pagination/Pagination'

// import PaginatedItems from 'components/Pagination/Pagination';


function Engagement() {

    const [businessName, setBusinessName] = useState(false)
    const [category, setCategory] = useState(false)
    const [city, setCity] = useState(false)
    const [branches, setBranches] = useState(false)
    const [fullName, setFullName] = useState(false)
    const [position, setPosition] = useState(false)
    const [mobileNo, setMobileNo] = useState(false)

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);


    let PageSize = 10;

    // useEffect(() => {
    //     // Fetch items from another resources.
    //     const endOffset = itemOffset + itemsPerPage;
    //     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    //     setCurrentItems(items.slice(itemOffset, endOffset));
    //     setPageCount(Math.ceil(items.length / itemsPerPage));
    // }, [itemOffset, itemsPerPage]);


    // const handlePageClick = (event) => {
    //     const newOffset = (event.selected * itemsPerPage) % items.length;
    //     console.log(
    //         `User requested page number ${event.selected}, which is offset ${newOffset}`
    //     );
    //     setItemOffset(newOffset);
    // };

    // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((item) => (
                        <div>
                            <h3>Item #{item}</h3>
                        </div>
                    ))}
            </>
        );
    }

    const handleSubmit = () => {

    }

    const dummyData = [
        {
            Name: 'Dakota Rice',
            Country: 'Niger',
            City: 'Oud-Turnhout',
            Salary: '$36,738',
        },
        {
            Name: 'Dakota Rice',
            Country: 'Niger',
            City: 'Oud-Turnhout',
            Salary: '$36,738',
        },
        {
            Name: 'Dakota Rice',
            Country: 'Niger',
            City: 'Oud-Turnhout',
            Salary: '$36,738',
        },
        {
            Name: 'Dakota Rice',
            Country: 'Niger',
            City: 'Oud-Turnhout',
            Salary: '$36,738',
        },
        {
            Name: 'Dakota Rice',
            Country: 'Niger',
            City: 'Oud-Turnhout',
            Salary: '$36,738',
        },
        {
            Name: 'Dakota Rice',
            Country: 'Niger',
            City: 'Oud-Turnhout',
            Salary: '$36,738',
        },
        {
            Name: 'Dakota Rice',
            Country: 'Niger',
            City: 'Oud-Turnhout',
            Salary: '$36,738',
        },
        {
            Name: 'Dakota Rice',
            Country: 'Niger',
            City: 'Oud-Turnhout',
            Salary: '$36,738',
        },
        {
            Name: 'Dakota Rice',
            Country: 'Niger',
            City: 'Oud-Turnhout',
            Salary: '$36,738',
        },
        {
            Name: 'Dakota Rice',
            Country: 'Niger',
            City: 'Oud-Turnhout',
            Salary: '$36,738',
        },
    ]

    return (
        <>
            <div className='content'>
                <Row>
                    <Col md="12">
                        <Card className="card-plain">
                            <CardHeader>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <CardTitle tag="h4"
                                        style={{
                                            fontFamily: 'Libre Caslon Text',
                                            fontStyle: 'normal',
                                            fontWeight: '700',
                                            fontSize: '22px',
                                            lineHeight: '27px',
                                            color: '#CACACA'
                                        }}>
                                        Engagements</CardTitle>
                                    {/* <div style={{ width: '200px' }}> */}
                                    <p style={{
                                        border: '2px #3A0F7D solid',
                                        padding: '12px 60px 12px 60px',
                                        borderRadius: '50px',
                                        color: '#3A0F7D',
                                        fontWeight: '700',
                                        fontSize: '16px'
                                    }}>+ Suggest New Engagements</p>
                                    {/* </div> */}
                                </div>
                                {/* <p className="card-category">
                                    Here is a subtitle for this table
                                </p> */}
                            </CardHeader>
                            <CardBody>
                                <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', alignItems: 'center', borderRadius: '10px', marginBottom: '25px' }}>
                                    <div style={{ paddingLeft: '25px' }}>Preview the active engagements</div>
                                    <div style={{ alignItems: 'center', paddingTop: '16px', paddingBottom: '16px', paddingRight: '25px' }}>
                                        <p style={{
                                            backgroundColor: '#3A0F7D',
                                            padding: '15px 65px 15px 65px',
                                            marginBottom: '0px',
                                            borderRadius: '50px',
                                            color: 'white',
                                            fontWeight: '700',
                                            fontSize: '16px',
                                        }}>Active Engagements</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', alignItems: 'center', borderRadius: '10px' }}>
                                    <div style={{ paddingLeft: '25px' }}>Preview the Requested Hours</div>
                                    <div style={{ alignItems: 'center', paddingTop: '16px', paddingBottom: '16px', paddingRight: '25px' }}>
                                        <p style={{
                                            backgroundColor: '#3A0F7D',
                                            padding: '15px 65px 15px 65px',
                                            marginBottom: '0px',
                                            borderRadius: '50px',
                                            color: 'white',
                                            fontWeight: '700',
                                            fontSize: '16px',
                                        }}>Requested hours</p>
                                    </div>
                                </div>
                                {/* <Table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Country</th>
                                            <th>City</th>
                                            <th className="text-right">Salary</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dummyData.map((item) => (
                                            <tr style={{ backgroundColor: 'white' }}>
                                                <td>{item.Name}</td>
                                                <td>{item.Country}</td>
                                                <td>{item.City}</td>
                                                <td className="text-right">{item.Salary}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table> */}

                            </CardBody>

                        </Card>

                    </Col>
                    {/* <div style={{ backgroundColor: 'red' }}>
                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={dummyData.length}
                            pageSize={PageSize}
                            onPageChange={page => setCurrentPage(page)}
                        />
                    </div> */}
                </Row>

            </div>
        </>
    )
}

export default Engagement
