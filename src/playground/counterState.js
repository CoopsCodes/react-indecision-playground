class CounterState extends React.Component {
	constructor(props) {
		super(props);
		this.addOne = this.addOne.bind(this);
		this.minusOne = this.minusOne.bind(this);
		this.reset = this.reset.bind(this);
		this.state = {
			count: props.count,
		};
	}
	addOne(e) {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1,
			};
		});
	}
	minusOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1,
			};
		});
	}
	reset() {
		this.setState({ count: 0 });
	}

	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.addOne}>+1</button>
				<button onClick={this.minusOne}>-1</button>
				<button onClick={this.reset}>Reset</button>
			</div>
		);
	}
}
CounterState.defaultProps = {
	count: 1,
};
ReactDOM.render(<CounterState />, document.getElementById("app"));
