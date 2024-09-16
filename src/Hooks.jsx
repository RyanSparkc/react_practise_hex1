import { useState } from 'react';

function Hooks() {
  // [值，寫入的方法]
  const [count, setA] = useState(0);

  const [text, setText] = useState('Hello World');

  function handleChange(event) {
    setText(event.target.value);
  }

  return (<div>
      Hooks
      <p>count: {count}</p>
      <button onClick={() => setA(count + 1)}>+1</button>
      <hr />
      <p>text: {text}</p> 
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
}

export default Hooks;