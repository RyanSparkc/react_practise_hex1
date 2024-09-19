import PropTypes from 'prop-types';

function CurrentOrder({ cart, total, note, setNote, handleRemove, handleQuantityChange, handleSubmit }) {
  return (
    <>
      {cart.length === 0 ? (
        <div className="alert alert-primary text-center" role="alert">
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
    </>
  );
}

export default CurrentOrder;

CurrentOrder.propTypes = {
  cart: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  note: PropTypes.string.isRequired,
  setNote: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleQuantityChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};