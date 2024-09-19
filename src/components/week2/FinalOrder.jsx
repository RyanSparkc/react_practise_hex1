import PropTypes from 'prop-types';

function FinalOrder({ order }) {
  return (
    <>
      {order.items.length === 0 ? (
        <div className="alert alert-secondary text-center" role="alert">
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
    </>
  );
}

export default FinalOrder;

FinalOrder.propTypes = {
  order: PropTypes.object.isRequired,
};