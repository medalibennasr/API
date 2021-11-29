import React from 'react'
import Usercard from '../Usercard/Usercard'

const Userlist = ({users}) => {
    return (
        <div style={{ display:'flex' , flexWrap:"wrap" , justifyContent:"space-between"}}>
            {
           users.map((user,i)=> <Usercard key={i} user={user} />)
            }
        </div>
    )
}

export default Userlist
