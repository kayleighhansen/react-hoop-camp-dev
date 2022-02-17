import "./user_registration_index.css";
import { useState } from "react";

import UserRegistrationMyselfForm from "./user_registration_myself_form";
import UserRegistrationDependentForm from "./user_registration_dependent_form";
import UserRegistrationOrganizationForm from "./user_registration_organization_form";

const UserRegistrationIndex = () => {
	/******************************************************************************
	 * This section is for Registering for Myself
	 *****************************************************************************/
	const getSelfFormValuesHandler = (contactInfoData) => {
		// we need to include the household relationship because we want to create a household automatically for every single user
		const newContactInfoData = {
			...contactInfoData,
			msnfp_householdrelationship: "844060000",
		};

		// const newCamperInfoData = {
		// 	...camperInfoData,
		// 	crbb4_contact_id: "",
		// };
		// call this function to have it call our C# API
		createNewSingleUserContact(newContactInfoData);
	};

	// this function calls our C# API and the C# API will call dynamics to save the data into database
	const createNewSingleUserContact = (newContactInfoData) => {
		// console.log(newContactInfoData);
		// I learned that I MUST have the headers here otherwise I got a 415 error
		fetch("https://localhost:44398/contacts/createContact", {
			method: "POST",
			body: JSON.stringify(newContactInfoData),
			headers: { "Content-type": "application/json; charset=UTF-8" },
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
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
				return <UserRegistrationDependentForm></UserRegistrationDependentForm>;
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
				<label htmlFor="dependent">One or More Dependents</label>
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
