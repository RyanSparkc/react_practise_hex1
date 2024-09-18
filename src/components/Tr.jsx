import PropTypes from 'prop-types';

function Tr({ item, setData, data, handleEdit }) {
  return (
    <tr key={item.id}>
      {item.editing ? (
        <>
          <td>
            <input
              type="text"
              value={item.name}
              onChange={(e) =>
                setData(
                  data.map((dataItem) =>
                    dataItem.id === item.id
                      ? { ...dataItem, name: e.target.value }
                      : dataItem
                  )
                )
              }
            />
          </td>
          <td>
            <input
              type="number"
              value={item.price}
              onChange={(e) =>
                setData(
                  data.map((dataItem) =>
                    dataItem.id === item.id
                      ? { ...dataItem, price: Number(e.target.value) }
                      : dataItem
                  )
                )
              }
            />
          </td>
          <td>
            <button
              onClick={() =>
                setData(
                  data.map((dataItem) =>
                    dataItem.id === item.id
                      ? { ...dataItem, editing: false }
                      : dataItem
                  )
                )
              }
            >
              儲存
            </button>
          </td>
        </>
      ) : (
        <>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>
            <button onClick={() => handleEdit(item.id)}>修改</button>
          </td>
        </>
      )}
    </tr>
  );
}

Tr.propTypes = {
  item: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default Tr;
