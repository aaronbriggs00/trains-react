import React, { useState, useEffect, useRef } from 'react'
import './Create.css';
import Form from '../components/form.js'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Create() {
  const [data, setData] = useState({
    line: "",
    route: "",
    runNumber: "",
    operatorId: ""
  })
  const [initialRender, setInitialRender] = useState(0)
  const navigate = useNavigate();

  function handleSubmit(state = {}) {
    setData({
      line: state.line,
      route: state.route,
      runNumber: state.runNumber,
      operatorId: state.operatorId
    })
  }

  useEffect(() => {
    if (initialRender < 1) {
      setInitialRender(1)
    } else {
      const run = {
        line: data.line,
        route: data.route,
        run_number: data.runNumber,
        operator_id: data.operatorId
      }

      axios.post(`http://localhost:3000/api/runs`, run)
      .then(response => {
        console.log(response);
        navigate('/runs')
      });
    }
  }, [data.line, data.route, data.runNumber, data.operatorId]);

  return (
    <div className="Create">
      <h1>CREATE</h1>
      <p>
        click <Link className='Runs-link' to="/runs">here</Link> to return to the index.
      </p>
      <Form handleSubmit={handleSubmit}/>
    </div>
  )
}