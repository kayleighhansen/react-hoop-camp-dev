import React, { useState } from "react";
import "./user_registration_organization_form.css";

const UserRegistrationOrganizationForm = ({ onGetOrganizationFormValues }) => {
	// handle organization name
	const [enteredOrgaName, setEnteredOrgaName] = useState("");
	const orgNameChangeHandler = (event) => {
		setEnteredOrgaName(event.target.value);
	};

	// handle email
	const [enteredOrgEmail, setEnteredOrgEmail] = useState("");
	const orgEmailChangeHandler = (event) => {
		setEnteredOrgEmail(event.target.value);
	};

	// handle city
	const [enteredOrgCity, setEnteredOrgCity] = useState("");
	const orgCityChangeHandler = (event) => {
		setEnteredOrgCity(event.target.value);
	};

	// handle phone
	const [enteredOrgPhone, setEnteredOrgPhone] = useState("");
	const orgPhoneChangeHandler = (event) => {
		setEnteredOrgPhone(event.target.value);
	};

	// handle state
	const [enteredOrgState, setEnteredOrgState] = useState("");
	const orgStateChangeHandler = (event) => {
		setEnteredOrgState(event.target.value);
	};

	// handle country
	const [enteredOrgCountry, setEnteredOrgCountry] = useState("");
	const orgCountryChangeHandler = (event) => {
		setEnteredOrgCountry(event.target.value);
	};

	// handle organization type
	const [selectedOrgType, setSelectedOrgType] = useState("");
	const orgTypeChangeHandler = (event) => {
		setSelectedOrgType(event.target.value);
	};

	const submitHandler = (event) => {
		// prevent the form from being sending to the server, so the page will NOT be reloaded
		event.preventDefault();

		// for all the key names in the object, we must match what we have in the C# controller
		const organizationData = {
			name: enteredOrgaName,
			emailaddress1: enteredOrgEmail,
			address1_telephone1: enteredOrgPhone,
			address1_city: enteredOrgCity,
			address1_stateorprovince: enteredOrgState,
			address1_country: enteredOrgCountry,
			crbb4_organizationtype: selectedOrgType,
		};
		
		// pass the data up to parent component (index.js)
		onGetOrganizationFormValues(organizationData);
	};

	return (
		<div className="react-userRegisterForm-organization">
			<h3>Organization</h3>
			<form
				className="react-userRegisterForm-organization-grid-container"
				onSubmit={submitHandler}
			>
				<div className="react-userRegisterForm-organization-grid-item1 react-userRegisterForm-organization-grid-format">
					<label>Organization Name</label>
					<br />
					<input
						type="text"
						name="organization_name"
						placeholder="Organization Name"
						onChange={orgNameChangeHandler}
					/>
				</div>
				<div className="react-userRegisterForm-organization-grid-item2 react-userRegisterForm-organization-grid-format">
					<label>Email</label>
					<br />
					<input
						type="email"
						name="email"
						placeholder="Email"
						onChange={orgEmailChangeHandler}
					/>
				</div>
				<div className="react-userRegisterForm-organization-grid-item3 react-userRegisterForm-organization-grid-format">
					<label>Organization City</label>
					<br />
					<input
						type="text"
						name="organization_city"
						placeholder="Organization City"
						onChange={orgCityChangeHandler}
					/>
				</div>
				<div className="react-userRegisterForm-organization-grid-item4 react-userRegisterForm-organization-grid-format">
					<label htmlFor="orgType">Organization Type</label>
					<br />
					<select
						name="organization_type"
						id="orgType"
						value={selectedOrgType}
						onChange={orgTypeChangeHandler}
					>
						<option value="" disabled>Select One</option>
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
					<input
						type="text"
						name="phone"
						placeholder="Phone"
						onChange={orgPhoneChangeHandler}
					/>
				</div>
				<div className="react-userRegisterForm-organization-grid-item6 react-userRegisterForm-organization-grid-format">
					<label>Organization State</label>
					<br />
					<input
						type="text"
						name="organization_state"
						placeholder="Organization State"
						onChange={orgStateChangeHandler}
					/>
				</div>
				<div className="react-userRegisterForm-organization-grid-item7 react-userRegisterForm-organization-grid-format">
					<label>Organization Country</label>
					<br />
					<input
						type="text"
						name="organization_country"
						placeholder="Organization Country"
						onChange={orgCountryChangeHandler}
					/>
				</div>
				<button
					className="react-userRegisterForm-organization-register-button"
					type="submit"
				>
					Register My Account
				</button>
			</form>
		</div>
	);
};

export default UserRegistrationOrganizationForm;
