import { useState } from "react";
import "./user_registration_myself_form.css";
import ClipLoader from "react-spinners/ClipLoader";

const UserRegistrationMyselfForm = ({ onGetSelfFormValues }) => {
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

	// // handle birthday
	// const [enteredBirthday, setEnteredBirthday] = useState("");
	// const birthdayChangeHandler = (event) => {
	// 	setEnteredBirthday(event.target.value);
	// };

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

	// For form error validation, set it to true because we don't want to show any erros at beginning
	const [formIsValid, setFormIsValid] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	// For loading spinner
	const [creatingUser, setCreatingUser] = useState(false);

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
			enteredConfirmPassword === ""
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

		// for all the key names in the object, we must match what we have in the C# controller
		const contactInfoData = {
			firstname: enteredFirstName,
			emailaddress1: enteredEmail,
			address1_city: enteredCity,
			lastname: enteredLastName,
			address1_telephone1: enteredPhone,
			address1_stateorprovince: enteredState,
			// birthdate: enteredBirthday,
			address1_country: enteredCountry,
		};

		// pass the data up to parent component (index.js)
		onGetSelfFormValues(contactInfoData, enteredEmail, enteredPassword, setCreatingUser);
	};

	return (
		<div className="react-userRegisterForm-myself">
			{creatingUser && <div>
				<ClipLoader color="rgb(255,177,3)" size={100} />
			</div>}
			<h3>Myself</h3>
			<form
				className="react-userRegisterForm-myself-grid-container"
				onSubmit={submitHandler}
			>
				<div className="react-userRegisterForm-myself-grid-format">
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
				<div className="react-userRegisterForm-myself-grid-format">
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
				<div className="react-userRegisterForm-myself-grid-format">
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
				<div className="react-userRegisterForm-myself-grid-format">
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
				<div className="react-userRegisterForm-myself-grid-format">
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
				{/* <div className="">
					<input
						type="text"
						name="birthday"
						onChange={birthdayChangeHandler}
						required
					/>
				</div> */}
				<div className="react-userRegisterForm-myself-grid-format">
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
				<div className="react-userRegisterForm-myself-grid-format">
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
				<div className="react-userRegisterForm-myself-grid-format">
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
				{!formIsValid && (
					<div className="react-userRegisterForm-myself-error-message">
						<h3>{errorMessage}</h3>
					</div>
				)}
				<button
					className="react-userRegisterForm-myself-register-button"
					type="submit"
				>
					Register My Account
				</button>
			</form>
		</div>
	);
};

export default UserRegistrationMyselfForm;
