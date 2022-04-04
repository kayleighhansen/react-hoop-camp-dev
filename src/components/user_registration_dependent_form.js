import React, { useState, Fragment } from "react";
import "../App.css";
import ClipLoader from "react-spinners/ClipLoader";

import { faUserPlus, faUserMinus, faEnvelope, faLock, faBasketball } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserRegistrationDependentForm = ({ onGetDependentFormValues }) => {
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

	// For form error validation, set it to true because we don't want to show any erros at beginning
	const [formIsValid, setFormIsValid] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	// For loading spinner
	const [creatingUser, setCreatingUser] = useState(false);

	// handle the change of dependent first name
	const depFirstNameChangeHandler = (event, id) => {
		const newList = [...dependentList];
		newList.forEach((dependent) => {
			// Only update the first name if the id matches, so we make sure to update the right dependent
			if (dependent.id === id) {
				dependent.firstname = event.target.value;
			}
		});

		setDependentList(newList);
	};

	// handle the change of dependent last name
	const depLastNameChangeHandler = (event, id) => {
		const newList = [...dependentList];
		newList.forEach((dependent) => {
			// Only update the last name if the id matches, so we make sure to update the right dependent
			if (dependent.id === id) {
				dependent.lastname = event.target.value;
			}
		});

		setDependentList(newList);
	};

	// Set up the dependent id, starting with 1
	const [dependentID, setDependentID] = useState(1);

	// This will be used for all the dependent(s) fields
	const [dependentList, setDependentList] = useState([
		{ firstname: "", lastname: "", id: dependentID },
	]);

	// Add new dependent
	const addNewDependentHandler = () => {
		setDependentList([
			...dependentList,
			{ firstname: "", lastname: "", id: dependentID + 1 },
		]);
		setDependentID(dependentID + 1);
	};

	console.log(dependentList);

	// Remove the dependent field (both first name and last name)
	const removeDependentHandler = (dependentID) => {
		const newList = [];
		// Remove the clicked one based on its id in the array list
		dependentList.forEach((dependent) => {
			if (dependent.id !== dependentID) {
				newList.push(dependent);
			}
		});

		setDependentList(newList);
	};

	// Handle user input when they click on "Register"
	const submitHandler = (event) => {
		// Clean out old error messages first
		setFormIsValid(true);
		setErrorMessage("");

		// Make the spinner show up
		setCreatingUser(true);

		// Prevent the form from being sending to the server, so the page will NOT be reloaded
		event.preventDefault();

		// If any myself form field is empty, set the formIsValid to false and display the error message
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

		// Make sure all dependent fields are not empty
		let emptyDependent = 0;
		dependentList.forEach((dependent) => {
			if (dependent.firstname === "" || dependent.lastname === "") {
				emptyDependent++;
			}
		});
		if (emptyDependent > 0) {
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

		// For all the key names in the object, we must match what we have in the C# controller
		const myselfData = {
			firstname: enteredFirstName,
			emailaddress1: enteredEmail,
			address1_city: enteredCity,
			lastname: enteredLastName,
			address1_telephone1: enteredPhone,
			address1_stateorprovince: enteredState,
			address1_country: enteredCountry,
		};

		// Pass data up to the parent component, both myselft and all the dependent(s) data, we also need first name and password to create a new credential
		onGetDependentFormValues(
			myselfData,
			dependentList,
			enteredEmail,
			enteredPassword,
			setCreatingUser
		);
	};

	return (
		<div className="react-userRegisterForm-dependent">
			{creatingUser && (
				<div>
					<h1>Creating your account</h1>
					<ClipLoader color="rgb(255,177,3)" size={100} />
				</div>
			)}
			{!creatingUser && (
				<form onSubmit={submitHandler} react-userRegisterForm-dependant>
					<div className="react-userRegisterForm-myself">
					<p>You are registering for your own account as well as the ability to register others under your care for upcoming Hoop Camp Events. When you go to register for an event, you will be able to select which of your dependents (if any) will also be attending.</p>

						<div className="react-userRegistrationForm-myself-header">
							<h3 className="header-text">Myself</h3>
						</div>
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
									<label> State </label>
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

					</div>

					<div className="total-dependant-form">
					<h3 className="react-userRegistrationForm-myself-header">Dependents</h3>
					<div className="react-userRegisterForm-dependent-grid-container">
						<div>
							{dependentList.map((dependent) => {
								return (
									<Fragment key={dependent.id}>
										<div className="react-userRegisterForm-dependent-single-dependant">



											<div className="react-userRegisterForm-dependent-grid-format">
												<label htmlFor="dependent_fname">
												 First Name 
												</label>
												<br />
												<input
													id="dependent_fname"
													className="white-input"
													type="text"
													name="dependent_first_name"
													onChange={(event) =>
														depFirstNameChangeHandler(event, dependent.id)
													}
													required
												/>
											</div>
											<div className="react-userRegisterForm-dependent-grid-format">
												<label htmlFor="dependent_lname">  Last Name </label>
												<br />
												<input
													id="dependent_lname"
													className="white-input"
													type="text"
													name="dependent_last_name"
													onChange={(event) =>
														depLastNameChangeHandler(event, dependent.id)
													}
													required
												/>
											</div>



											{dependentList.length > 1 && (
												<div className="react-userRegisterForm-dependent-remove-button">
													<button
														type="button"
														onClick={() => removeDependentHandler(dependent.id)}
													>
														<FontAwesomeIcon icon={faUserMinus} /> Remove
													</button>
												</div>

											)}

										</div>
										<hr />

									</Fragment>
								);
							})}
						</div>
					</div>
					<div className="react-userRegisterForm-dependent-grid-format">
						<button
							type="button"
							className="react-userRegisterForm-dependent-add-button"
							onClick={addNewDependentHandler}
						>
							<FontAwesomeIcon icon={faUserPlus} /> Add A Dependent
						</button>
					</div>

					{!formIsValid && (
						<div className="react-userRegisterForm-myself-error-message">
							<h3>{errorMessage}</h3>
						</div>
					)}
					
					</div>

					<div className="react-userRegisterForm-myself-register-button-container">
						<button
							className="react-userRegisterForm-myself-register-button"
							type="submit"
						>
							<FontAwesomeIcon icon={faBasketball} /> Register All Accounts
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default UserRegistrationDependentForm;
