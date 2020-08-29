// Stateless functional component
// A Stateless component is referred to as a Dumb component, something that doesn't hold any state or contain any or much logic, it basically just displays and data passed down to it.
// Stateless components don't have access to 'This' therefore access props via the 'props.value' extension
const User = (props) => {
	return (
		<div>
			<p>Name: {props.name}</p>
			<p>Age: </p>
		</div>
	);
};

ReactDOM.render(<User name="Cooper" />, document.getElementById("app"));
