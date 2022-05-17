import React from 'react'

const Counter = () =>{
    // let count = 0;
    const [count,setCount] = React.useState(0)
    
//     const incrementCount = () =>{
// // console.log("pre",count);
// // count++
// setCount(count+1)
// // console.log("post",count);
//     }

//     const deccrementCount = () =>{
//         setCount(count-1)
//     }
return (
    <div>
        <h1>Counter App:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
)
}

export default Counter;