import React, {useState} from 'react';

export default function Form(props) {
    const [state, setState] = useState({
        line: props.line,
        route: props.route,
        runNumber: props.runNumber,
        operatorId: props.operatorId
      })

    function handleChange(event) {
        const value = event.target.value;
        const id = event.target.id;
        setState(prevState => {
            return {
            ...prevState,
            [id]: value
            }
        })
    }

    return (
        <div>
            <label>Line : </label>
            <input
                id="line"
                value={state.line}
                onChange={handleChange} />
            <label>Route : </label>
            <input
                id="route"
                value={state.route}
                onChange={handleChange} />
            <label>Run Number : </label>
            <input
                id="runNumber"
                value={state.runNumber}
                onChange={handleChange} />
            <label>Operator ID : </label>
            <input
                id="operatorId"
                value={state.operatorId}
                onChange={handleChange} />
            <button onClick={() => props.handleSubmit(state)}>submit</button>
        </div>
    )
}