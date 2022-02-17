import React, { useState } from "react";
import "./user_registration_dependent_form.css";

const UserRegistrationDependentForm = ({ onGet }) => {
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

	return (
		<div className="react-userRegisterForm-dependent">
			<form>
				<h3>Myself</h3>
				<div className="react-userRegisterForm-dependent-myself-grid-container">
					<div className="react-userRegisterForm-dependent-grid-item1 react-userRegisterForm-dependent-myself-grid-format">
						<label htmlFor="fname">First Name</label>
						<br />
						<input
							type="text"
							name="first_name"
							id="fname"
							placeholder="First Name"
							onChange={firstNameChangeHandler}
							required
						/>
					</div>
					<div className="react-userRegisterForm-dependent-grid-item2 react-userRegisterForm-dependent-myself-grid-format">
						<label htmlFor="email">Email</label>
						<br />
						<input
							type="text"
							name="email"
							id="email"
							placeholder="Email"
							onChange={emailChangeHandler}
							required
						/>
					</div>
					<div className="react-userRegisterForm-dependent-grid-item3 react-userRegisterForm-dependent-myself-grid-format">
						<label htmlFor="city">City</label>
						<br />
						<input
							type="text"
							name="city"
							id="city"
							placeholder="City"
							onChange={cityChangeHandler}
							required
						/>
					</div>
					<div className="react-userRegisterForm-dependent-grid-item4 react-userRegisterForm-dependent-myself-grid-format">
						<label htmlFor="lname">Last Name</label>
						<br />
						<input
							type="text"
							name="last_name"
							id="lname"
							placeholder="Last Name"
							onChange={lastNameChangeHandler}
							required
						/>
					</div>
					<div className="react-userRegisterForm-dependent-grid-item5 react-userRegisterForm-dependent-myself-grid-format">
						<label htmlFor="phone">Phone</label>
						<br />
						<input
							type="text"
							name="phone"
							id="phone"
							placeholder="Phone"
							onChange={phoneChangeHandler}
							required
						/>
					</div>
					<div className="react-userRegisterForm-dependent-grid-item6 react-userRegisterForm-dependent-myself-grid-format">
						<label htmlFor="state">State</label>
						<br />
						<input
							type="text"
							name="state"
							id="state"
							placeholder="State"
							onChange={stateChangeHandler}
							required
						/>
					</div>
					<div className="react-userRegisterForm-dependent-grid-item8 react-userRegisterForm-dependent-myself-grid-format">
						<label htmlFor="country">Country</label>
						<br />
						<input
							type="text"
							name="country"
							id="country"
							placeholder="Country"
							onChange={countryChangeHandler}
							required
						/>
					</div>
				</div>
				<h3>Dependent(s)</h3>
				<div className="react-userRegisterForm-dependent-grid-container">
					<div className="react-userRegisterForm-dependent-grid-item9 react-userRegisterForm-dependent-grid-format">
						<label htmlFor="dependent_fname">Dependent First Name</label>
						<br />
						<input
							id="dependent_fname"
							type="text"
							name="dependent_first_name"
							placeholder="Dependent First Name"
						/>
					</div>
					<div className="react-userRegisterForm-dependent-grid-item10 react-userRegisterForm-dependent-grid-format">
						<label htmlFor="dependent_lname">Dependent Last Name</label>
						<br />
						<input
							id="dependent_lname"
							type="text"
							name="dependent_last_name"
							placeholder="Dependent Last Name"
						/>
					</div>
					<div className="react-userRegisterForm-dependent-grid-format">
						<button className="react-userRegisterForm-dependent-add-button">
							Add More Dependent
						</button>
					</div>
				</div>
				<button className="react-userRegisterForm-dependent-register-button">
					Register for All
				</button>
			</form>
		</div>
	);
};

export default UserRegistrationDependentForm;
