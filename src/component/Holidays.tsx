import axios from "axios";
import React from "react";
import Holiday from "./Holiday";

type holiday = {
  title: string;
  date: string;
  notes: string;
};

function Holidays() {
  const [data, setData] = React.useState<holiday[]>();

  const getHoliday = async () => {
    const res = await axios.get("https://www.gov.uk/bank-holidays.json");
    setData(await res.data["england-and-wales"].events);
  };
  React.useEffect(() => {
    getHoliday().catch(console.error);
  }, []);

  return (
    <>
      <h1>Calling holiday api</h1>
      {data &&
        data.map(({ date, notes, title }: holiday) => (
          <Holiday key={date} date={date} title={title} notes={notes} />
        ))}
    </>
  );
}

export default Holidays;
