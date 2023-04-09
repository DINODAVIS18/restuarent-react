import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Review({reviewData}) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Review
            </Button>
            <div style={{ minHeight: '150px' }}>
                <Collapse in={open} dimension="width">
                    <div id="example-collapse-text">
                        {
                            reviewData.map(item => (

                                <Card body style={{ width: '400px' }}className='mt-4' >

                                    <h5><strong>{item.name}</strong> : {item.date}</h5>
                                    <p><strong>Rating - </strong>{item.rating} &#9733;</p>
                                    <p><strong>Comments -</strong>" {item.comments} "</p>
                                </Card>
                            ))

                        }
                    </div>
                </Collapse>
            </div>
        </div>
    )
}

export default Review