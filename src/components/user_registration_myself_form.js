import { useState } from "react";
import "../App.css";
import ClipLoader from "react-spinners/ClipLoader";

import { faEnvelope, faLock, faBasketball } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
			setCreatingUser(false);
			return;
		}

		if (enteredConfirmPassword !== enteredPassword) {
			setFormIsValid(false);
			setErrorMessage("Confirm Password doesn't match the Password.");
			setCreatingUser(false);
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
		onGetSelfFormValues(
			contactInfoData,
			enteredEmail,
			enteredPassword,
			setCreatingUser
		);
	};

	return (
		<div className="react-userRegisterForm-myself">
			{creatingUser && (
				<div>
					<h2>Creating your account...</h2>
					<ClipLoader color="rgb(255,177,3)" size={100} />
				</div>
			)}
			{!creatingUser && (
			<div className="react-userRegisterForm-myself">
					<p>You are registering for your own account and will be able to register for upcoming Hoop Camp events.</p>
				<div className="react-userRegistrationForm-myself-header">
					 <h3 className="header-text">Myself</h3></div>
				<form className="react-userRegisterForm-myself-2" onSubmit={submitHandler}>
					<div className="react-userRegisterForm-name react-userRegisterForm-section">
						<div className="react-userRegisterForm-short-item">
							<div className="label-container">
								<label> First Name </label>
							</div>
							<div>
								<input
									type="text"
									name="first_name"
									id="fname"
									onChange={firstNameChangeHandler}
									required />
							</div>
						</div>
	
						<div className="react-userRegisterForm-short-item">
							<div className="label-container">
								<label> Last Name </label>
							</div>
							<div>
								<input
									type="text"
									name="last_name"
									id="lname"
									onChange={lastNameChangeHandler}
									required />
							</div>
						</div>
					</div>
	
					<div className="react-userRegisterForm-email react-userRegisterForm-section">
						<div className="react-userRegisterForm-long-item">
							<div className="label-container">
								<label>Phone </label>
							</div>
							<div>
								<input
									type="phone"
									name="phone"
									id="phone"
									onChange={phoneChangeHandler}
									required />
							</div>
						</div>
					</div>
	
					<div className="react-userRegisterForm-address react-userRegisterForm-section">
						<div className="react-userRegisterForm-short-item">
							<div className="label-container">
								<label> City </label>
							</div>
							<div>
								<input type="text"
									name="city"
									id="city"
									onChange={cityChangeHandler}
									required />
							</div>
						</div>
	
						<div className="react-userRegisterForm-short-item">
							<div className="label-container">
								<label> State</label>
							</div>
							<div>
								<input
									type="text"
									name="state"
									id="state"
									onChange={stateChangeHandler}
									required />
							</div>
						</div>
	
						<div className="react-userRegisterForm-short-item">
							<div className="label-container">
								<label>Country </label>
							</div>
							<div>
								<input
									type="text"
									name="country"
									id="country"
									onChange={countryChangeHandler}
									required />
							</div>
						</div>
					</div>
	
	
					<div className="react-userRegisterForm-login react-userRegisterForm-section">
						<div className="react-userRegisterForm-short-item">
							<div className="label-container">
								<label>Email <FontAwesomeIcon icon={faEnvelope} /></label>
							</div>
							<div>
								<input
									type="email"
									name="email"
									id="email"
									onChange={emailChangeHandler}
									required />
							</div>
							<p className="under-input-comment"> This will be your account username </p>

						</div>
	
						<div className="react-userRegisterForm-short-item">
							<div className="label-container">
								<label> Password <FontAwesomeIcon icon={faLock} /></label>
							</div>
							<div>
								<input
									type="password"
									minLength="4"
									name="password"
									id="password"
									onChange={passwordChangeHandler}
									required />
							</div>
							<p className="under-input-comment"> Must be 4+ characters </p>

						</div>
	
						<div className="react-userRegisterForm-short-item">
							<label> <div className="label-container">
								<label> Confirm Password <FontAwesomeIcon icon={faLock} /></label>
							</div></label>
							<div>
								<input
									type="password"
									minLength="4"
									name="confirm_password"
									id="confirm_password"
									onChange={confirmPasswordChangeHandler}
									required />
							</div>
							<p className="under-input-comment"> Must match your password </p>
						</div>
					</div>
	
					<div className="react-userRegisterForm-myself-register-button-container">
						<button
							className="react-userRegisterForm-myself-register-button"
							type="submit"
						>
							<FontAwesomeIcon icon={faBasketball} /> Register My Account
						</button>
					</div>
				</form>
	
			</div>
	
			)}
		</div>
	);
};

export default UserRegistrationMyselfForm;
