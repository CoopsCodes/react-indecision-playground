//* Rendering React to the dom
var test = (
	<div>
		<h1>Title</h1>
		<p>tadaa</p>
	</div>
);
//* ------------------------

//* Rendering via variables
var userName = "Cooper";
var userAge = 35;
var userLocation = "Melbourne Australia";
var myTemplate = (
	<div>
		<h1>Hi: {userName.toLocaleUpperCase() + "!"}</h1>
		<p>Age: {userAge}</p>
		<p>Location: {userLocation}</p>
	</div>
);
//* ------------------------

//* Rendering via an Object
const user = {
	name: "Cooper Viktor",
	age: 36,
	location: "Melbourne Victoria",
};
const myTemplate = (
	<div>
		//! Ternary Operator example
		<h1>Welcome {user.name ? user.name : "New User"}</h1>
		//! And / OR example
		{user.age && user.age >= 18 && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
);
//* AND / OR check to see if user age exists and is greater than 18, then it will display result
//* ------------------------

//* Conditional Rendering
function getLocation(location) {
	if (location) {
		return <p>Location: {location}</p>;
	}
	/* If your else is returning undefined, you can remove the whole return
	else {
		return undefined
	}
	*/
}
