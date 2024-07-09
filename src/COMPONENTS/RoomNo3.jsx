import React from 'react'
import { Link } from 'react-router-dom'
export default function RoomNo3() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>What do you want to do here :</h1>
                    <Link to='/break-fast' className='btn btn-secondary m-2'>Break fast</Link>
                    <Link to='/lunch' className='btn btn-secondary m-2'>Lunch</Link>
                    <Link to='/dinner' className='btn btn-secondary m-2'>Dinner</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h1>Want to go in Garden?</h1>
                    <Link to='/garden' className='btn btn-secondary m-2'>Garden</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h1>Want to go back in room 2 ?</h1>
                    <Link to='/room-2' className='btn btn-secondary m-2'>Room 2</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
