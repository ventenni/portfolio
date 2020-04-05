import React from 'react';
import { Jumbotron } from 'reactstrap';

import '../../styles/components/hero.scss';

class Hero extends React.Component {

    getImage() {
        const bg = {};
        
        bg.backgroundImage = `url(http://ferno.com.pl/wp-content/uploads/2015/05/1-2000x500.jpg)`;

        return (bg);
    }

    renderHeading() {
        if (this.props && this.props.heroText && this.props.heroText.backgroundImage) {
            return (
                <h2 className="hero-heading">{this.props.heroText.heading}</h2>
            );
        }
    }

    render() {
        const backgrounds = this.getImage();
        const heading = this.renderHeading();

        return (
            <Jumbotron fluid className="hero-image">
                <div className="hero-image__background" style={backgrounds}>

                </div>
                
                <div className="hero-image__content">
                    {heading}
                </div>
            </Jumbotron>
        );
    }
}


export default Hero;