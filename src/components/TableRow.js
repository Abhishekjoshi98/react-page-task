import timage from '../assets/img.jpeg';
const TableRow = (props) =>{
    const styling = {
        backgroundColor : `${props.color}`,
    }
    return (
       
        <tr>
        <td>
          <img src={timage} className='timage' alt='tab-img'/>
          
        </td>
        <td>
          <h3>Abhishek joshi</h3>
        </td>
        <td></td>
        <td>01-01-2000</td>
        <td>$2000</td>
        <td>$10000</td>
        {
          props.status === 'Bank Processed'?<td>{props.status}</td>:<td>Bank Processing</td>
        }
        
        <td><button className='tb-status' style={styling} ></button></td>
      </tr>
    )
}
export default TableRow;