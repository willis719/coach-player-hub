import React from 'react'
import './socialFeed.css'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

class SocialFeed extends React.Component {
    render() {
        return (
            <div className="body">
                <Container fluid="md">
                    <Row className="justify-content-md-center">
                        <Col lg="3">
                            <div align="center">
                                <h1>Coming Soon...</h1>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div align="center">
                                <Form style={{marginTop: '5%'}}>
                                    <Form.Control type="text" placeholder="Search for Atheletes..." />
                                </Form>
                            </div>
                            <div>
                                <Nav activeKey="/home" className="social-nav">
                                    <Nav.Item>
                                        <Nav.Link href="/home">Highlights</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-1">Depth Chart</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-2">Connect</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-3">Sub-Teams</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-4">Roster</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <hr className="horiz" />
                            </div>
                            <div>
                                <Card className="ind-card">
                                    <Col className="pro-name" lg="12">
                                        <Image className="pro-pic" src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" roundedCircle />
                                        <span>Willie Rose</span>
                                        <small className="time">1 hour ago</small>
                                    </Col>
                                    <Card.Text style={{ padding: '2% 2% 0 2%' }}>
                                        This is a description of the video and could be more if wanted too but it is okay for right now
                                    </Card.Text>
                                    <Card.Img className="post-pic" src="https://www.profootballhof.com/assets/1/17/1st_ACT_8d420e8dbbff4c5a8f0085722faa10c9.jpg?69258" />
                                    <Card.Text style={{ padding: '2% 2% 0 2%' }}>
                                        <h3>Video Title</h3>
                                        <small style={{paddingBottom: '2%'}}>2020-2021 Junior Season</small>
                                    </Card.Text>
                                </Card>
                            </div>
                            <div style={{ padding: '5% 0 0 0'}}>
                                <Card className="ind-card">
                                    <Col className="pro-name" lg="12">
                                        <Image className="pro-pic" src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" roundedCircle />
                                        <span>Willie Rose</span>
                                        <small className="time">1 hour ago</small>
                                    </Col>
                                    <Card.Text style={{ padding: '2% 2% 0 2%' }}>
                                        This is a description of the video and could be more if wanted too but it is okay for right now
                                    </Card.Text>
                                    <Card.Img className="post-pic" src="https://www.profootballhof.com/assets/1/17/1st_ACT_8d420e8dbbff4c5a8f0085722faa10c9.jpg?69258" />
                                    <Card.Text style={{ padding: '2% 2% 0 2%' }}>
                                        <h3>Video Title</h3>
                                        <small>2020-2021 Junior Season</small>
                                    </Card.Text>
                                </Card>
                            </div>
                            <div style={{ padding: '5% 0 0 0'}}>
                                <Card className="ind-card">
                                    <Col className="pro-name" lg="12">
                                        <Image className="pro-pic" src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" roundedCircle />
                                        <span>Willie Rose</span>
                                        <small className="time">1 hour ago</small>
                                    </Col>
                                    <Card.Text style={{ padding: '2% 2% 0 2%' }}>
                                        This is a description of the video and could be more if wanted too but it is okay for right now
                                    </Card.Text>
                                    <Card.Img className="post-pic" src="https://www.profootballhof.com/assets/1/17/1st_ACT_8d420e8dbbff4c5a8f0085722faa10c9.jpg?69258" />
                                    <Card.Text style={{ padding: '2% 2% 0 2%' }}>
                                        <h3>Video Title</h3>
                                        <small>2020-2021 Junior Season</small>
                                    </Card.Text>
                                </Card>
                            </div>
                        </Col>
                        {/* Third part of site goes here */}
                        <Col lg="3">
                            <div align="center">
                                <h1>Coming Soon...</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default SocialFeed
