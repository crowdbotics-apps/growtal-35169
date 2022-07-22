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
import './style.scss';

// import ReactPaginate from 'react-paginate';

import Pagination from '../../../../components/Pagination/Pagination'

// import PaginatedItems from 'components/Pagination/Pagination';


function LogHour() {

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
            Name: 'Engagement Name',
            Country: 'Client Name',
            City: '4 hour 30 minutes',
            Salary: '06-15-2022',
        },
        {
            Name: 'Engagement Name',
            Country: 'Client Name',
            City: '4 hour 30 minutes',
            Salary: '06-15-2022',
        },
        {
            Name: 'Engagement Name',
            Country: 'Client Name',
            City: '4 hour 30 minutes',
            Salary: '06-15-2022',
        },
        {
            Name: 'Engagement Name',
            Country: 'Client Name',
            City: '4 hour 30 minutes',
            Salary: '06-15-2022',
        },
        {
            Name: 'Engagement Name',
            Country: 'Client Name',
            City: '4 hour 30 minutes',
            Salary: '06-15-2022',
        },
        {
            Name: 'Engagement Name',
            Country: 'Client Name',
            City: '4 hour 30 minutes',
            Salary: '06-15-2022',
        },
        {
            Name: 'Engagement Name',
            Country: 'Client Name',
            City: '4 hour 30 minutes',
            Salary: '06-15-2022',
        },
        {
            Name: 'Engagement Name',
            Country: 'Client Name',
            City: '4 hour 30 minutes',
            Salary: '06-15-2022',
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
                                        Log History</CardTitle>
                                    {/* <div style={{ width: '200px' }}> */}
                                    <p style={{
                                        border: '2px #3A0F7D solid',
                                        padding: '12px 60px 12px 60px',
                                        borderRadius: '50px',
                                        color: '#3A0F7D',
                                        fontWeight: '700',
                                        fontSize: '16px'
                                    }}>Expport Excel, CSV</p>
                                    {/* </div> */}
                                </div>
                                {/* <p className="card-category">
                                    Here is a subtitle for this table
                                </p> */}
                            </CardHeader>
                            <CardBody>
                                <Table>
                                    {/* <thead> */}
                                    <tr>
                                        <th style={{ color: '#808080', padding: '25px' }}>Engagement</th>
                                        <th style={{ color: '#808080' }}>Client</th>
                                        <th style={{ color: '#808080' }}>Time</th>
                                        <th className="text-right" style={{ color: '#808080', paddingRight: '4%' }}>Date</th>
                                    </tr>
                                    {/* </thead> */}
                                    <tbody>
                                        {dummyData.map((item) => (
                                            <>
                                                <tr style={{ backgroundColor: 'white', marginLeft: '25px' }}>
                                                    <td style={{ padding: '25px' }}>{item.Name}</td>
                                                    <td>{item.Country}</td>
                                                    <td>{item.City}</td>
                                                    <td className="text-right" style={{ paddingRight: '25px' }}>{item.Salary}</td>
                                                </tr>
                                                <tr style={{ height: '12px' }}></tr>
                                            </>
                                        ))}
                                    </tbody>
                                </Table>

                            </CardBody>

                        </Card>

                    </Col>
                    <div style={{ backgroundColor: 'red' }}>
                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={dummyData.length}
                            pageSize={PageSize}
                            onPageChange={page => setCurrentPage(page)}
                        />
                    </div>
                </Row>

            </div>
        </>
    )
}

export default LogHour
