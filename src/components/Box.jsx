import React from 'react'
import { Card } from 'react-bootstrap'

const Box = (props) => {
    const variantBorder = props.variantBorder ? props.variantBorder : 'primary'

    return (
        <>
            <Card border={variantBorder} style={{ width: '18rem' }} text='dark' className='mb-3'>
                <Card.Header>{props.header}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.children}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Box
