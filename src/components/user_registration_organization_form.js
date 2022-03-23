import React, { useState } from "react";
import "./user_registration_organization_form.css";

const UserRegistrationOrganizationForm = ({ onGetOrganizationFormValues }) => {
	/*************************************************************
	 * For Myself Fields
	 *************************************************************/
	// handle first name
	const [enteredFirstName, setEnteredFirstName] = useState("");
	const firstNameChangeHandler = (event) => {
		setEnteredFirstName(event.target.value);
	};

	// handle email
	const [enteredEmail, setEnteredEmail] = useState("");
	const emailChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	// handle city
	const [enteredCity, setEnteredCity] = useState("");
	const cityChangeHandler = (event) => {
		setEnteredCity(event.target.value);
	};

	// handle last name
	const [enteredLastName, setEnteredLastName] = useState("");
	const lastNameChangeHandler = (event) => {
		setEnteredLastName(event.target.value);
	};

	// handle phone
	const [enteredPhone, setEnteredPhone] = useState("");
	const phoneChangeHandler = (event) => {
		setEnteredPhone(event.target.value);
	};

	// handle state
	const [enteredState, setEnteredState] = useState("");
	const stateChangeHandler = (event) => {
		setEnteredState(event.target.value);
	};

	// handle country
	const [enteredCountry, setEnteredCountry] = useState("");
	const countryChangeHandler = (event) => {
		setEnteredCountry(event.target.value);
	};

	// handle password
	const [enteredPassword, setEnteredPassword] = useState("");
	const passwordChangeHandler = (event) => {
		setEnteredPassword(event.target.value);
	};

	// handle confirm password
	const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
	const confirmPasswordChangeHandler = (event) => {
		setEnteredConfirmPassword(event.target.value);
	};

	/*************************************************************
	 * For Organization Fields
	 *************************************************************/
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

	// For form error validation, set it to true because we don't want to show any erros at beginning
	const [formIsValid, setFormIsValid] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	/*************************************************************
	 * Handle Form Submission
	 *************************************************************/
	const submitHandler = (event) => {
		// Clean out old error messages first
		setFormIsValid(true);
		setErrorMessage("");

		// prevent the form from being sending to the server, so the page will NOT be reloaded
		event.preventDefault();

		// if any field is empty, set the formIsValid to false and display the error message
		if (
			enteredFirstName === "" ||
			enteredEmail === "" ||
			enteredCity === "" ||
			enteredLastName === "" ||
			enteredPhone === "" ||
			enteredState === "" ||
			enteredCountry === "" ||
			enteredPassword === "" ||
			enteredConfirmPassword === "" ||
			enteredOrgaName === "" ||
			enteredOrgEmail === "" ||
			enteredOrgCity === "" ||
			selectedOrgType === "" ||
			enteredOrgPhone === "" || 
			enteredOrgState === "" ||
			enteredOrgCountry === ""
		) {
			setFormIsValid(false);
			setErrorMessage("No empty field is allowed.");
			return;
		}

		if (enteredConfirmPassword !== enteredPassword) {
			setFormIsValid(false);
			setErrorMessage("Confirm Password doesn't match the Password.");
			return;
		}

		const myselfData = {
			firstname: enteredFirstName,
			emailaddress1: enteredEmail,
			address1_city: enteredCity,
			lastname: enteredLastName,
			address1_telephone1: enteredPhone,
			address1_stateorprovince: enteredState,
			address1_country: enteredCountry,
		};

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
		onGetOrganizationFormValues(
			myselfData,
			organizationData,
			enteredFirstName,
			enteredPassword
		);
	};

	return (
		<div className="react-userRegisterForm-organization">
			<form onSubmit={submitHandler}>
				<h3>Myself</h3>
				<div className="react-userRegisterForm-organization-myself-grid-container">
					<div className="react-userRegisterForm-organization-myself-grid-format">
						<label htmlFor="fname">First Name</label>
						<br />
						<input
							type="text"
							name="first_name"
							id="fname"
							onChange={firstNameChangeHandler}
							required
						/>
					</div>
					<div className="react-userRegisterForm-organization-myself-grid-format">
						<label htmlFor="lname">Last Name</label>
						<br />
						<input
							type="text"
							name="last_name"
							id="lname"
							onChange={lastNameChangeHandler}
							required
						/>
					</div>
					<div className="react-userRegisterForm-organization-myself-grid-format">
						<label htmlFor="email">Email</label>
						<br />
						<input
							type="email"
							name="email"
							id="email"
							onChange={emailChangeHandler}
							required
						/>
					</div>
					<div className="react-userRegisterForm-organization-myself-grid-format">
						<label htmlFor="city">City</label>
						<br />
						<input
							type="text"
							name="city"
							id="city"
							onChange={cityChangeHandler}
							required
						/>
					</div>
					<div className="react-userRegisterForm-organization-myself-grid-format">
						<label htmlFor="state">State</label>
						<br />
						<input
							type="text"
							name="state"
							id="state"
							onChange={stateChangeHandler}
							required
						/>
					</div>
					<div className="react-userRegisterForm-organization-myself-grid-format">
						<label htmlFor="country">Country</label>
						<br />
						<input
							type="text"
							name="country"
							id="country"
							onChange={countryChangeHandler}
							required
						/>
					</div>
					<div className="react-userRegisterForm-organization-myself-grid-format">
						<label htmlFor="phone">Phone</label>
						<br />
						<input
							type="text"
							name="phone"
							id="phone"
							onChange={phoneChangeHandler}
							required
						/>
					</div>
					<div className="react-userRegisterForm-organization-myself-grid-format">
						<label htmlFor="password">Password</label>
						<br />
						<input
							type="password"
							minLength="4"
							name="password"
							id="password"
							placeholder="At least 4 characters long"
							onChange={passwordChangeHandler}
							required
						/>
					</div>
					<div className="react-userRegisterForm-myself-grid-format">
						<label htmlFor="confirm_password">Confirm Password</label>
						<br />
						<input
							type="password"
							minLength="4"
							name="confirm_password"
							id="confirm_password"
							placeholder="Must match the password"
							onChange={confirmPasswordChangeHandler}
							required
						/>
					</div>
				</div>

				<h3>Organization</h3>
				<div className="react-userRegisterForm-organization-grid-container">
					<div className="react-userRegisterForm-organization-grid-format">
						<label>Organization Name</label>
						<br />
						<input
							type="text"
							name="organization_name"
							onChange={orgNameChangeHandler}
							required
						/>
					</div>
					<div className="react-userRegisterForm-organization-grid-format">
						<label>Email</label>
						<br />
						<input
							type="email"
							name="email"
							onChange={orgEmailChangeHandler}
							required
						/>
					</div>
					<div className="react-userRegisterForm-organization-grid-format">
						<label>Organization City</label>
						<br />
						<input
							type="text"
							name="organization_city"
							onChange={orgCityChangeHandler}
							required
						/>
					</div>
					<div className="react-userRegisterForm-organization-grid-format">
						<label htmlFor="orgType">Organization Type</label>
						<br />
						<select
							name="organization_type"
							id="orgType"
							value={selectedOrgType}
							onChange={orgTypeChangeHandler}
							required
						>
							<option value="" disabled>
								Select One
							</option>
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

					<div className="react-userRegisterForm-organization-grid-format">
						<label>Phone</label>
						<br />
						<input
							type="text"
							name="phone"
							onChange={orgPhoneChangeHandler}
							required
						/>
					</div>
					<div className="react-userRegisterForm-organization-grid-format">
						<label>Organization State</label>
						<br />
						<input
							type="text"
							name="organization_state"
							onChange={orgStateChangeHandler}
							required
						/>
					</div>
					<div className="react-userRegisterForm-organization-grid-format">
						<label>Organization Country</label>
						<br />
						<input
							type="text"
							name="organization_country"
							onChange={orgCountryChangeHandler}
							required
						/>
					</div>
				</div>
				{!formIsValid && (
					<div className="react-userRegisterForm-myself-error-message">
						<h3>{errorMessage}</h3>
					</div>
				)}
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
