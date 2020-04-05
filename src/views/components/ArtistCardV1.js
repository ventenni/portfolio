import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import ThreeColumn from '../layouts/ThreeColumn';

import image from '../../assets/images/Cygnet 2.jpg';

const ArtistCardV1 = (props) => {
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

const ThreeArtistCard = () => {
    return (
        <ThreeColumn 
            one={<ArtistCardV1 name={'Eros Cara'} title={'Owner'} description={'Deserunt magna ipsum nostrud duis consectetur pariatur proident enim labore nostrud sint officia et. Est ullamco do velit consectetur occaecat. Ea in labore adipisicing ut ut elit anim Lorem laborum magna ipsum dolor.'} />} 
            two={<ArtistCardV1 name={'Jem Fella'} title={'Apprentice'} />} 
            three={<ArtistCardV1 name={'Eros Cara'} title={'owner'} />} 
        />
    );
}
 
export default ThreeArtistCard;

