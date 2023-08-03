import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {

    const [user,setUser] = useState({
        name:"",
        username:"",
        email:""
    })

    const {id} = useParams();

    useEffect(() => {
        loadUser()
      }, [])

    const loadUser = async(e) =>{
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-2'>User Details</h2>
                    
                    <div className='card'>
                        <div className='card-header'>
                            Details of user id: {user.id}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'> 
                                    <b>Name: {user.name}</b>
                                </li>
                                <li className='list-group-item'> 
                                    <b>Username: {user.username}</b>
                                </li>
                                <li className='list-group-item'> 
                                    <b>E-mail: {user.email}</b>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Link className='btn btn-primary my-2' to={"/"}>Back To Home</Link>
            </div>
        </div>
    </div>
  )
}
