import "./filter.css";
import DropMenuFilter from '../../layout/dropMenuFilter'
export default function filter() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <p>Size</p>
            <DropMenuFilter />
            </td>
            <td>
              <p>Color</p>
            <DropMenuFilter />
            </td>
            <td>
              <p>Price</p>
            <DropMenuFilter />
            </td>
            <td>
              <button type="button" id="filter">Filter</button>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
