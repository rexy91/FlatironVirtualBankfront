// import React, { Component } from 'react'

import ParticlesBg from 'particles-bg'

// class Particles extends Component {
//   render () {
//     return (
//       <div>
//       <ParticlesBg type="circle" bg={true} />
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'

export class Particles extends Component {
    render() {
        return (
            <div>
            <ParticlesBg  type="cobweb" num={15} bg={true} />
            </div>
        )
    }
}

export default Particles
