import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Field, reduxForm} from 'redux-form';
import {fetchForm, saveForm} from '../actions';

class App extends Component {

	componentDidMount(){
		this.props.fetchForm();
	}

	renderField(field){

		const {label, placeholder} = field;
		const {name} = field.input;
		
		return(
			<div className="input-group">
	      		<label htmlFor={name} className="input-group-addon" id={name}>{label}</label>
	      		<input type="text" name={name} className="form-control" aria-describedby={name} placeholder={placeholder} {...field.input} />
	      	</div>
		);
	}

	submitForm(values){
		saveForm(values);
	}

  render() {
  	const {handleSubmit} = this.props;

    return (
      <form className="form" onSubmit={handleSubmit(this.submitForm.bind(this))}>

      	<div className="form_group">
	      	<Field
	      		name="f_name"
	      		label="First Name"
	      		placeholder={this.props.info.f_name}
	      		component={this.renderField}  		
	      	/>

	      	<Field
	      		name="l_name"
	      		label="Last Name"
	      		placeholder={this.props.info.l_name}
	      		component={this.renderField}
	      	/>
      	</div>

      	<div className="form_group">
	      	<Field
	      		name="company"
	      		label="Company"
	      		placeholder={this.props.info.company}
	      		component={this.renderField}      		
	      	/>

	      	<Field
	      		name="department"
	      		label="Department"
	      		placeholder={this.props.info.department}
	      		component={this.renderField}
	      	/>

	      	<Field
	      		name="position"
	      		label="Position"
	      		placeholder={this.props.info.position}
	      		component={this.renderField}
	      	/>   
	     </div>   	

	     <div className="form_group">
	      	<Field
	      		name="email"
	      		label="Email"
	      		placeholder={this.props.info.email}
	      		component={this.renderField}
	      	/>
	     </div>

	     <div className="form_group">
	     	<button className="btn btn-primary" type="submit">Save</button>
	     </div>
      </form>
    );
  }
}

function mapStateToProps({info}){
	return {
		info: info,
		initialValues: info
	};
}

export default reduxForm({
  form: 'MeeOppForm',
  enableReinitialize: true,
})(
	connect(mapStateToProps, {fetchForm, saveForm})(App)
);
