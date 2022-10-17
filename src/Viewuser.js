import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Viewuser() {
  const params=useParams()
  const [searchParams]=useSearchParams();
  useEffect(()=>{
    console.log(searchParams.get('status'))
  },[]);
  return (
    <div className='container'>
        <div className='row'>
          <h1>id: {params.id}</h1>
          <h2>id: {searchParams.get("status")}</h2>
          <div className='col-lg-6'>
            username : person 1
          </div>
          <div className='col-lg-6'>
            email : person1@gmail.com
          </div>
          <div className='col-lg-6'>
            country : india
          </div>
          <div className='col-lg-6'>
            state : tamilnadu
          </div>
          <div className='col-lg-6'>
            city : chennai 
          </div>
          <div className='col-lg-6'>
            phone : 9087654321
          </div>
          <div className='col-lg-6'>
            dob : 16-07-1999
          </div>
          <div className='col-lg-6'>
            gender : male
          </div>
        </div>
    </div>
  )
}

export default Viewuser