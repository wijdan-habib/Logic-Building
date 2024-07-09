import React from 'react'
import { Link } from 'react-router-dom'

export default function RoomNo1() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-3">
                    <h1>What Do You Want to do here</h1>
                    <h3>Select:</h3>
                    <Link to='/watch' className='btn btn-primary m-2'>Watching TV</Link>
                    <Link to='/read' className='btn btn-success m-2'>Reading Books</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h1>Do you want to go in Room 2?</h1>
                    <Link to='/room-2' className='btn btn-secondary m-2'>Room 2</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h1>Do you want to go in main page?</h1>
                    <Link to='/' className='btn btn-secondary m-2'>Main Page</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
