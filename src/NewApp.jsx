// 箭頭
// funcition

function NewApp() {

  function sum(a, b) {
    return a + b;
  }

  return (
    <>
      <div className="card">
        卡片
      </div>
      <label htmlFor="name">姓名</label>
      <input type="text" id="name" />
      <hr />
      <div style={{color: 'red', backgroundColor: 'blue'}}>這是一段文字</div>

      <hr />
      <input type="text" disabled={true} />
      <hr />
      {sum(1, 2)}

    </>
  );


}


export default NewApp;
