import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
     <div className='bg-danger p-5'>
      <div className='container'>
        <div className="row">
            <div className="col-md-12">
                <h1 className='color-primary mb-3 '>welcome to my home</h1>
              <h3>Select</h3> 
              <Link to='/room-1' className="btn btn-warning mt-3">Room 1</Link>
            </div>
        </div>
      </div>
      </div>
    )
}
