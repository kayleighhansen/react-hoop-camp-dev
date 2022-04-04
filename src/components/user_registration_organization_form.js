import React, { useState } from "react";
import "../App.css";
import ClipLoader from "react-spinners/ClipLoader";

import { faEnvelope, faLock, faBasketball } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

	// For loading spinner
	const [creatingUser, setCreatingUser] = useState(false);

	/*************************************************************
	 * Handle Form Submission
	 *************************************************************/
	const submitHandler = (event) => {
		// Clean out old error messages first
		setFormIsValid(true);
		setErrorMessage("");

		// Make the spinner show up
		setCreatingUser(true);

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
			setCreatingUser(false);
			return;
		}

		if (enteredConfirmPassword !== enteredPassword) {
			setFormIsValid(false);
			setErrorMessage("Confirm Password doesn't match the Password.");
			setCreatingUser(false);
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
			enteredEmail,
			enteredPassword,
			setCreatingUser
		);
	};

	return (
		<div className="react-userRegisterForm-organization">
			{creatingUser && (
				<div>
					<h2>Creating your account for you and your organization...</h2>
					<ClipLoader color="rgb(255,177,3)" size={100} />
				</div>
			)}
			{!creatingUser && (
				<div className="react-userRegisterForm-organization">
					<p>You are registering for an account for an organization that will be sponsoring players and events, or making regular donations to Hoop Camp.</p>

					<form className="react-userRegisterForm-organization-form" onSubmit={submitHandler}>
						<h3>Organization</h3>

						<div className="react-userRegisterForm-organization-grid-container">
							<div className="react-userRegisterForm-orgName react-userRegisterForm-section">

								<div className="react-userRegisterForm-formControl-midLength">
									<label>Organization Name</label>
									<br />
									<input
										type="text"
										name="organization_name"
										onChange={orgNameChangeHandler}
										required
									/>
								</div>

								<div className="react-userRegisterForm-formControl-midLength">
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

							</div>

							<div className="react-userRegisterForm-orgContact react-userRegisterForm-section">

								<div className="react-userRegisterForm-formControl-midLength">
									<label>Organization Email</label>
									<br />
									<input
										type="email"
										name="email"
										onChange={orgEmailChangeHandler}
										required
									/>
								</div>

								<div className="react-userRegisterForm-formControl-midLength">
									<label>Organization Phone</label>
									<br />
									<input
										type="text"
										name="phone"
										onChange={orgPhoneChangeHandler}
										required
									/>
								</div>

							</div>

							<div className="react-userRegisterForm-orgAddress react-userRegisterForm-section">

								<div className="react-userRegisterForm-organization-formControl-shortLength">
									<label>Organization City</label>
									<br />
									<input
										type="text"
										name="organization_city"
										onChange={orgCityChangeHandler}
										required
									/>
								</div>

								<div className="react-userRegisterForm-organization-formControl-shortLength">
									<label>Organization State</label>
									<br />
									<input
										type="text"
										name="organization_state"
										onChange={orgStateChangeHandler}
										required
									/>
								</div>

								<div className="react-userRegisterForm-organization-formControl-shortLength">
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
						</div>
						<div className="react-userRegistrationForm-organization-header">
							<h3>Primary Contact</h3>
						</div>
						<div className="react-userRegisterForm-organization-myself-grid-container">
							<div className="react-userRegisterForm-name react-userRegisterForm-section">

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
							</div>

							<div className="react-userRegisterForm-phone react-userRegisterForm-section">
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
							</div>
							<div className="react-userRegisterForm-address react-userRegisterForm-section">
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
							</div>

							<div className="react-userRegisterForm-address react-userRegisterForm-section">

								<div className="react-userRegisterForm-organization-myself-grid-format">
									<label htmlFor="email">Email <FontAwesomeIcon icon={faEnvelope} /></label>
									<br />
									<input
										type="email"
										name="email"
										id="email"
										onChange={emailChangeHandler}
										required
									/>
									<p className="under-input-comment"> This will be your account username </p>
								</div>

								<div className="react-userRegisterForm-organization-myself-grid-format">
									<label htmlFor="password">Password <FontAwesomeIcon icon={faLock} /></label>
									<br />
									<input
										type="password"
										minLength="4"
										name="password"
										id="password"
										onChange={passwordChangeHandler}
										required
									/>
									<p className="under-input-comment"> Must be 4+ characters </p>
								</div>

								<div className="react-userRegisterForm-organization-myself-grid-format">
									<label htmlFor="confirm_password">Confirm Password <FontAwesomeIcon icon={faLock} /> </label>
									<br />
									<input
										type="password"
										minLength="4"
										name="confirm_password"
										id="confirm_password"
										onChange={confirmPasswordChangeHandler}
										required
									/>
									<p className="under-input-comment"> Must match your password </p>
								</div>
							</div>
						</div>



						{!formIsValid && (
							<div className="react-userRegisterForm-myself-error-message">
								<h3>{errorMessage}</h3>
							</div>
						)}
						<div className="react-userRegisterForm-myself-register-button-container">
							<button
								className="react-userRegisterForm-myself-register-button"
								type="submit"
							>
								<FontAwesomeIcon icon={faBasketball} /> Register Organization Account
							</button>
						</div>
					</form>

				</div>
			)}
		</div>
	);
};

export default UserRegistrationOrganizationForm;
