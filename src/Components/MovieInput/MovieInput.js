import React from "react";
import {Card, Form, Button} from 'react-bootstrap';

const MovieInput=()=>{
    return(
        <Card>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label style={{fontWeight: 'bold'}}>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{fontWeight: 'bold'}}>Opening Text</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label style={{fontWeight: 'bold'}}>Release Date</Form.Label>
                        <Form.Control type="date" placeholder="Date" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add Movie
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default MovieInput;