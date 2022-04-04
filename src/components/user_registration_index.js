import "../App.css";
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
		enteredEmail,
		enteredPassword,
		setCreatingUser
	) => {
		// we need to include the household relationship because we want to create a household automatically for every single user
		const newContactInfoData = {
			...contactInfoData,
			msnfp_householdrelationship: "844060000",
		};

		// This will be used to create a new credential, use email as login username
		const newCredentialInfoData = {
			username: enteredEmail,
			password: enteredPassword,
		};

		// Call this function to have it call our C# API
		createNewSingleUserContact(newContactInfoData, newCredentialInfoData, setCreatingUser);
	};

	// this function calls our C# API and the C# API will call dynamics to save the data into database
	// For this function, I used .then to chain the create credential function together
	const createNewSingleUserContact = (
		newContactInfoData,
		newCredentialInfoData,
		setCreatingUser
	) => {
		// I learned that I MUST have the headers here otherwise I got a 415 error
		// localhost test endpoint: https://localhost:44398/contacts/createContact
		fetch("https://hoopcamp-dev.azurewebsites.net/contacts/createContact", {
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
				// localhost test endpoint: https://localhost:44398/credentials/createCredential
				return fetch("https://hoopcamp-dev.azurewebsites.net/credentials/createCredential", {
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

				// Done with creating a new user, hide the laoding spinner
				setCreatingUser(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	/******************************************************************************
	 * This section is for Registering for An Organization
	 *****************************************************************************/
	// handle the form data from users
	const getOrganizationFormValuesHandler = (
		myselfData,
		organizationData,
		enteredEmail,
		enteredPassword,
		setCreatingUser
	) => {
		// We need to include the household relationship because we want to create a household automatically for every single user
		const newMyselfData = {
			...myselfData,
			msnfp_householdrelationship: "844060000",
		};

		// This will be used to create a new credential, use email as login username
		const newCredentialInfoData = {
			username: enteredEmail,
			password: enteredPassword,
		};

		// Create a new single user and create a new credential for the user
		createNewSingleUserContactAndCredential(
			newMyselfData,
			newCredentialInfoData,
			organizationData,
			setCreatingUser
		);
	};

	const createNewSingleUserContactAndCredential = (
		newMyselfData,
		newCredentialInfoData,
		organizationData,
		setCreatingUser
	) => {
		// I learned that I MUST have the headers here otherwise I got a 415 error
		// localhost test endpoint: https://localhost:44398/contacts/createContact
		fetch("https://hoopcamp-dev.azurewebsites.net/contacts/createContact", {
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

				// Add new contact id into the credential data 	because I will need to use this new contact id to create a new credential
				newCredentialInfoData.contactID = data.contactid;
				console.log(newCredentialInfoData);

				// Create a new credential for the single user
				createNewCrendential(newCredentialInfoData);

				// We want to save the newly cretaed user to be the main contact for the organization
				const newContactId = data.contactid;
				console.log("newly created contact id here: ");
				console.log(newContactId);
				const newOrganizationData = {
					...organizationData,
					// Must use primarycontactid to match the backend api
					primarycontactid: newContactId,
				};

				createNewOrganization(newOrganizationData, setCreatingUser);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const createNewOrganization = (newOrganizationData, setCreatingUser) => {
		console.log("new org data I will use to create a new org");
		console.log(newOrganizationData);
		// I learned that I MUST have the headers here otherwise I got a 415 error
		// localhost test endpoint: https://localhost:44398/accounts/createAccount
		fetch("https://hoopcamp-dev.azurewebsites.net/accounts/createAccount", {
			method: "POST",
			body: JSON.stringify(newOrganizationData),
			headers: { "Content-type": "application/json; charset=UTF-8" },
		}).then((response) => {
			console.log(response);
			// Done with creating a new user, hide the laoding spinner
			setCreatingUser(false);
		});
	};

	/******************************************************************************
	 * This section is for Registering for Myself & Dependent(s)
	 *****************************************************************************/
	const getDependentFormValuesHandler = (
		myselfData,
		dependentData,
		enteredEmail,
		enteredPassword,
		setCreatingUser
	) => {
		// we need to include the household relationship because we want to create a household automatically for every single user
		const newMyselfData = {
			...myselfData,
			msnfp_householdrelationship: "844060000",
		};

		// This will be used to create a new credential, use email as login username
		const newCredentialInfoData = {
			username: enteredEmail,
			password: enteredPassword,
		};

		const newDependentData = [...dependentData];
		// Go through all the dependent(s) object and add the msnfp_householdrelationship & msnfp_HouseholdId into each object
		newDependentData.forEach((dependent) => {
			// When creating a dependent, set up the relationship to be a "member"
			dependent.msnfp_householdrelationship = "844060001";
			// The id is required because we need to know which household to add this dependent into, will get it down below after we create a new individual (parent)
			dependent.msnfp_HouseholdId = "";
		});

		createNewSingleUserContactAndDependent(
			newMyselfData,
			newCredentialInfoData,
			newDependentData,
			setCreatingUser
		);
	};

	// This function calls our C# API and the C# API will call dynamics to save the data into database
	const createNewSingleUserContactAndDependent = (
		newMyselfData,
		newCredentialInfoData,
		newDependentData,
		setCreatingUser
	) => {
		// I learned that I MUST have the headers here otherwise I got a 415 error
		// localhost test endpoint: https://localhost:44398/contacts/createContact
		fetch("https://hoopcamp-dev.azurewebsites.net/contacts/createContact", {
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

				// Add new contact id into the credential data 	because I will need to use this new contact id to create a new credential
				newCredentialInfoData.contactID = data.contactid;
				console.log(newCredentialInfoData);

				// Create a new credential for the single user
				createNewCrendential(newCredentialInfoData);

				console.log("New Household Id: ");
				const newHouseHoldId = data._msnfp_householdid_value;
				console.log(newHouseHoldId);
				// Create new dependent(s)
				createNewDependent(newHouseHoldId, newDependentData, setCreatingUser);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// Create a new credential for a single user
	const createNewCrendential = (newCredentialInfoData) => {
		// This endpoint requires username, password, and contactid, it will hash the password before saving to database
		// localhost test endpoint: https://localhost:44398/credentials/createCredential
		fetch("https://hoopcamp-dev.azurewebsites.net/credentials/createCredential", {
			method: "POST",
			body: JSON.stringify(newCredentialInfoData),
			headers: { "Content-type": "application/json; charset=UTF-8" },
		})
			.then((response) => {
				// Error checking
				if (!response.ok) {
					throw new Error("Network response was not OK");
				}
				// Return a promise for next then to handle
				return response.json();
			})
			.then((data) => {
				console.log("Created a new credential successfully.");
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const createNewDependent = (newHouseHoldId, newDependentData, setCreatingUser) => {
		// must add the newHouseHoldId to all dependent(s), so it knows which household this dependent will be added in
		newDependentData.forEach((dependent) => {
			dependent.msnfp_HouseholdId = newHouseHoldId;
		});

		console.log("About to call add dependent api");
		console.log(newDependentData);

		// we want to make an api call for each dependent
		newDependentData.forEach((dependent) => {
			// call backend api to create new dependent into the household
			// localhost test endpoint: https://localhost:44398/contacts/createChildInHousehold
			fetch("https://hoopcamp-dev.azurewebsites.net/contacts/createChildInHousehold", {
				method: "POST",
				body: JSON.stringify(dependent),
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
					setCreatingUser(false);
				})
				.catch((err) => {
					console.log(err);
				});
		});
	};

	/******************************************************************************
	 * This section is to display 3 different types of forms
	 *****************************************************************************/

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
				<div className="start-registration-box">
					<p>I am registering for: </p>
					<div className="registration-radio-btn-container">
						<div className="registration-radio-btn">
							<input
								type="radio"
								id="myself"
								name="user_type"
								value="Myself"
								onClick={selectedFormHandler}
							></input>
							<label htmlFor="myself">Myself</label>
						</div>
						<div className="registration-radio-btn">
							<input
								type="radio"
								id="dependent"
								name="user_type"
								value="Dependent"
								onClick={selectedFormHandler}
							></input>
							<label htmlFor="dependent">Myself & Dependent(s)</label>
						</div>
						<div className="registration-radio-btn">
							<input
								type="radio"
								id="organization"
								name="user_type"
								value="Organization"
								onClick={selectedFormHandler}
							></input>
							<label htmlFor="organization">An Organization</label>
						</div>
					</div>
				</div>
			</div>
			<div className="react-userRegisterForm">
				<div>{renderSelectedForm(selectedForm)}</div>
			</div>
		</div>
	);
};

export default UserRegistrationIndex;
