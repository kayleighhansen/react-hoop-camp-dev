import React, { useState, Fragment } from "react";
import "./user_registration_dependent_form.css";

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

	// handle the change of dependent first name
	const depFirstNameChangeHandler = (event, id) => {
		const newList = [...dependentList];
		newList.forEach((dependent) => {
			// Only update the first name if the id matches, so we make sure to update the right dependent
			if (dependent.id === id) {
				dependent.firstname = event.target.value;
			}
		});
		// newList[id].firstname = event.target.value;
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
		// newList[id].lastname = event.target.value;
		setDependentList(newList);
	};

	// set up the dependent id, starting with 1
	const [dependentID, setDependentID] = useState(1);

	// this will be used for all the dependent(s) fields
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

	// remove the dependent field (both first name and last name)
	const removeDependentHandler = (dependentID) => {
		const newList = [];
		// Remove the clicked one based on its id in the array list
		console.log("this is the dependent id that I want to remove.");
		console.log(dependentID);
		dependentList.forEach((dependent) => {
			if (dependent.id !== dependentID) {
				newList.push(dependent);
			};
		});
		setDependentList(newList);
	};

	const submitHandler = (event) => {
		// prevent the form from being sending to the server, so the page will NOT be reloaded
		event.preventDefault();

		// for all the key names in the object, we must match what we have in the C# controller
		const myselfData = {
			firstname: enteredFirstName,
			emailaddress1: enteredEmail,
			address1_city: enteredCity,
			lastname: enteredLastName,
			address1_telephone1: enteredPhone,
			address1_stateorprovince: enteredState,
			address1_country: enteredCountry,
		};

		// pass data up to the parent component
		onGetDependentFormValues(myselfData, dependentList);
	};

	return (
		<div className="react-userRegisterForm-dependent">
			<form onSubmit={submitHandler}>
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
							type="email"
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
					{dependentList.map((dependent) => {
						return (
							<Fragment key={dependent.id}>
								<div className="react-userRegisterForm-dependent-grid-item9 react-userRegisterForm-dependent-grid-format">
									<label htmlFor="dependent_fname">Dependent First Name</label>
									<br />
									<input
										id="dependent_fname"
										type="text"
										name="dependent_first_name"
										placeholder="Dependent First Name"
										onChange={(event) =>
											depFirstNameChangeHandler(event, dependent.id)
										}
										required
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
											Remove
										</button>
									</div>
								)}
							</Fragment>
						);
					})}

					
				</div>
				<div className="react-userRegisterForm-dependent-grid-format">
						<button
							type="button"
							className="react-userRegisterForm-dependent-add-button"
							onClick={addNewDependentHandler}
						>
							Add More Dependent
						</button>
					</div>
				<button
					className="react-userRegisterForm-dependent-register-button"
					type="submit"
				>
					Register for All
				</button>
			</form>
		</div>
	);
};

export default UserRegistrationDependentForm;
