import React from "react";
import DatePicker from "react-datepicker";

export default class Default extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      calendar: "hijri"
    };
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
              calendar={this.state.calendar}
              showMonthDropdown
              showYearDropdown
              showHijriFooter
              hijriButtonLabel="التحويل للتقويم الهجري"
              gregorianButtonLabel="التحويل للتقويم الميلادي"
              onCalendarTypeChange={(calendar) => this.setState({ calendar })}
            />
            `}
          </code>
        </pre>
        <div className="column">
          <button onBlur={() => alert("blured")}>Click Me</button>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            calendar={this.state.calendar}
            showMonthDropdown
            showYearDropdown
            showHijriFooter
            hijriButtonLabel="التحويل للتقويم الهجري"
            gregorianButtonLabel="التحويل للتقويم الميلادي"
            onCalendarTypeChange={calendar => this.setState({ calendar })}
            onBlur={() => alert("blured")}
            customInput={
              <button onBlur={() => alert("blured")}>Click Me</button>
            }
          />
        </div>
      </div>
    );
  }
}
