import React from "react";

type Props = {
  title: string;
  date: string;
  notes: string;
};

function Holiday({ title, date, notes }: Props) {
  return (
    <>
      <div>
        <div>
          <label>{`Title: ${title}`} </label>
        </div>
        <div>
          <label>{`Date: ${date}`}</label>
        </div>
        <div>
          <label>{`Notes: ${notes}`}</label>
        </div>
        <div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Holiday;
