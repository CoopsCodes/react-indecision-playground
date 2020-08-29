class CounterState extends React.Component {
	constructor(props) {
		super(props);
		this.addOne = this.addOne.bind(this);
		this.minusOne = this.minusOne.bind(this);
		this.reset = this.reset.bind(this);
		this.state = {
			count: 0,
		};
	}
	componentDidMount() {
		try {
			const json = localStorage.getItem("count");
			const parsedJson = parseInt(json, 10);
			if (!isNaN(parsedJson)) {
				this.setState(() => ({ count: parsedJson }));
			}
		} catch (error) {}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) {
			localStorage.setItem("count", this.state.count);
		}
		try {
		} catch (error) {}
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
// CounterState.defaultProps = {
// 	count: 1,
// };
ReactDOM.render(
	<CounterState /* count={-110} */ />,
	document.getElementById("app")
);
