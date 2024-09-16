import { useState } from 'react';

const data = [
  {
    id: 1,
    name: '購買雜物',
    date: '2024-05-01',
    isDone: true,
  },
  {
    id: 2,
    name: '完成報告',
    date: '2024-08-01',
    isDone: false,
  },
  {
    id: 3,
    name: '清理房間',
    date: '2024-07-25',
    isDone: true,
  },
  {
    id: 4,
    name: '計畫假期',
    date: '2024-07-01',
    isDone: false,
  },
  {
    id: 5,
    name: '處理稅務',
    date: '2024-08-10',
    isDone: false,
  },
];

function DataTable() {
  const [todo, setTodo] = useState(data);

  return (
    <div>
      DataTable
      <hr />
      <table>
        <thead>
          <tr>
            <th>代辦事項名稱</th>
            <th>到期日</th>
            <th>是否已完成</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {/* 五筆資料 */}
          {todo.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.isDone ? '是' : '否'}</td>
                <td>
                <button onClick={() => {
                  // const newTodo = [...todo];
                  // newTodo[item.id - 1].isDone = !newTodo[item.id - 1].isDone
                  // console.log(newTodo)
                  const newTodo = todo.map((newTodo) => {
                    if (newTodo.id === item.id) {
                      newTodo.isDone = !newTodo.isDone;
                    }
                    return newTodo;
                  })
                  console.log(newTodo)
                  // setTodo 要寫入完整的值
                  setTodo(newTodo);
                }}>狀態切換</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
