// explanations of the new transform-class-properties syntax currently in beta stage

class OldSyntax {
	constructor() {
		this.name = "Mike";
		this.getGreeting = this.getGreeting.bind(this);
	}
	getOldGreeting() {
		return `hi my name is ${this.name}`;
	}
}

const oldSyntax = new OldSyntax();
const getOldGreeting = oldSyntax.getOldGreeting;
console.log(getGreeting());

// -> ----------------

class NewSyntax {
	name = "Annie";
	getNewGreeting = () => {
		return `hi my name is ${this.name}`;
	};
}

const newSyntax = new NewSyntax();
const getNewGreeting = newSyntax.getNewGreeting;
console.log(getNewGreeting());
