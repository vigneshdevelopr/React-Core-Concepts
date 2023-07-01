import React from 'react'
import {Button} from '@mui/material'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Home = () => {
    const history = useHistory();
  return (
    <div className='content'>
        <h1>
            CONTEXT API : <span><Button onClick={()=>history.push('/context')} color='warning' variant='contained'>Go</Button></span>
        </h1>
        <h1>
            useReducer : <span><Button color='warning' onClick={()=>history.push('/usereducer')} variant='contained'>Go</Button></span>
        </h1>
        <h1>
            Redux : <span><Button color='warning' variant='contained'>Go</Button></span>
        </h1>
        <h1>
            CONTEXT API : <span><Button color='warning' variant='contained'>Go</Button></span>
        </h1>
        
    </div>
  )
}

export default Home