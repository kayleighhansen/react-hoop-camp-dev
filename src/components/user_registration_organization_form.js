import React from "react";
import "./user_registration_organization_form.css";

const UserRegistrationOrganizationForm = () => {
	return (
		<div className="react-userRegisterForm-organization">
			<h3>Organization</h3>
			<form className="react-userRegisterForm-organization-grid-container">
				<div className="react-userRegisterForm-organization-grid-item1">
					<input
						type="text"
						name="organization_name"
						placeholder="Organization Name"
					/>
				</div>
				<div className="react-userRegisterForm-organization-grid-item2">
					<input type="text" name="email" placeholder="Email" />
				</div>
				<div className="react-userRegisterForm-organization-grid-item3">
					<input
						type="text"
						name="organization_city"
						placeholder="Organization City"
					/>
				</div>
				<div className="react-userRegisterForm-organization-grid-item4">
					<input
						type="text"
						name="organization_type"
						placeholder="Organization Type"
					/>
				</div>

				<div className="react-userRegisterForm-organization-grid-item5">
					<input type="text" name="phone" placeholder="Phone" />
				</div>
				<div className="react-userRegisterForm-organization-grid-item6">
					<input
						type="text"
						name="organization_state"
						placeholder="Organization State"
					/>
				</div>
				<div className="react-userRegisterForm-organization-grid-item7">
					<input
						type="text"
						name="organization_country"
						placeholder="Organization Country"
					/>
				</div>
			</form>
		</div>
	);
};

export default UserRegistrationOrganizationForm;
