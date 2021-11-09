import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'

const Logo = (props) => {
    return (
        <Card>
            <CardBody>
                <CardTitle><h2 className="title">{props.title}</h2></CardTitle>
            </CardBody>
        </Card>
    )
}

export default Logo
