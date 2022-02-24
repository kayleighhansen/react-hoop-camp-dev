import { useState } from "react";
import "./user_registration_myself_form.css";

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

	// Brother Thayne doesn't want us to have users fill out camper info while they register, so remove them now

	// // handle medications
	// const [enteredMedications, setEnteredMedications] = useState("");
	// const medicationsChangeHandler = (event) => {
	// 	setEnteredMedications(event.target.value);
	// };

	// // handle shirt size
	// const [enteredShirtSize, setEnteredShirtSize] = useState("");
	// const shirtSizeChangeHandler = (event) => {
	// 	setEnteredShirtSize(event.target.value);
	// };

	// // handle medication info
	// const [enteredMedicationInfo, setEnteredMedicationInfo] = useState("");
	// const medicationInfoChangeHandler = (event) => {
	// 	setEnteredMedicationInfo(event.target.value);
	// };

	// // handle emergency contact name
	// const [enteredEmergContactName, setEnteredEmergContactName] = useState("");
	// const emergContactNameChangeHandler = (event) => {
	// 	setEnteredEmergContactName(event.target.value);
	// };

	// // handle emergency contact phone
	// const [enteredEmergContactPhone, setEnteredEmergContactPhone] = useState("");
	// const emergContactPhoneChangeHandler = (event) => {
	// 	setEnteredEmergContactPhone(event.target.value);
	// };

	const submitHandler = (event) => {
		// prevent the form from being sending to the server, so the page will NOT be reloaded
		event.preventDefault();

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

		// // we use medication info here to represent medical condition in power apps
		// const camperInfoData = {
		// 	crbb4_medications: enteredMedications,
		// 	crbb4_medical_conditions: enteredMedicationInfo,
		// 	crbb4_shirt_size: enteredShirtSize,
		// 	crbb4_emergencycontact: enteredEmergContactName,
		// 	crbb4_emergency_contact_phone: enteredEmergContactPhone,
		// };

		// pass the data up to parent component (index.js)
		onGetSelfFormValues(contactInfoData);
	};

	return (
		<div className="react-userRegisterForm-myself">
			<h3>Myself</h3>
			<form
				className="react-userRegisterForm-myself-grid-container"
				onSubmit={submitHandler}
			>
				<div className="react-userRegisterForm-myself-grid-item1 react-userRegisterForm-myself-grid-format">
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
				<div className="react-userRegisterForm-myself-grid-item4 react-userRegisterForm-myself-grid-format">
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
				<div className="react-userRegisterForm-myself-grid-item2 react-userRegisterForm-myself-grid-format">
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
				<div className="react-userRegisterForm-myself-grid-item3 react-userRegisterForm-myself-grid-format">
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
				<div className="react-userRegisterForm-myself-grid-item6 react-userRegisterForm-myself-grid-format">
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
				{/* <div className="react-userRegisterForm-myself-grid-item7">
					<input
						type="text"
						name="birthday"
						placeholder="Birthday"
						onChange={birthdayChangeHandler}
						required
					/>
				</div> */}
				<div className="react-userRegisterForm-myself-grid-item8 react-userRegisterForm-myself-grid-format">
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
				<div className="react-userRegisterForm-myself-grid-item5 react-userRegisterForm-myself-grid-format">
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
				<div className="react-userRegisterForm-myself-grid-item9 react-userRegisterForm-myself-grid-format">
					<label htmlFor="password">Password</label>
					<br />
					<input
						type="text"
						name="password"
						id="password"
						placeholder="at least 4 characters long"
						onChange={passwordChangeHandler}
						required
					/>
				</div>
				<br />
				<br />
				{/* <div className="react-userRegisterForm-myself-grid-item9">
					<input
						type="text"
						name="medications"
						placeholder="Medications"
						onChange={medicationsChangeHandler}
					/>
				</div>
				<div className="react-userRegisterForm-myself-grid-item10">
					<input
						type="text"
						name="shirt_size"
						placeholder="Shirt Size"
						onChange={shirtSizeChangeHandler}
					/>
				</div>
				<div className="react-userRegisterForm-myself-grid-item11">
					<input
						type="text"
						name="medication_information"
						placeholder="Medication Information"
						onChange={medicationInfoChangeHandler}
					/>
				</div>
				<div className="react-userRegisterForm-myself-grid-item12">
					<input
						type="text"
						name="emergency_contact_name"
						placeholder="Emergency Contact Name"
						onChange={emergContactNameChangeHandler}
					/>
				</div>
				<div className="react-userRegisterForm-myself-grid-item13">
					<input
						type="text"
						name="emergency_contact_phone"
						placeholder="Emergency Contact Phone"
						onChange={emergContactPhoneChangeHandler}
					/>
				</div> */}

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
