import React from 'react'
import Table from '../components/table.js'
import './Runs.css';
import { Link } from 'react-router-dom'

export default function Runs() {
  return (
    <div className="Runs">
      <p>
        click <Link className='Runs-link' to="/runs/new">here</Link> to create a new train run.
      </p>
      <Table />
    </div>
  )
}