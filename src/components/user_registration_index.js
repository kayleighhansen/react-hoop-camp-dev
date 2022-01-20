import UserRegistrationMyselfForm from "./user_registration_myself_form";
import UserRegistrationDependentForm from "./user_registration_dependent_form";
import UserRegistrationOrganizationForm from "./user_registration_organization_form";

const UserRegistrationIndex = () => {
	const displayFormValuesHandler = (enteredName) => {
		console.log(enteredName + " from index page.");
	};

	return (
		<div>
			<h1>Register New Account</h1>
			<p>I am registering for: </p>
			<UserRegistrationMyselfForm
				onDisplayFormValues={displayFormValuesHandler}
			></UserRegistrationMyselfForm>

			<UserRegistrationDependentForm></UserRegistrationDependentForm>
			<UserRegistrationOrganizationForm></UserRegistrationOrganizationForm>
		</div>
	);
};

let domContainer = document.querySelector("#user_registration_container");
ReactDOM.render(<UserRegistrationIndex />, domContainer);
