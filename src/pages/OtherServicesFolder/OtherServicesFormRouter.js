import React from 'react'
import {  useNavigate } from 'react-router-dom'

const OtherServicesFormRouter = ({item}) => {
    const Navigate = useNavigate()
  return (
    <div>
      <div className="container-bg-1 ps-9 pt-8 pb-8 rounded-3">
          <h6 className="fg-default-1 pb-5 pt-4 border-bottom container-border-3 me-10">
            Other Services
          </h6>
          {item.map((items,index)=>{
            return<div key={index} >
            <div className="pb-4 body-lg fg-default-1">
                <p style={{cursor:"pointer"}} onClick={()=>Navigate(`${items.rou}`)}>{items.name}</p>
          </div>
          
            </div>
          })}
          
        </div>
    </div>
  )
}

export default OtherServicesFormRouter
