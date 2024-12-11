import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Total = (props) => {
  return (
    <div>
      <p>Total: {props.total}</p>
    </div>
  );
};

export const App = () => {
  const [comentaries, setComentaries] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const [total, setTotal] = useState([]);

  function handleGood() {
    const newGood = {
      ...comentaries,
      good: comentaries.good + 1,
    };
    setComentaries(newGood);
    setTotal(total.concat(comentaries.good));
  }

  function handleNeutral() {
    const newNeutral = {
      ...comentaries,
      neutral: comentaries.neutral + 1,
    };
    setComentaries(newNeutral);
    setTotal(total.concat(comentaries.neutral));
  }

  function handleBad() {
    const newBad = {
      ...comentaries,
      bad: comentaries.bad + 1,
    };
    setComentaries(newBad);
    setTotal(total.concat(comentaries.bad));
  }

  return (
    <>
      <h2>Give Feedback</h2>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <h2>Statistics</h2>
      <p>Good: {comentaries.good}</p>
      <p>Neutral: {comentaries.neutral}</p>
      <p>Bad: {comentaries.bad}</p>
      <Total total={total.length} />
    </>
  );
};
