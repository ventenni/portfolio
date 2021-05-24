// Base React modules.
const React = require('react');
const createReactClass = require('create-react-class');
const PropTypes = require('prop-types');

// Sitecore.React placeholder component.
// const Placeholder = require('../utilities/Placeholder');

// Reactstrap components.
const { Form, FormGroup, Input, Label } = require('reactstrap')
const { Modal } = require('react-bootstrap');

// Custom components and utilities.
const Section = require('../layout/Section');
const OneColumn = require('../layout/OneColumn');
const Btn = require('./Btn');
const { viewportIsBelow, Api } = require('../utilities/Helpers');

/**
 * Class representing the Newsletter Sign Up component.
 * This component renders a {@link module:layout/Section|Section} wrapper with title and subtitle,
 * with a placeholder to render the WFFM Subscribe Form.
 *
 * @author Charles Harwood
 * @exports components/NewsletterSignUp
 */
const NewsletterSignUp = createReactClass({

	/**
	 * Define the component's properties and their PropTypes.
	 * @type {Object}
	 */
	propTypes: {
		data: PropTypes.object,
		placeholder: PropTypes.any
	},

	/**
	 * Define the default component state.
	 * @return {Object} The default `this.state` object.
	 */
	getInitialState() {
		return {
			mobile: false,
			modal: false,
			isDisabled: false,
			isFullNameInvalid: false,
			isEmailInvalid: false,
			fullName: '',
			email: '',
			state: '',
			postcode: '',
			phone: '',
			dob: '',
			country: '',
			gender: '',
			canUseWindow: false,
			componentIsMounted: false,
			initalFetch: false,
			apiData: {},
			hasError: true,
			processing: false,
			success: false
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

		if (viewportIsBelow(768)) {
			this.setState({ 
				mobile: true,
				componentIsMounted: true
			})
		} else {
			this.setState({ 
				mobile: false,
				componentIsMounted: true
			})
		}
	},

	handleModal() {
		this.setState({ 
			modal: !this.state.isFullNameInvalid && !this.state.isEmailInvalid
		});
	},

	handleNameChange(e) {
		this.setState({
			fullName: e.target.value,
			isFullNameInvalid: e.target.value.length < 2,
			isDisabled: this.state.fullName.length > 1 && this.state.email.length > 1
		});
	},

	handleEmailChange(e) {
		let emailValue = true;
		if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email)) {
			emailValue = false;
		}
		this.setState({
			email: e.target.value,
			isEmailInvalid: emailValue,
			isDisabled: this.state.fullName.length > 1 && this.state.email.length > 1
		});
	},

	copyValuesToForm(src) {
		console.log(src);// eslint-disable-line no-console
		// setTimeout(console.log("query selector", document.querySelector(`[data-sc-field-name=${src}]`)), 2000);
		// document.querySelector(`[data-sc-field-name=${this.props.data.field1Name}]`).value = this.state.fullName;
		// document.querySelector(`[data-sc-field-name=${this.props.data.field2Name}]`).value = this.state.email;
	},

	/**
	 * Get the Section component heading and subheading from current data.
	 * @return {Object} The `sectionData` object containing heading and subheading strings.
	 */
	getSectionData() {
		let sectionData = {};

		const messaging = this.props.data.messaging;

		if (messaging && messaging.text) {
			sectionData = {
				heading: messaging.text,
				subheading: messaging.subtitle
			}
		}

		if (this.props.data.footer) {
			sectionData.footer = this.props.data.footer;
		}

		return sectionData;
	},

	/**
	 * Get the style object for the Section component.
	 * @return {Object} An object of style properties if data exists, else an empty object.
	 */
	getSectionStyle() {
		let sectionStyle = {};

		const background = this.props.data.background;

		if ( (background && background.image) || (background && background.color) ) {

			sectionStyle = {
				backgroundColor: background.color,
				//backgroundImage: `url('${background.image}')`,
				backgroundPositionX: background.positionX,
				backgroundPositionY: background.positionY
			}

			// If we are on a mobile screen...
			if (this.state.mobile && background.mobileImage) {
				// Swap out the BG image for the mobile alternate.
				sectionStyle.backgroundImage = `url(${background.mobileImage})`;
			} else if (background.image) {
				sectionStyle.backgroundImage = `url(${background.image})`;
			}
		}

		return sectionStyle;
	},

	submitOnClose(src) {
		if (this.state.fullName && this.state.email) {
			// this.sendToApi();
		}
		console.log(src); // eslint-disable-line no-console
		// const but = document.querySelector('input[type="submit"]');
		// but.click();
		this.setState({
			modal: false
		});
	},

	
	/**
	 * Configure the appropriate API Domain based on current host.
	 * @return {Function} this.setState() Updates the component state.
	 */
	getApiDomain() {

		if (this.state.componentIsMounted) {
			const host = window.location.hostname;

			return host;
		}
	},

	sendToApi() {
		const fullUrl = `//${this.getApiDomain()}/api/subscribe/subscribeToNewsletter`;
		
		const [firstName, lastName] = this.state.fullName.split(' ');

		const settings = {
			method: 'POST',
			url: fullUrl,
			contentType: "application/x-www-form-urlencoded;charset=utf-8",
			data: {
				firstName,
				lastName,
				email: this.state.email,
				state: this.state.state,
				postcode: this.state.postcode,
				phone: this.state.phone,
				dob: this.state.dob,
				country: this.state.country,
				gender: this.state.gender
			}
		}

		Api(settings, this.handleAPISuccess, this.handleAPIError);
	},

	handleAPISuccess(response) {
		
		// Store the data.
		const apiData = response;

		if (!this.state.initalFetch) {
			this.setState({
				initalFetch: true
			});
		}

		// Loop through the results.
		this.setState({
			apiData,
			hasError: false,
			processing: false
		}, () => {
			if (apiData.status === 200) {
				this.setState({ success: true });
			} else {
				this.setState({ 
					success: false
				});
			}
		});
	},

	handleAPIError(error) {
		// eslint-disable-next-line
		const apiData = error;

		setTimeout(() => {
			this.setState({
				apiData,
				hasError: true,
				processing: false,
				success: false
			});
		}, 2000);
	},

	/**
	 * Render the component to the ReactDOM.
	 * @return {Object} JSX Expression.
	 */
	render() {
		const sectionData = this.getSectionData();
		const sectionStyle = this.getSectionStyle();

		return (
			<React.Fragment>
				<Section data={sectionData} style={sectionStyle} className={`vrtp-component vrtp-subscribe`}>
					<OneColumn>
						<Form className="vrtp-form vrtp-form--inline">
							
							<FormGroup>
								<Input onChange={(event) => this.handleNameChange(event)} type="text" name="fullName" id="subscribeFullName" placeholder={this.props.data.field1Placeholder} invalid={this.state.isFullNameInvalid} />
							</FormGroup>
							
							<FormGroup>
								<Input onChange={(event) => this.handleEmailChange(event)} type="email" name="email" id="subscribeEmail" placeholder={this.props.data.field2Placeholder} invalid={this.state.isEmailInvalid} />
							</FormGroup>

							<Btn onClick={() => this.handleModal()} color="secondary" tag="button" className="btn-rounded btn-shadow">Subscribe</Btn>
						</Form>
					</OneColumn>
				</Section>

				{this.state.componentIsMounted && 
				<Modal 
					className="vrtp-newsletter-modal" 
					show={this.state.modal} 
					onEntered={() => this.copyValuesToForm("on opened")}
					onHide={() => this.submitOnClose("On hide")}
					enforceFocus={false}>

					<Modal.Body>
						<Form className="vrtp-form">
							
							<FormGroup>
								<Label>Full Name
									<Input 
										onChange={(event) => this.handleNameChange(event)} 
										value={this.state.fullName}
										type="text" 
										name="fullName" 
										id="subscribeFullName" 
										placeholder={this.props.data.field1Placeholder} 
										invalid={this.state.isFullNameInvalid} />
								</Label>
							</FormGroup>
							
							<FormGroup>
								<Label>Email
									<Input 
										onChange={(event) => this.handleEmailChange(event)}
										value={this.state.email}
										type="email" 
										name="email" 
										id="subscribeEmail" 
										placeholder={this.props.data.field2Placeholder} 
										invalid={this.state.isEmailInvalid} />
								</Label>
							</FormGroup>

							<FormGroup className="vrtp-form__field--half">
								<Label>State
									<Input onChange={(event) => this.handleNameChange(event)} type="text" name="state" id="subscribeState" placeholder="State" />
								</Label>
							</FormGroup>
							
							<FormGroup className="vrtp-form__field--half">
								<Label>Postcode
									<Input onChange={(event) => this.handleEmailChange(event)} type="text" name="postcode" id="subscribePostcode" placeholder={this.props.data.field2Placeholder} />
								</Label>
							</FormGroup>

							<FormGroup className="vrtp-form__field--half">
								<Label>Phone
									<Input onChange={(event) => this.handleNameChange(event)} type="tel" name="phone" id="subscribePhone" placeholder={this.props.data.field1Placeholder} />
								</Label>
							</FormGroup>
							
							<FormGroup className="vrtp-form__field--half">
								<Label>Gender
									<Input onChange={(event) => this.handleEmailChange(event)} type="text" name="gender" id="subscribeGender" placeholder={this.props.data.field2Placeholder} />
								</Label>
							</FormGroup>

							<FormGroup className="vrtp-form__field--half">
								<Label>Date of Birth
									<Input onChange={(event) => this.handleEmailChange(event)} type="date" name="dob" id="subscribeDob" placeholder={this.props.data.field2Placeholder} />
								</Label>
							</FormGroup>

							<FormGroup className="vrtp-form__field--half">
								<Label>Country
									<Input onChange={(event) => this.handleNameChange(event)} type="text" name="country" id="subscribeCountry" placeholder={this.props.data.field1Placeholder} />
								</Label>
							</FormGroup>

							<Btn onClick={() => this.submitOnClose()} color="secondary" tag="button" className="btn-rounded btn-shadow" disabled={!this.state.isDisabled}>Subscribe</Btn>
						</Form>
					</Modal.Body>

				</Modal>
				}

			</React.Fragment>
		);
	}
})

module.exports = NewsletterSignUp;
