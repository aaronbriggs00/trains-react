import React, { useEffect, useState } from 'react';
import Row from './row.js';
import './table.css';
import axios from 'axios';


export default function Table() {
    const [data, setData] = useState({ runs: [] });
    const [queryParameters, setQueryParameters] = useState({ sort: "run_number", order: "asc", page: 1 })

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios(
                'http://localhost:3000/api/runs',
            );
            setData(response.data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios(
                `http://localhost:3000/api/runs?sort=${queryParameters.sort}&order=${queryParameters.order}&page=${queryParameters.page}`,
            );
            setData(response.data);
        };

        fetchData();
    }, [queryParameters])


    function incrementPage(num) {
        setQueryParameters({
            sort: queryParameters.sort,
            order: queryParameters.order,
            page: queryParameters.page + num
        })

    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Train Line</th>
                        <th>Route</th>
                        <th>Run Number</th>
                        <th>Operator ID</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.runs.map((item, index) => (
                        <Row key={index} data={item}/>
                    ))}
                </tbody>
            </table>
            <div className='paginationContainer'>
                { (queryParameters.page > 1 && <button onClick={() => incrementPage(-1)}> prev </button>) || <div></div>}
                <h3>{queryParameters.page}</h3>
                { (data.runs.length === 5 && <button onClick={() => incrementPage(1)}> next </button>) || <div></div> }
            </div>    
        </div>
    );
  }