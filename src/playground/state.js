class StateApp extends React.Component {
	constructor(props) {
		super(props);
		this.minusOne = this.minusOne.bind(this);
		this.addOne = this.addOne.bind(this);
		this.resetCounter = this.resetCounter.bind(this);
		this.state = {
			count: 0,
		};
	}
	addOne(e) {
		e.preventDefault();
		this.setState({ count: this.state.count + 1 });
	}
	minusOne(e) {
		e.preventDefault();
		this.setState((prevState) => {
			return {
				count: prevState.count - 1,
			};
		});
	}
	resetCounter(e) {
		e.preventDefault();
		this.setState({ count: 0 });
	}
	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.minusOne}>-1</button>
				<button onClick={this.addOne}>+1</button>
				<button onClick={this.resetCounter}>Reset</button>
			</div>
		);
	}
}

ReactDOM.render(<StateApp />, document.getElementById("app"));
