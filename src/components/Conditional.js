import React from 'react'

function Conditional(props) {

    

    return (
        <div>
            { !props.isLoggedIN ? <p> Logged out  </p>: <p>Logged in </p> }
             </div>
    )
}

export default Conditional;