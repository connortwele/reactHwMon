import React from 'react';
import Rainbow from '../hoc/Rainbow'

const About =()=>{
    return(
        <div className="container">
            <h4 className="center">About Page</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id massa ac nisl laoreet viverra. Nam ultrices enim finibus dui.</p>
        </div>
    )
}

export default Rainbow(About);