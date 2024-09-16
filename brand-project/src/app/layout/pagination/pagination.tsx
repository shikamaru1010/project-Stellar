import 'bootstrap/dist/css/bootstrap.min.css';
import { paginationData } from '../../api/paginationData';
import { useState } from 'react';
import './pagination.css'

export default function Pagination() {
    const [currentPage,setCurrentPage] = useState(1);

    const itemsPerPage = 10;
    const totalPages = Math.ceil(paginationData.length / itemsPerPage);
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = paginationData.slice(indexOfFirstItem, indexOfLastItem);
    const numbers = [...Array(totalPages+1).keys()].slice();
    
    const handlePageChange = (pageNumber: number) =>{
        if(pageNumber>0 && pageNumber<=totalPages){
            setCurrentPage(pageNumber);
        }
    };
  return (
    <div>
        <table>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </tbody>
            <tbody>
                {currentItems.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div>
        {/* Previous button */}
        {currentPage > 1 && (
          <button style={{marginRight: '1rem'}}
            className="btn btn-secondary"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
        )}

        {/* Current page indicator */}
        <button className="btn btn-primary" disabled>
          {currentPage}
        </button>

        {/* Next button */}
        {currentPage < totalPages && (
          <button style={{marginLeft: '1rem'}}
            className="btn btn-secondary"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  )
}
