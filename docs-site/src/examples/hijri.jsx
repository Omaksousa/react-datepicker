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

  renderValue = value =>
    this.state.calendar === "hijri"
      ? `${this.prinHijri(value)} - ${this.printGregorian(value)}`
      : `${this.printGregorian(value)} - ${this.prinHijri(value)}`;

  prinHijri = value => {
    const date = value.toHijri();
    return `${date.year}/${date.month}/${date.date}`;
  };

  printGregorian = value => {
    const date = value;
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
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
            customInput={
              <input
                value={
                  this.state.startDate && this.renderValue(this.state.startDate)
                }
              />
            }
          />
        </div>
      </div>
    );
  }
}
