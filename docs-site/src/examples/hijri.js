()=>{

  const [startDate, setStartDate] = useState(new Date())
  const [calendar, setCalendar] = useState(new Date("hijri"))
    return (
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            calendar={calendar}
            showHijriFooter
            hijriButtonLabel="التحويل للتقويم الهجري"
            gregorianButtonLabel="التحويل للتقويم الميلادي"
            onCalendarTypeChange={calendar => setCalendar (calendar )}
          />
    );
}
