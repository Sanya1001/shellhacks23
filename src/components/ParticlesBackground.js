import Particles from 'react-tsparticles'
import particlesBg from './config/particles.config'

const ParticlesBackground = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <Particles params={particlesBg} />
    </div>

  )
}

export default ParticlesBackground;


