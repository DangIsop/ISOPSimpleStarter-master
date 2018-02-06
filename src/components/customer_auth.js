import React,  { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {logon} from '../actions';

class CustomerAuth extends Component {
	
	//handles rendering jsx on the browser
	renderField(field) {
		const {meta: {touched,error} } = field;
		const className= `form-group ${touched && error ? 'has-danger' : ''}`;

		return(
			<div className={className}>
				<label>{field.label}</label>
				<input
					className="form-control"
					type="text"
					{...field.input} 
				/>
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	//handles submit functionality
	onSubmit(values) {
		this.props.logon(values);
	}

	render() {
		const { handleSubmit } = this.props;

		//form fields 
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="Username"
					name="username"
					component={this.renderField}
				/>
				<Field
					label="Password"
					name="password"
					component={this.renderField}
				/>
				<Field
					label="Master Data?"
					name="fullsync"
					component={this.renderField}
				/>
				<button type='submit' className="btn btn-primary">Login</button>
			</form>
		);
	}
}

//for form validation
function validate(values) {
	const errors = {};

	if (!values.username) {
		errors.username = "Enter a Username";
	}

	if (!values.password) {
		errors.password = "Enter a Password";
	}

	if (!values.fullsync) {
		errors.fullsync = "Enter a fullsync value";
	}

	return errors;
}

//hooking up reduxform to component like connect does
export default reduxForm({
	validate,
	form:'AuthCustomer'
})(
	connect(null,{ logon })(CustomerAuth)
);