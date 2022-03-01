import "./user_registration_index.css";
import { useState } from "react";

import UserRegistrationMyselfForm from "./user_registration_myself_form";
import UserRegistrationDependentForm from "./user_registration_dependent_form";
import UserRegistrationOrganizationForm from "./user_registration_organization_form";

const UserRegistrationIndex = () => {
	/******************************************************************************
	 * This section is for Registering for Myself
	 *****************************************************************************/
	const getSelfFormValuesHandler = (
		contactInfoData,
		enteredFirstName,
		enteredPassword
	) => {
		// we need to include the household relationship because we want to create a household automatically for every single user
		const newContactInfoData = {
			...contactInfoData,
			msnfp_householdrelationship: "844060000",
		};

		// this will be used to create a new credential
		const newCredentialInfoData = {
			username: enteredFirstName,
			password: enteredPassword,
		};

		// call this function to have it call our C# API
		createNewSingleUserContact(newContactInfoData, newCredentialInfoData);
	};

	// this function calls our C# API and the C# API will call dynamics to save the data into database
	const createNewSingleUserContact = (
		newContactInfoData,
		newCredentialInfoData
	) => {
		// I learned that I MUST have the headers here otherwise I got a 415 error
		fetch("https://localhost:44398/contacts/createContact", {
			method: "POST",
			body: JSON.stringify(newContactInfoData),
			headers: { "Content-type": "application/json; charset=UTF-8" },
		})
			.then((response) => {
				// error checking
				if (!response.ok) {
					throw new Error("Network response was not OK");
				}
				// return a promise for next then to handle
				return response.json();
			})
			.then((data) => {
				// this api returns the newly created contactid & the _msnfp_householdid_value
				console.log("Created a new user successfully!");
				console.log(data);

				// add new contact id into the credential data
				newCredentialInfoData.contactID = data.contactid;
				console.log(newCredentialInfoData);

				// I will need to use this new contact id to create a new credential
				// This endpoint requires username, password, and contactid, it will hash the password before saving to database
				// make a second request and returns a new promise
				return fetch("https://localhost:44398/credentials/createCredential", {
					method: "POST",
					body: JSON.stringify(newCredentialInfoData),
					headers: { "Content-type": "application/json; charset=UTF-8" },
				});
			})
			// use another .then to chain the second request
			.then((response) => {
				// error checking
				if (!response.ok) {
					throw new Error("Network response was not OK");
				}
				// return a promise for next then to handle
				return response.json();
			})
			.then((data) => {
				console.log("Created a new credential successfully!");
				// this data should be the result of creating a new credential which should contain a new credential id
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	/******************************************************************************
	 * This section is for Registering for An Organization
	 *****************************************************************************/
	// handle the form data from users
	const getOrganizationFormValuesHandler = (organizationData) => {
		createNewOrganization(organizationData);
	};

	const createNewOrganization = (organizationData) => {
		console.log(organizationData);
		// I learned that I MUST have the headers here otherwise I got a 415 error
		fetch("https://localhost:44398/accounts/createAccount", {
			method: "POST",
			body: JSON.stringify(organizationData),
			headers: { "Content-type": "application/json; charset=UTF-8" },
		}).then((response) => {
			console.log(response);
		});
	};

	/******************************************************************************
	 * This section is for Registering for Myself & Dependent(s)
	 *****************************************************************************/
	const getDependentFormValuesHandler = (myselfData, dependentData) => {
		// we need to include the household relationship because we want to create a household automatically for every single user
		const newMyselfData = {
			...myselfData,
			msnfp_householdrelationship: "844060000",
		};

		const newDependentData = {
			...dependentData,
			// when we create a dependent, we set up the relationship to be a "member"
			msnfp_householdrelationship: "844060001",
			// the id is required because we need to know which household to add this dependent into
			msnfp_HouseholdId: "",
		};

		createNewSingleUserContactAndDependent(newMyselfData, newDependentData);
	};

	// this function calls our C# API and the C# API will call dynamics to save the data into database
	const createNewSingleUserContactAndDependent = (
		newMyselfData,
		newDependentData
	) => {
		// I learned that I MUST have the headers here otherwise I got a 415 error
		fetch("https://localhost:44398/contacts/createContact", {
			method: "POST",
			body: JSON.stringify(newMyselfData),
			headers: { "Content-type": "application/json; charset=UTF-8" },
		})
			.then((response) => {
				// error checking
				if (!response.ok) {
					throw new Error("Network response was not OK");
				}
				// return a promise for next then to handle
				return response.json();
			})
			.then((data) => {
				console.log("Created a new single user & household successfully.");
				console.log(data);
				console.log("New Household Id: ");
				const newHouseHoldId = data._msnfp_householdid_value;
				console.log(newHouseHoldId);
				createNewDependent(newHouseHoldId, newDependentData);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const createNewDependent = (newHouseHoldId, newDependentData) => {
		// must add the newHouseHoldId, so it knows which household this dependent will be added in
		newDependentData.msnfp_HouseholdId = newHouseHoldId;
		fetch("https://localhost:44398/contacts/createChildInHousehold", {
			method: "POST",
			body: JSON.stringify(newDependentData),
			headers: { "Content-type": "application/json; charset=UTF-8" },
		})
			.then((response) => {
				// error checking
				if (!response.ok) {
					throw new Error("Network response was not OK");
				}
				// return a promise for next then to handle
				return response.json();
			})
			.then((data) => {
				console.log("Created a new dependent successfully.");
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// set up this to catch what the user select on the radio button
	const [selectedForm, setSelectedForm] = useState("");
	const selectedFormHandler = (event) => {
		setSelectedForm(event.target.value);
	};

	// render different forms based on what the users select
	const renderSelectedForm = (selectedForm) => {
		switch (selectedForm) {
			case "Myself":
				return (
					<UserRegistrationMyselfForm
						onGetSelfFormValues={getSelfFormValuesHandler}
					></UserRegistrationMyselfForm>
				);
			case "Dependent":
				return (
					<UserRegistrationDependentForm
						onGetDependentFormValues={getDependentFormValuesHandler}
					></UserRegistrationDependentForm>
				);
			case "Organization":
				return (
					<UserRegistrationOrganizationForm
						onGetOrganizationFormValues={getOrganizationFormValuesHandler}
					></UserRegistrationOrganizationForm>
				);
			default:
				return <p>Please select the type of user you are registering for.</p>;
		}
	};

	return (
		<div className="react-userRegisterForm-all">
			<div className="react-userRegisterForm-index">
				<h1>Register New Account</h1>
				<p>I am registering for: </p>
				<input
					type="radio"
					id="myself"
					name="user_type"
					value="Myself"
					onClick={selectedFormHandler}
				></input>
				<label htmlFor="myself">Myself</label>
				<input
					type="radio"
					id="dependent"
					name="user_type"
					value="Dependent"
					onClick={selectedFormHandler}
				></input>
				<label htmlFor="dependent">Myself & Dependent(s)</label>
				<input
					type="radio"
					id="organization"
					name="user_type"
					value="Organization"
					onClick={selectedFormHandler}
				></input>
				<label htmlFor="organization">An Organization</label>
			</div>
			<div className="react-userRegisterForm">
				<div>{renderSelectedForm(selectedForm)}</div>
			</div>
		</div>
	);
};

export default UserRegistrationIndex;

// I will need these two lines below for it to run in Wordpress
// let domContainer = document.querySelector("#user_registration_container");
// ReactDOM.render(<UserRegistrationIndex />, domContainer);
