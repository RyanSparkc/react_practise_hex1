import { useState } from 'react';
const data = [
  {
    id: 1,
    name: '珍珠奶茶',
    description: '香濃奶茶搭配QQ珍珠',
    price: 50,
    stock: 20,
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    description: '清新冬瓜配上新鮮檸檬',
    price: 45,
    stock: 18,
  },
  {
    id: 3,
    name: '翡翠檸檬',
    description: '綠茶與檸檬的完美結合',
    price: 55,
    stock: 34,
  },
  {
    id: 4,
    name: '四季春茶',
    description: '香醇四季春茶，回甘無比',
    price: 45,
    stock: 10,
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    description: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
    stock: 25,
  },
  {
    id: 6,
    name: '檸檬冰茶',
    description: '檸檬與冰茶的清新組合',
    price: 45,
    stock: 20,
  },
  {
    id: 7,
    name: '芒果綠茶',
    description: '芒果與綠茶的獨特風味',
    price: 55,
    stock: 18,
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    description: '抹茶與鮮奶的絕配',
    price: 60,
    stock: 20,
  },
];

function Week1Table() {
  const [stock, setStock] = useState(data);
  const [editingId, setEditingId] = useState(null);

  // 庫存數量修改
  const handleStockChange = (id, change) => {
    setStock(
      stock.map((item) =>
        item.id === id
          ? { ...item, stock: Math.max(0, item.stock + change) }
          : item
      )
    );
  };

  // 編輯按鈕
  const handleEdit = (id) => {
    setEditingId(id === editingId ? null : id);
  };

  // 處理品項和描述的修改
  const handleItemChange = (id, field, value) => {
    setStock(
      stock.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">品項</th>
          <th scope="col">描述</th>
          <th scope="col">價格</th>
          <th scope="col">庫存</th>
        </tr>
      </thead>
      <tbody>
        {stock.map((item) => (
          <tr key={item.id}>
            <td>
              {editingId === item.id ? (
                <input
                  value={item.name}
                  onChange={(e) => handleItemChange(item.id, 'name', e.target.value)}
                />
              ) : (
                item.name
              )}
            </td>
            <td>
              {editingId === item.id ? (
                <input
                  value={item.description}
                  onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                />
              ) : (
                <small>{item.description}</small>
              )}
            </td>
            <td>{item.price}</td>
            <td>
              {editingId === item.id && (
                <>
                  <button 
                    onClick={() => handleStockChange(item.id, -1)}
                    disabled={item.stock === 0}
                  >
                    -
                  </button>
                  {item.stock}
                  <button onClick={() => handleStockChange(item.id, 1)}>+</button>
                </>
              )}
              {editingId !== item.id && item.stock}
            </td>
            <td>
              <button onClick={() => handleEdit(item.id)}>
                {editingId === item.id ? '完成' : '編輯'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Week1Table;
