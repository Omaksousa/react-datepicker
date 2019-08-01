import React from "react";
import DatePicker from "react-datepicker";

export default class Default extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.ref = React.createRef();
  }

  componentDidMount() {
    console.log(this.ref);
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div className="row">
        <pre className="column example__code">
          <code className="jsx">
            {`
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              ref={this.ref}
            />
            `}
          </code>
        </pre>
        <div className="column" onClick={() => alert("clicked")}>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            ref={this.ref}
          />
        </div>
      </div>
    );
  }
}
