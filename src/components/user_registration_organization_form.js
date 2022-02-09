import React from "react";
import "./user_registration_organization_form.css";

const UserRegistrationOrganizationForm = () => {
	return (
		<div className="react-userRegisterForm-organization">
			<h3>Organization</h3>
			<div className="react-userRegisterForm-organization-grid-container">
				<div className="react-userRegisterForm-organization-grid-item1 react-userRegisterForm-organization-grid-format">
					<label>Organization Name</label>
					<br />
					<input
						type="text"
						name="organization_name"
						placeholder="Organization Name"
					/>
				</div>
				<div className="react-userRegisterForm-organization-grid-item2 react-userRegisterForm-organization-grid-format">
					<label>Email</label>
					<br />
					<input type="text" name="email" placeholder="Email" />
				</div>
				<div className="react-userRegisterForm-organization-grid-item3 react-userRegisterForm-organization-grid-format">
					<label>Organization City</label>
					<br />
					<input
						type="text"
						name="organization_city"
						placeholder="Organization City"
					/>
				</div>
				<div className="react-userRegisterForm-organization-grid-item4 react-userRegisterForm-organization-grid-format">
					<label>Organization Type</label>
					<br />
					<input
						type="text"
						name="organization_type"
						placeholder="Organization Type"
					/>
				</div>

				<div className="react-userRegisterForm-organization-grid-item5 react-userRegisterForm-organization-grid-format">
					<label>Phone</label>
					<br />
					<input type="text" name="phone" placeholder="Phone" />
				</div>
				<div className="react-userRegisterForm-organization-grid-item6 react-userRegisterForm-organization-grid-format">
					<label>Organization State</label>
					<br />
					<input
						type="text"
						name="organization_state"
						placeholder="Organization State"
					/>
				</div>
				<div className="react-userRegisterForm-organization-grid-item7 react-userRegisterForm-organization-grid-format">
					<label>Organization Country</label>
					<br />
					<input
						type="text"
						name="organization_country"
						placeholder="Organization Country"
					/>
				</div>
			</div>
		</div>
	);
};

export default UserRegistrationOrganizationForm;
