import { useState } from 'react';
// import PropTypes from 'prop-types';


function InputWithLabel({text, setText}) {  // props 解構
  return (
    <>
      <div style={{border: '1px solid red'}}>
        <label htmlFor="text">標題 {text}</label>
        <input type="text" id="text" value={text} onChange={(e) => {
        setText(e.target.value);
      }} />
      </div>
    </>
  );
}

// 定義元件的 props 型別
// InputWithLabel.propTypes = {
//   text: PropTypes.string,
//   setText: PropTypes.func,
// };

function ComponentProps() {
  const [text, setText] = useState('帕米娜');

  return (
    <>
      <div>
        <InputWithLabel text={text} setText={setText} />
      </div>
      外層的：{text}
    </>
  );
}

export default ComponentProps;