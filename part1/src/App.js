const Header = (props) =>{
  return(
    <div>
      <p>
        {props.course}
      </p>
    </div>
  )
}

const Part = (props) =>{
  return(
    <div>
      <p>
        {props.name}
      </p>
    </div>
  )
}

const Content = (props) =>{
  return(
    <div>
      <p>
        <Part name={props.name1}/>
        <Part name={props.name2}/>
      </p>
    </div>
  )
}



const Total = (props) =>{
  return(
    <div>
      <p>
        Number of exercises  {props.num1} + {props.num2}
      </p>
    </div>
  )
}

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content name1={part1} name2={part2} />
      <Total  num1={exercises1} num2={exercises2}  />
    </div>
  )
}

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

export default App