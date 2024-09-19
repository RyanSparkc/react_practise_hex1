import PropTypes from 'prop-types';

function ProductList({data, handleAddToCart}) {
  return (
    <>
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
    </>
  );
}

export default ProductList;

ProductList.propTypes = {
  data: PropTypes.array.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};