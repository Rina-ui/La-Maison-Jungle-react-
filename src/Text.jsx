// Text.jsx
import React from 'react';

function MyButton(){
    return(
        <button>click here</button>
    )
}

const Text = () => {
    const msg = ""
  return(
  <div>
    <h1>Coding with {msg}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita fugiat perferendis officiis vitae eligendi voluptatem! Accusamus ad praesentium, maiores, est voluptatem blanditiis pariatur totam ut corrupti, natus ullam corporis odit.</p>
    <MyButton/>
  </div>
  );
};

export default Text;
