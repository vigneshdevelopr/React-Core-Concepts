import { Button } from '@mui/material'
import React, { createContext, useContext, useState } from 'react'
const AddClient = createContext(null);

const ContextApi = () => {
  const[data, setData]=useState(0)
  const{id,name,email}=data;

//buttonfunction:
const btnfunction = () =>{
setData(data + 1)
console.log(data)
}



  return (
    <div>
<AddClient.Provider value={{data,setData}} >
{/* 
subscribers:  */}
<Client />
<TotalClients />
</AddClient.Provider>

<Button variant='contained' onClick={()=>btnfunction()}>Add Client</Button> 



    </div>
  )
}

export default ContextApi


function Client(){
  const{data, setData}=useContext(AddClient)
return(
  <h1>Client: {data}</h1>
)
}

function TotalClients(){
  const{data, setData}=useContext(AddClient)

  return(
    <h1>Total Number of Clients: {data}</h1>
  )
}

