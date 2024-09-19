import { useState, useEffect } from 'react';

const data = [
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

function Week2Table() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [note, setNote] = useState('');
  const [order, setOrder] = useState({ items: [], total: 0, note: '' });

  const handleAddToCart = (drink) => {
    setCart(prevCart => {
      const existingDrink = prevCart.find(item => item.id === drink.id);
      if (existingDrink) {
        return prevCart.map(item =>
          item.id === drink.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...drink, quantity: 1 }];
      }
    });
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: Number(newQuantity) } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const handleSubmit = () => {
    if (cart.length === 0) {
      alert('購物車是空的!');
      return;
    }

    const orderDetails = {
      items: cart.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        totals: item.price * item.quantity,
      })),
      total: total,
      note: note,
    };
    
    setOrder(orderDetails);
    setCart([]);
    setNote('');
  };

  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [cart]);

  return (
    <div>
      <div id="root">
        <div className="container mt-5">
          <div className="row">
            {/* Drink List */}
            <div className="col-md-4">
              <div className="list-group">
                {data.map((drink) => (
                  <a
                    key={drink.id}
                    href="#"
                    className="list-group-item list-group-item-action"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(drink);
                    }}
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{drink.name}</h5>
                      <small>${drink.price}</small>
                    </div>
                    <p className="mb-1">{drink.description}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Cart Table */}
            <div className="col-md-8">
              {cart.length === 0 ? (
                <div
                  className="alert alert-primary text-center"
                  role="alert"
                >
                  請選擇商品
                </div>
              ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" width="50">
                      操作
                    </th>
                    <th scope="col">品項</th>
                    <th scope="col">描述</th>
                    <th scope="col" width="90">
                      數量
                    </th>
                    <th scope="col">單價</th>
                    <th scope="col">小計</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((drink) => (
                    <tr key={drink.id}>
                      <td>
                        <button
                          type="button"
                          className="btn btn-sm btn-danger"
                          onClick={() => handleRemove(drink.id)}
                        >
                          x
                        </button>
                      </td>
                      <td>{drink.name}</td>
                      <td>
                        <small>{drink.description}</small>
                      </td>
                      <td>
                        <select
                          className="form-select"
                          value={drink.quantity}
                          onChange={(e) =>
                            handleQuantityChange(drink.id, e.target.value)
                          }
                        >
                          {Array.from({ length: 10 }, (_, index) => (
                            <option key={index + 1} value={index + 1}>
                              {index + 1}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td>${drink.price}</td>
                      <td>${drink.price * drink.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              )}

              <div className="text-end mb-3">
                <h5>
                  總計: <span>${total}</span>
                </h5>
              </div>

              {/* Connect textarea to note state */}
              <textarea
                className="form-control mb-3"
                rows="3"
                placeholder="備註"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              ></textarea>
              <div className="text-end">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  送出
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <hr />

          <div className="row justify-content-center">
            <div className="col-8">
              {order.items.length === 0 ? (
                <div
                  className="alert alert-secondary text-center"
                  role="alert"
                >
                  尚未建立訂單
                </div>
              ) : (
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                      <h5>訂單</h5>
                    </div>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">品項</th>
                          <th scope="col">數量</th>
                          <th scope="col">小計</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.items.map((item, index) => (
                          <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>${item.totals}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="text-end">
                      備註: <span>{order.note}</span>
                    </div>
                    <div className="text-end">
                      <h5>
                        總計: <span>${order.total}</span>
                      </h5>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Week2Table;
