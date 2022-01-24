import React from "react";
import "./user_registration_dependent_form.css";

const UserRegistrationDependentForm = () => {
	return (
		<div className="react-userRegisterForm-dependent">
			<h3>Dependents</h3>
			<form className="react-userRegisterForm-dependent-grid-container">
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
				<div className="react-userRegisterForm-dependent-grid-item3">
					<input type="text" name="shirt_size" placeholder="Shirt Size" />
				</div>
				<div className="react-userRegisterForm-dependent-grid-item4">
					<input type="text" name="birthday" placeholder="Birthday" />
				</div>
	
				<div className="react-userRegisterForm-dependent-grid-item5">
					<input type="text" name="medications" placeholder="Medications" />
				</div>
				<div className="react-userRegisterForm-dependent-grid-item6">
					<input
						type="text"
						name="medication_information"
						placeholder="Medication Information"
					/>
				</div>
				<div className="react-userRegisterForm-dependent-grid-item7">
					<input
						type="text"
						name="emergency_contact_name"
						placeholder="Emergency Contact Name"
					/>
				</div>
				<div className="react-userRegisterForm-dependent-grid-item8">
					<input
						type="text"
						name="emergency_contact_phone"
						placeholder="Emergency Contact Phone"
					/>
				</div>
			</form>
			<button className="react-userRegisterForm-dependent-add-button">Add Dependent</button>
		</div>
	);
};

export default UserRegistrationDependentForm;
