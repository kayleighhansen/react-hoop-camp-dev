import React from "react";
import "./user_registration_dependent_form.css";

const UserRegistrationDependentForm = () => {
	return (
		<div className="react-userRegisterForm-dependent">
			<h3>Myself</h3>

			<h3>Dependents</h3>
			<div className="react-userRegisterForm-dependent-grid-container">
				<div className="react-userRegisterForm-dependent-grid-item1">
					<input
						type="text"
						name="first_name"
						placeholder="First Name"
					/>
				</div>
				<div className="react-userRegisterForm-dependent-grid-item2">
					<input type="text" name="last_name" placeholder="Last Name" />
				</div>
			</div>
			<button className="react-userRegisterForm-dependent-add-button">Add Dependent</button>
		</div>
	);
};

export default UserRegistrationDependentForm;
