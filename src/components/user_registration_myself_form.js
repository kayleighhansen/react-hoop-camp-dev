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

	// handle birthday
	const [enteredBirthday, setEnteredBirthday] = useState("");
	const birthdayChangeHandler = (event) => {
		setEnteredBirthday(event.target.value);
	};

	// handle country
	const [enteredCountry, setEnteredCountry] = useState("");
	const countryChangeHandler = (event) => {
		setEnteredCountry(event.target.value);
	};

	// handle medications
	const [enteredMedications, setEnteredMedications] = useState("");
	const medicationsChangeHandler = (event) => {
		setEnteredMedications(event.target.value);
	};

	// handle shirt size
	const [enteredShirtSize, setEnteredShirtSize] = useState("");
	const shirtSizeChangeHandler = (event) => {
		setEnteredShirtSize(event.target.value);
	};

	// handle medication info
	const [enteredMedicationInfo, setEnteredMedicationInfo] = useState("");
	const medicationInfoChangeHandler = (event) => {
		setEnteredMedicationInfo(event.target.value);
	};

	// handle emergency contact name
	const [enteredEmergContactName, setEnteredEmergContactName] = useState("");
	const emergContactNameChangeHandler = (event) => {
		setEnteredEmergContactName(event.target.value);
	};

	// handle emergency contact phone
	const [enteredEmergContactPhone, setEnteredEmergContactPhone] = useState("");
	const emergContactPhoneChangeHandler = (event) => {
		setEnteredEmergContactPhone(event.target.value);
	};

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
			birthdate: enteredBirthday,
			address1_country: enteredCountry,
		}

		// pass the data up to parent component (index.js)
		onGetSelfFormValues(contactInfoData)

		const camperInfoData = {}
	};

	return (
		<div className="react-userRegisterForm-myself">
			<h3>Myself</h3>
			<form
				className="react-userRegisterForm-myself-grid-container"
				onSubmit={submitHandler}
			>
				<div className="react-userRegisterForm-myself-grid-item1">
					<input
						type="text"
						name="first_name"
						placeholder="First Name"
						onChange={firstNameChangeHandler}
						required
					/>
				</div>
				<div className="react-userRegisterForm-myself-grid-item2">
					<input
						type="text"
						name="email"
						placeholder="Email"
						onChange={emailChangeHandler}
						required
					/>
				</div>
				<div className="react-userRegisterForm-myself-grid-item3">
					<input
						type="text"
						name="city"
						placeholder="City"
						onChange={cityChangeHandler}
						required
					/>
				</div>
				<div className="react-userRegisterForm-myself-grid-item4">
					<input
						type="text"
						name="last_name"
						placeholder="Last Name"
						onChange={lastNameChangeHandler}
						required
					/>
				</div>
				<div className="react-userRegisterForm-myself-grid-item5">
					<input
						type="text"
						name="phone"
						placeholder="Phone"
						onChange={phoneChangeHandler}
						required
					/>
				</div>
				<div className="react-userRegisterForm-myself-grid-item6">
					<input
						type="text"
						name="state"
						placeholder="State"
						onChange={stateChangeHandler}
						required
					/>
				</div>
				<div className="react-userRegisterForm-myself-grid-item7">
					<input
						type="text"
						name="birthday"
						placeholder="Birthday"
						onChange={birthdayChangeHandler}
						required
					/>
				</div>
				<div className="react-userRegisterForm-myself-grid-item8">
					<input
						type="text"
						name="country"
						placeholder="Country"
						onChange={countryChangeHandler}
						required
					/>
				</div>
				<br />
				<br />
				<div className="react-userRegisterForm-myself-grid-item9">
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
				</div>

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
