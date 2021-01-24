// React
import React from 'react';

// Next
import Image from 'next/image';

// Libaries
import { Row, Col } from 'react-bootstrap';

// Sass
import './../../assets/styles/components/fifty-fifty.scss';

const FiftyFifty = ({ heading, copy, image }) => {


	return (
		<Row className="vnt-fity-fifty">
			
			<Col xs={12} lg={6} className="centered-image">
				<Image src={image}
					alt="placeholder"
					height="100%"
					width="100%" />
			</Col>
			
			<Col xs={12} lg={6} className="vrtp-general-copy">
				{heading &&
					<h4>{heading}</h4>
				}

				{this.props.data && this.props.data.copy &&
					<div>{copy}</div>
				}

			</Col>
		</Row>
	);
}
 
export default FiftyFifty;


/**
 * Class representing the Image Tile component.
 * This component renders a square image block, with text overlay.
 *
 * @author Chay Palmer
 * @exports components/ImageAndText
 */
const ImageAndText = createReactClass({

	/**
	 * Define the component's properties and their PropTypes.
	 * @type {Object}
	 */
	propTypes: {
		data: PropTypes.object
	},

	/**
	 * Define the component's default properties pre-data.
	 * @type {Object}
	 */
	defaults: {
		"component": {
			"theme": "light"
		}
	},

	/**
	 * Define the default component state.
	 * @return {Object} The default `this.state` object.
	 */
	getInitialState() {
		return {
			mobile: false
		};
	},

	/**
	* Method called when component has mounted successfully to the ReactDOM.
	* @return {null} Method doesn't return a value.
	*/
	componentDidMount() {
		this.handleMobileChange();
		window.addEventListener('resize', this.handleMobileChange);
	},

	/**
	* Method called when component will successfully unmount from the ReactDOM.
	* @return {null} Method doesn't return a value.
	*/
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleMobileChange);
	},

	/**
	* Toggle the component state between mobile and desktop.
	* @return {null} Method doesn't return a value.
	*/
	handleMobileChange() {

		if (viewportIsBelow(992)) {
			this.setState({ mobile: true })
		} else {
			this.setState({ mobile: false })
		}
	},

	getImage() {
		if (this.state.mobile && this.props.data.imageMobile) {
			return this.props.data.imageMobile;
		} else if (this.props.data.imageDesktop) {
			return this.props.data.imageDesktop;
		}
	},

	/**
	 * Get the style object for the component button element.
	 * @returns {Object} An object of style properties if data exists, else an empty object.
	 */
	getButtonStyle() {
		const btnStyle = {};

		if (this.props.data && this.props.data.cta && this.props.data.cta.buttonColor) {


			btnStyle.backgroundColor = this.props.data.cta.buttonColor
				? this.props.data.cta.buttonColor
				: ''

			btnStyle.color = this.props.data.cta.textColor
				? this.props.data.cta.textColor
				: '';
		}

		return btnStyle;
	},
	
	/**
	 * Get the style object for the button parent div.
	 * @returns {Object} An object of style properties if data exists, else an empty object.
	 */
	getButtonAlign() {
		const align = {};

		if (this.props.data && this.props.data.buttonAlignment && !this.state.mobile) {

			switch (this.props.data.buttonAlignment) {
			case 'centre':
				align.justifyContent = 'center';
				break;
			case 'left':
				align.justifyContent = 'flex-start';
				break;
			case 'right':
				align.justifyContent = 'flex-end';
				break;
			default:
				align.justifyContent = 'flex-start';
				break;
			}
			return align;
		}
		return align;
	},

	getButtonType(btnStyle) {
		if (this.props.data && this.props.data.cta) {
			if (this.props.data.cta.style === "primary") {
				return (
					<Btn className="btn-rounded" 
						color="primary" 
						href={this.props.data.cta.link} 
						target={this.props.data.cta.target} 
						{...this.props.data.cta.attributes} 
						style={btnStyle}
						data={this.props.data.cta}>
						{this.props.data.cta.text}
					</Btn>
				);
			} else if (this.props.data.cta.style === "outline") {
				return (
					<Btn color="secondary" 
						outline 
						href={this.props.data.cta.link} 
						target={this.props.data.cta.target} 
						{...this.props.data.cta.attributes} 
						className="btn-outline--revolver"
						data={this.props.data.cta}>
						<span className="btn-outline--revolver__wrapper" {...this.props.data.cta.attributes}>
							<span data-hover={this.props.data.cta.text} {...this.props.data.cta.attributes}>
								{ this.props.data.cta.text }
							</span>
						</span>
					</Btn>
				);
			}
		}

		return (
			<Btn color="secondary" 
				outline 
				href={this.props.data.cta.link} 
				target={this.props.data.cta.target} 
				{...this.props.data.cta.attributes} 
				className="btn-outline--revolver"
				data={this.props.data.cta}>
				<span className="btn-outline--revolver__wrapper" {...this.props.data.cta.attributes}>
					<span data-hover={this.props.data.cta.text} {...this.props.data.cta.attributes}>
						{ this.props.data.cta.text }
					</span>
				</span>
			</Btn>
		);
	},

	/**
	 * Render the component to the ReactDOM.
	 * @return {Object} JSX Expression.
	 */
	render() {

		let imageStyle = { backgroundImage: '' };
		const layout = this.props.data && this.props.data.imageAlignment
			? this.props.data.imageAlignment
			: 'left';
		const btnStyle = this.getButtonStyle();
		const btnAlignment = this.getButtonAlign();
		const btnType = this.getButtonType(btnStyle);
		
		if (this.props.data) {
			imageStyle = { backgroundImage: `url(${this.getImage()})` };
		}

		return (
			<Row className={`vrtp-image-text image-${layout.toLowerCase()}`}>
				<Col xs={12} lg={6} style={imageStyle} className="centered-image" />
				<Col xs={12} lg={6} className="vrtp-general-copy">
					{this.props.data && this.props.data.title &&
						<h4>{this.props.data.title}</h4>
					}
					{this.props.data && this.props.data.copy &&
						<div dangerouslySetInnerHTML={ { __html: this.props.data.copy }} />
					}

					{this.props.data && this.props.data.cta && this.props.data.cta.link &&
						<div className="button-container" style={btnAlignment}>
							{btnType}
						</div>
					}

				</Col>
			</Row>
		);
	}
});

module.exports = ImageAndText;
