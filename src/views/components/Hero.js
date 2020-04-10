import React from 'react';
import { Jumbotron } from 'reactstrap';

import '../../styles/components/hero.scss';

const Hero = (props) => {
    return (
        <Jumbotron fluid className="hero-image">
            <div className="hero-image__background" style={{backgroundImage: props.image}}>

            </div>
            
            {props.heading && 
                <div className="hero-image__content">
                    <h2 className="hero-heading">{props.heading}</h2>
                </div>
            }
        </Jumbotron>
    );
}
 
export default Hero;
