import { useState, useEffect } from 'react';
import ProductList from './components/week2/ProductList';
import CurrentOrder from './components/week2/CurrentOrder';
import FinalOrder from './components/week2/FinalOrder';

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
              <ProductList data={data} handleAddToCart={handleAddToCart} />
            </div>

            {/* Cart Table */}
            <div className="col-md-8">
              <CurrentOrder cart={cart} total={total} note={note} setNote={setNote} handleRemove={handleRemove} handleQuantityChange={handleQuantityChange} handleSubmit={handleSubmit} />
            </div>
          </div>

          {/* Order Summary */}
          <hr />

          <div className="row justify-content-center">
            <div className="col-8">
              <FinalOrder order={order} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Week2Table;
