const UserRegistrationMyselfForm = (props) => {
	const [enteredName, setEnteredName] = React.useState("");

	const nameChangeHandler = (event) => {
		setEnteredName(event.target.value);

		props.onDisplayFormValues(enteredName);
	};

	return (
		<div>
			<h1>Myself</h1>
			<form>
				<label>Enter Name: </label>
				<input type="text" name="Name" onChange={nameChangeHandler} />
			</form>
		</div>
	);
};

export default UserRegistrationMyselfForm;
