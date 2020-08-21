class IndecisionApp extends React.Component {
	render() {
		const headerTitle = "Indecision App";
		const subTitle = "Let a your choices be made at random!";
		const option = ["option 1", "option 2", "option 4"];
		return (
			<div>
				<Header title={headerTitle} subtitle={subTitle} />
				<Action />
				<Options option={option} />
				<AddOption />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<p>{this.props.subtitle}</p>
			</div>
		);
	}
}

class Action extends React.Component {
	render() {
		return <button>Roll the dice baby!</button>;
	}
}

class Options extends React.Component {
	render() {
		return (
			<div>
				{this.props.option.map((o) => (
					<Option key={o} optionText={o} />
				))}
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.optionText}</p>
			</div>
		);
	}
}

class AddOption extends React.Component {
	render() {
		return <p>Add option component will display here</p>;
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
