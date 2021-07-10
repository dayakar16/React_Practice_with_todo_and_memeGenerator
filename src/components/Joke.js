import React from 'react';

const Joke = (props) => {
    console.log(props)
    
    return ( 
            <div>
                 <p style= {{display: props.question ? "block" : "none"}}>{props.question}</p>
                 <p>{props.punchline}</p>
            </div>     
     );
}
 
export default Joke;