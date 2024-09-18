import { useState, useEffect } from 'react';
import Tr from './components/Tr.jsx';

const initialData = [
  {
    id: 1,
    name: '珍珠奶茶',
    description: '香濃奶茶搭配QQ珍珠',
    price: 50,
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    description: '清新冬瓜配上新鮮檸檬',
    price: 45,
  },
  {
    id: 3,
    name: '翡翠檸檬',
    description: '綠茶與檸檬的完美結合',
    price: 55,
  },
  {
    id: 4,
    name: '四季春茶',
    description: '香醇四季春茶，回甘無比',
    price: 45,
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    description: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
  },
  {
    id: 6,
    name: '檸檬冰茶',
    description: '檸檬與冰茶的清新組合',
    price: 45,
  },
  {
    id: 7,
    name: '芒果綠茶',
    description: '芒果與綠茶的獨特風味',
    price: 55,
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    description: '抹茶與鮮奶的絕配',
    price: 60,
  },
];

function ClassTable() {
  const [data, setData] = useState(initialData);
  const [newName, setNewName] = useState('');
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const handleAdd = () => {
    setData([...data, {
      id: data.length + 1,
      name: newName,
      price: price,
    }]);
    setNewName('');
    setPrice(0);
  };

  const handleEdit = (id) => {
    setData(data.map((item) => item.id === id ? { ...item, editing: true } : item));
  };

  // 總計
  // call back function, [條件]
  useEffect(() => {
    // 金額加總
    const total = data.reduce((total, item) => total + item.price, 0);
    console.log(total);
    setTotal(total);
  }, [data]);

  return (
    <>
    <input type="text" placeholder="請輸入產品名稱" value={newName} onChange={(e) => setNewName(e.target.value)} />
    <input type="number" placeholder="請輸入產品價格" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
    <button onClick={handleAdd}>新增</button>
    <table>
      <thead>
        <tr>
          <th>產品名稱</th>
          <th>價格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <Tr key={item.id} item={item} setData={setData} data={data} handleEdit={handleEdit} />
          )
        })}
      </tbody>
    </table>
    <p>總計: {total}</p>
  </>
  );
}

export default ClassTable;
