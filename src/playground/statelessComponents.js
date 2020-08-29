// Stateless functional component
// A Stateless component is referred to as a Dumb component, something that doesn't hold any state or contain any or much logic, it basically just displays and data passed down to it.
// Stateless components don't have access to 'This' therefore access props via the 'props.value' extension
const User = (props) => {
	return (
		<div>
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
		</div>
	);
};

// Setting default props.
// To set a fallback default value for a prop (in case there is an issue and it doesnt get sent down from the parent component)
// Define is below the Stateless component and set a 'defaultProps' value.
// This will only work if 'user={name}' prop isn't passed down, not if the prop is set to pass something down but the value doesn't exist
User.defaultProps = {
	name: "some value",
	age: "00",
};

ReactDOM.render(
	<User name="Cooper" age="36" />,
	document.getElementById("app")
);
