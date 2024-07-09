import React from 'react'
import { Link } from 'react-router-dom'

export default function RoomNo2() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>What do you want to do here :</h1>
                    <Link to='/dress' className='btn btn-success m-2'>Fold Dress</Link>
                    <Link to='/playing-guitar' className='btn btn-danger m-2'>Play Guitar</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h1>Want to go in room 3?</h1>
                    <Link to='/room-3' className='btn btn-primary m-2'>room 3</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h1>Want to go back in room 1 ?</h1>
                    <Link to='/room-1' className='btn btn-secondary m-2'>Room 1</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
