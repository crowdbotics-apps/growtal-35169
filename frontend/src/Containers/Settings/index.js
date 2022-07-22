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
    Table,
    Nav,
    NavItem,
    NavLink,
    TabPane,
    TabContent
} from 'reactstrap'
import Select from 'react-select'
// import './style.scss';

// import ReactPaginate from 'react-paginate';

import Pagination from '../../components/Pagination/Pagination'

// import PaginatedItems from 'components/Pagination/Pagination';


function Settings() {

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

    const [horizontalTabs, setHorizontalTabs] = useState('home');
    const [verticalTabs, setVerticalTabs] = useState('info');
    const [pageTabs, setPageTabs] = useState("homePages");
    const [openedCollapses, setOpenedCollapses] = useState(["collapseOne", "collapse1"]);




    let PageSize = 10;

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
                                        Settings</CardTitle>
                                    {/* <div style={{ width: '200px' }}> */}
                                    {/* <p style={{
                                        border: '2px #3A0F7D solid',
                                        padding: '12px 60px 12px 60px',
                                        borderRadius: '50px',
                                        color: '#3A0F7D',
                                        fontWeight: '700',
                                        fontSize: '16px'
                                    }}>+ Suggest New Engagements</p> */}
                                </div>
                            </CardHeader>
                            <CardBody>
                                <Col md="12" lg="12" sm="12">
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col lg="4" md="4" sm="4" xs="4">
                                                    <div className="nav-tabs-navigation verical-navs p-0">
                                                        <div className="nav-tabs-wrapper">
                                                            <Nav
                                                                className="flex-column nav-stacked"
                                                                role="tablist"
                                                                tabs
                                                            >
                                                                <NavItem>
                                                                    <NavLink
                                                                        data-toggle="tab"
                                                                        href="#pablo"
                                                                        role="tab"
                                                                        className={
                                                                            verticalTabs === "info"
                                                                                ? "active"
                                                                                : ""
                                                                        }
                                                                        onClick={() =>
                                                                            setVerticalTabs("info")
                                                                        }
                                                                    >
                                                                        Info
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink
                                                                        data-toggle="tab"
                                                                        href="#pablo"
                                                                        role="tab"
                                                                        className={
                                                                            verticalTabs === "description"
                                                                                ? "active"
                                                                                : ""
                                                                        }
                                                                        onClick={() =>
                                                                            setVerticalTabs("description")
                                                                        }
                                                                    >
                                                                        Description
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink
                                                                        data-toggle="tab"
                                                                        href="#pablo"
                                                                        role="tab"
                                                                        className={
                                                                            verticalTabs === "concept"
                                                                                ? "active"
                                                                                : ""
                                                                        }
                                                                        onClick={() =>
                                                                            setVerticalTabs("concept")
                                                                        }
                                                                    >
                                                                        Concept
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink
                                                                        data-toggle="tab"
                                                                        href="#pablo"
                                                                        role="tab"
                                                                        className={
                                                                            verticalTabs === "support"
                                                                                ? "active"
                                                                                : ""
                                                                        }
                                                                        onClick={() =>
                                                                            setVerticalTabs("support")
                                                                        }
                                                                    >
                                                                        Support
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink
                                                                        data-toggle="tab"
                                                                        href="#pablo"
                                                                        role="tab"
                                                                        className={
                                                                            verticalTabs === "extra"
                                                                                ? "active"
                                                                                : ""
                                                                        }
                                                                        onClick={() =>
                                                                            setVerticalTabs("extra")
                                                                        }
                                                                    >
                                                                        Extra
                                                                    </NavLink>
                                                                </NavItem>
                                                            </Nav>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg="8" md="8" sm="8" xs="8">
                                                    {/* Tab panes */}
                                                    <TabContent activeTab={verticalTabs}>
                                                        <TabPane tabId="info">
                                                            <p>
                                                                Larger, yet dramatically thinner. More powerful, but
                                                                remarkably power efficient. With a smooth metal
                                                                surface that seamlessly meets the new Retina HD
                                                                display.
                                                            </p>
                                                            <p>
                                                                It’s one continuous form where hardware and software
                                                                function in perfect unison, creating a new
                                                                generation of phone that’s better by any measure.
                                                            </p>
                                                        </TabPane>
                                                        <TabPane tabId="description">
                                                            <p>
                                                                The first thing you notice when you hold the phone
                                                                is how great it feels in your hand. The cover glass
                                                                curves down around the sides to meet the anodized
                                                                aluminum enclosure in a remarkable, simplified
                                                                design.
                                                            </p>
                                                            <p>
                                                                There are no distinct edges. No gaps. Just a smooth,
                                                                seamless bond of metal and glass that feels like one
                                                                continuous surface.
                                                            </p>
                                                        </TabPane>
                                                        <TabPane tabId="concept">
                                                            <p>
                                                                It’s one continuous form where hardware and software
                                                                function in perfect unison, creating a new
                                                                generation of phone that’s better by any measure.
                                                            </p>
                                                            <p>
                                                                Larger, yet dramatically thinner. More powerful, but
                                                                remarkably power efficient. With a smooth metal
                                                                surface that seamlessly meets the new Retina HD
                                                                display.
                                                            </p>
                                                        </TabPane>
                                                        <TabPane tabId="support">
                                                            <p>
                                                                From the seamless transition of glass and metal to
                                                                the streamlined profile, every detail was carefully
                                                                considered to enhance your experience. So while its
                                                                display is larger, the phone feels just right.
                                                            </p>
                                                            <p>
                                                                It’s one continuous form where hardware and software
                                                                function in perfect unison, creating a new
                                                                generation of phone that’s better by any measure.
                                                            </p>
                                                        </TabPane>
                                                        <TabPane tabId="extra">
                                                            <p>
                                                                It’s one continuous form where hardware and software
                                                                function in perfect unison, creating a new
                                                                generation of phone that’s better by any measure.
                                                            </p>
                                                            <p>
                                                                Larger, yet dramatically thinner. More powerful, but
                                                                remarkably power efficient. With a smooth metal
                                                                surface that seamlessly meets the new Retina HD
                                                                display.
                                                            </p>
                                                        </TabPane>
                                                    </TabContent>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
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

export default Settings
