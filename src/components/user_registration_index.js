import "./user_registration_index.css";
import { useState } from "react";

import UserRegistrationMyselfForm from "./user_registration_myself_form";
import UserRegistrationDependentForm from "./user_registration_dependent_form";
import UserRegistrationOrganizationForm from "./user_registration_organization_form";

const UserRegistrationIndex = () => {
	const getSelfFormValuesHandler = (contactInfoData) => {
		// console.log(contactInfoData);
		const newContactInfoData = { ...contactInfoData, msnfp_householdrelationship: "844060000"};
		createNewSingleUserContact(newContactInfoData);
	};

	const createNewSingleUserContact = (newContactInfoData) => {
		fetch("https://localhost:44398/contacts/createContact", {
			method: "POST",
			body: JSON.stringify(newContactInfoData),
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
					<UserRegistrationOrganizationForm></UserRegistrationOrganizationForm>
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
				<label for="myself">Myself</label>
				<input
					type="radio"
					id="dependent"
					name="user_type"
					value="Dependent"
					onClick={selectedFormHandler}
				></input>
				<label for="dependent">One or More Dependents</label>
				<input
					type="radio"
					id="organization"
					name="user_type"
					value="Organization"
					onClick={selectedFormHandler}
				></input>
				<label for="organization">An Organization</label>
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
