import Data from "./Data";

function App() {
  return (
    <>
      <table>
        <th>
          <tr>
            <td> Id </td>
            <td> Name </td>
            <td> UnitPrice </td>
            <td> UnitsInStock </td>
          </tr>
        </th>
      </table>
      {Data.map((item) => {
        return (
          <tr>
            <td> {item.id} </td>
            <td> {item.name} </td>
            <td> {item.unitPrice} </td>
            <td> {item.unitsInStock} </td>
          </tr>
        );
      })}
    </>
  );
}

export default App;
