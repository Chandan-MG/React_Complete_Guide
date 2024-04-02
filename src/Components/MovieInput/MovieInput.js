import React, { useState } from "react";
import {Card, Form, Button} from 'react-bootstrap';

const MovieInput=()=>{

    const [title, setTitle] = useState('');
    const [opening_crawl, set_Opening_Crawl] = useState('');
    const [date, setDate] = useState('');

    const setTitleHandler =(event)=>{
        setTitle(event.target.value);
    }

    const set_Opening_Crawl_Handler =(event)=>{
        set_Opening_Crawl(event.target.value);
    }

    const setDateHandler =(event)=>{
        setDate(event.target.value);
    }

    const formInputHandler = (event) => {
        event.preventDefault();

        const newMovieObj = {
            title: title,
            opening_crawl: opening_crawl,
            date: date
        }
        fetch('https://react-complete-guide-715a3-default-rtdb.firebaseio.com/movies.json', {
            method: 'POST',
            body: JSON.stringify(newMovieObj),
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        setTitle('');
        set_Opening_Crawl('');
        setDate('');
    }

    return(
        <Card>
            <Card.Body>
                <Form onSubmit={formInputHandler}>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label style={{fontWeight: 'bold'}}>Title</Form.Label>
                        <Form.Control type="text" value={title} onChange={setTitleHandler} placeholder="Enter Title" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{fontWeight: 'bold'}}>Opening Text</Form.Label>
                        <Form.Control as="textarea" value={opening_crawl} onChange={set_Opening_Crawl_Handler} rows={3} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label style={{fontWeight: 'bold'}}>Release Date</Form.Label>
                        <Form.Control type="date" value={date} onChange={setDateHandler} placeholder="Date" />
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