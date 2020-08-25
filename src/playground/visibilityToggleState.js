class VisibilityToggleState extends React.Component {
	constructor(props) {
		super(props);
		this.makeVisible = this.makeVisible.bind(this);
		this.state = {
			title: "Visibility Test",
			comment: "TADAA",
			visual: false,
		};
	}

	makeVisible(e) {
		e.preventDefault;
		this.setState((prevState) => {
			return {
				visual: !prevState.visual,
			};
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.title}</h1>
				<button onClick={this.makeVisible}>
					{this.state.visual ? "hide text" : "see text"}
				</button>
				<p>{this.state.visual ? this.state.comment : undefined}</p>
			</div>
		);
	}
}

ReactDOM.render(<VisibilityToggleState />, document.getElementById("app"));
