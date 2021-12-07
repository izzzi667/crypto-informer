import * as React from 'react';
import { Spinner, Col, Row} from "react-bootstrap";


const Loading = () =>
{
    return <Col className='text-center' >
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
    </Col>
}

export default Loading;