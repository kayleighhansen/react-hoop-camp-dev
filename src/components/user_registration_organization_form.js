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
					<select name="organization_type">
						<option selected disabled>Select One</option>
						<option value="596800000">Elementary School</option>
						<option value="596800001">Middle School</option>
						<option value="596800002">High School</option>
						<option value="596800003">Alternative School</option>
						<option value="596800004">Non-Profit Organization</option>
						<option value="596800005">Treatment Center</option>
						<option value="596800006">Company</option>
						<option value="596800007">Other</option>
					</select>
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
