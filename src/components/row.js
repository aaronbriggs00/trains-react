import './row.css';
import { Link } from 'react-router-dom'

export default function Row({data}) {
    return (
        <tr>
            <td>{data.line}</td>
            <td>{data.route}</td>
            <td>{data.run_number}</td>
            <td>{data.operator_id}</td>
            <td id='edit'><Link className='Runs-link' to={`/runs/${data.id}`}>Edit</Link></td>
        </tr>
    ); 
  }

