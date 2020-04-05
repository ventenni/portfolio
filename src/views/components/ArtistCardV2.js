import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import TwoColumn from '../layouts/TwoColumn';

// Styles
import '../../styles/components/artist-card.scss';

import image from '../../assets/images/Cygnet 2.jpg';


const ArtistCardV2 = (props) => {
    return (
        <Card className='artist-card v2'>
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

const TwoArtistCard = () => {
    return (
        <TwoColumn
            one={<ArtistCardV2 name={'Eros Cara'} title={'Owner'} description={"Deserunt magna ipsum nostrud duis consectetur pariatur proident enim labore nostrud sint officia et. Est ullamco do velit consectetur occaecat. Ea in labore adipisicing ut ut elit anim Lorem laborum magna ipsum dolor."} />} 
            two={<ArtistCardV2 name={'Jem Fella'} title={'Apprentice'} description={"Deserunt magna ipsum nostrud duis consectetur pariatur proident enim labore nostrud sint officia et. Est ullamco do velit consectetur occaecat. Ea in labore adipisicing ut ut elit anim Lorem laborum magna ipsum dolor."} />} 
        />
    );
}
 
export default TwoArtistCard;

