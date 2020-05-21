import React from 'react';
import { Jumbotron } from 'reactstrap';
import { useSpring, animated } from 'react-spring';

import '../../assets/styles/components/hero.scss';

const Hero = (props) => {
    const springStyle = useSpring({
        opacity: 1,
        marginTop: 100,
        from: { opacity: 0 },
        delay: 300,
        config: {duration: 1000}
      })
      
    return (
        <Jumbotron fluid className="hero-image">
            <div className="hero-image__background" style={{backgroundImage: props.image}}>

            </div>
            
            {props.heading && 
                <animated.div className="hero-image__content" style={springStyle}>
                    <h2 className="hero-heading">{props.heading}</h2>
                </animated.div>
            }
        </Jumbotron>
    );
}
 
export default Hero;
