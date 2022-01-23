import "./user_registration_index.css";

import UserRegistrationMyselfForm from "./user_registration_myself_form";
import UserRegistrationDependentForm from "./user_registration_dependent_form";
import UserRegistrationOrganizationForm from "./user_registration_organization_form";

const UserRegistrationIndex = () => {
	const displayFormValuesHandler = (enteredName) => {
		console.log(enteredName + " from index page.");
	};

	return (
		<div >
			<div className="react-userForm-index">
				<h1>Register New Account</h1>
				<p>I am registering for: </p>
				<input type="radio" id="myself" name="user_type" value="Myself"></input>
				<label for="myself">Myself</label>
				<input type="radio" id="dependent" name="user_type" value="Dependent"></input>
				<label for="dependent">One or More Dependents</label>
				<input type="radio" id="organization" name="user_type" value="Organization"></input>
				<label for="organization">An Organization</label>
			</div>
			
			<UserRegistrationMyselfForm
				onDisplayFormValues={displayFormValuesHandler}
			></UserRegistrationMyselfForm>

			<UserRegistrationDependentForm></UserRegistrationDependentForm>
			<UserRegistrationOrganizationForm></UserRegistrationOrganizationForm>
		</div>
	);
};

export default UserRegistrationIndex;

// I will need these two lines below for it to run in Wordpress
// let domContainer = document.querySelector("#user_registration_container");
// ReactDOM.render(<UserRegistrationIndex />, domContainer);
