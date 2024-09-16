function ArrayMethods() {
  // 四筆資料
  const data = [
    {
      id: 1,
      name: 'John',
      cash: 200,
      favorite: 'apple',
    },
    {
      id: 2,
      name: 'Jane',
      cash: 100,
      favorite: 'banana',
    },
    {
      id: 3,
      name: 'John',
      cash: 300,
      favorite: 'orange',
    },
    {
      id: 4,
      name: 'Jane',
      cash: 400,
      favorite: 'grape',
    },
  ];
  // 找出 favorite 是 apple 的資料
  const appleData = data.filter((item) => item.favorite === 'apple');
  console.log(appleData);

  return (
    <div>
      {appleData.map((item) => {
        return (
          <div key={item.id}>
            <ul>
              <li>{item.name}</li>
              <li>{item.cash}</li>
              <li>{item.favorite}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default ArrayMethods;
