import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap';

import image from '../../assets/images/Cygnet 2.jpg';

const ProfileCardV1 = (props) => {
    return (
        <Card className='artist-card v1'>
            <CardImg variant="top" src={image} width="100%" height="100%" />
            <CardBody>
                <CardTitle>
                    {props.name}
                </CardTitle>

                <CardSubtitle>
                    {props.title}
                </CardSubtitle>

                <CardText>
                    {props.description}
                </CardText>
            </CardBody>
        </Card>
    )
}
 
export default ProfileCardV1;

