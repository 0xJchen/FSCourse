import { useState } from "react";

function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}

const Display = (props) => <div>{props.value}</div>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const StatisticLine = (props) => {
  return (
    <>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </>
  );
};

const Statistics = (props) => {
  const sum = props.bad + props.good + props.neutral;
  if (sum === 0) {
    return (
      <>
        <p>no data available</p>
      </>
    );
  } else {
    return (
      <>
        <table>
          <tr>
            <StatisticLine text="good" value={props.good} />
          </tr>
          <tr>
            <StatisticLine text="neutral" value={props.neutral} />
          </tr>
          <tr>
            <StatisticLine text="bad" value={props.bad} />
          </tr>
        </table>
        {/* <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.bad+props.good+props.neutral}</p>
      <p>average {(props.bad+props.good+props.neutral)/4}</p>
      <p>positive {props.good/(props.bad+props.good+props.neutral)}</p> */}
      </>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selected, setSelected] = useState(0);

  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const setToGood = (newValue) => {
    console.log("value now", newValue);
    setGood(newValue);
  };

  const setToNeutral = (newValue) => {
    console.log("value now", newValue);
    setNeutral(newValue);
  };

  const setToBad = (newValue) => {
    console.log("value now", newValue);
    setBad(newValue);
  };

  const setToSelect = (newValue) => {
    console.log("value now", newValue);
    setBad(newValue);
  };

  return (
    <div>
      {/* <Display value={value} /> */}
      <p>
        <b>give feedback</b>
      </p>
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <p>
        <b>Statistics</b>
      </p>
      <Statistics good={good} bad={bad} neutral={neutral} />
      {/* part2 */}
      <p>
        <b>Today Random</b>
      </p>
      {anecdotes[randomNum(0, 6)]}
      <Button handleClick={() => setToGood(good + 1)} text="good" />

      <p>has {selected} votes.</p>
      <p>
        <b>Most popular</b>
      </p>
    </div>
  );
};
export default App;
