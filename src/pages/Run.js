import React, { useState, useEffect } from 'react'
import './Run.css';
import Form from '../components/form.js'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Run() {
  let { id } = useParams()
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

  function handleDelete() {
    axios.delete(`https://peaceful-river-89424.herokuapp.com/api/runs/${id}`)
      .then(response => {
        navigate('/runs');
      });
  }

  useEffect(() => {
    const fetchData = async () => {
        const response = await axios(
            `https://peaceful-river-89424.herokuapp.com/api/runs/${id}`,
        );
        const run = response.data.run
        setData({
          line: run.line,
          route: run.route,
          runNumber: run.run_number,
          operatorId: run.operator_id
        });
    };

    fetchData();
}, []);

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

      axios.patch(`https://peaceful-river-89424.herokuapp.com/api/runs/${id}`, run)
      .then(response => {
        console.log(response);
      });
    }
  }, [data.line, data.route, data.runNumber, data.operatorId]);

  return (
    <div className="Run">
      <h1>Edit</h1>
      <p>
        click <Link className='Runs-link' to="/runs">here</Link> to return to the index.
      </p>
      <Form key={data.line} line={data.line} route={data.route} runNumber={data.runNumber} operatorId={data.operatorId} handleSubmit={handleSubmit}/>
      <button className="Runs-deleteButton" onClick={() => handleDelete()}>delete</button>
    </div>
  )
}