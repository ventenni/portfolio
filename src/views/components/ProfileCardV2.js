import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap';

// Styles
import '../../assets/styles/components/artist-card.scss';

import image from '../../assets/images/Cygnet 2.jpg';

const ProfileCardV2 = (props) => {
    return (
        <Card className='artist-card v2'>

            <CardImg variant="top" src={image} width="100%" height="100%" />

            {/* <div variant="top" style={{backgroundImage: `url(${image})`}} /> */}
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

export default ProfileCardV2;
