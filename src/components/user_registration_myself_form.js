import { useState } from "react";
import "./user_registration_myself_form.css";

const UserRegistrationMyselfForm = (props) => {
	const [enteredName, setEnteredName] = useState("");

	const nameChangeHandler = (event) => {
		setEnteredName(event.target.value);

		props.onDisplayFormValues(enteredName);
	};

	return (
		<div className="react-userRegisterForm-myself">
			<h3>Myself</h3>
			<form className="react-userRegisterForm-myself-grid-container">
				<div className="react-userRegisterForm-myself-grid-item1">
					<input
						type="text"
						name="first_name"
						placeholder="First Name"
						onChange={nameChangeHandler}
					/>
				</div>
				<div className="react-userRegisterForm-myself-grid-item2">
					<input type="text" name="email" placeholder="Email" />
				</div>
				<div className="react-userRegisterForm-myself-grid-item3">
					<input type="text" name="city" placeholder="City" />
				</div>
				<div className="react-userRegisterForm-myself-grid-item4">
					<input type="text" name="last_name" placeholder="Last Name" />
				</div>
				<div className="react-userRegisterForm-myself-grid-item5">
					<input type="text" name="phone" placeholder="Phone" />
				</div>
				<div className="react-userRegisterForm-myself-grid-item6">
					<input type="text" name="state" placeholder="State" />
				</div>
				<div className="react-userRegisterForm-myself-grid-item7">
					<input type="text" name="birthday" placeholder="Birthday" />
				</div>
				<div className="react-userRegisterForm-myself-grid-item8">
					<input type="text" name="country" placeholder="Country" />
				</div>
				<br />
				<br />
				<div className="react-userRegisterForm-myself-grid-item9">
					<input type="text" name="medications" placeholder="Medications" />
				</div>
				<div className="react-userRegisterForm-myself-grid-item10">
					<input type="text" name="shirt_size" placeholder="Shirt Size" />
				</div>
				<div className="react-userRegisterForm-myself-grid-item11">
					<input
						type="text"
						name="medication_information"
						placeholder="Medication Information"
					/>
				</div>
				<div className="react-userRegisterForm-myself-grid-item12">
					<input
						type="text"
						name="emergency_contact_name"
						placeholder="Emergency Contact Name"
					/>
				</div>
				<div className="react-userRegisterForm-myself-grid-item13">
					<input
						type="text"
						name="emergency_contact_phone"
						placeholder="Emergency Contact Phone"
					/>
				</div>
			</form>
		</div>
	);
};

export default UserRegistrationMyselfForm;
