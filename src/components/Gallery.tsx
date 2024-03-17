import styled from 'styled-components'
import { motion } from 'framer-motion'

const ContactBanner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(http://img.yellowsea.site/acg/Hotaru_64495434.png);
  height: 100vh;
  min-width: 100%;
  margin: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: #fff;
  overflow: hidden;
`

export default function Gallery() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200, y: 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, type: 'linear' }}
      exit={{ opacity: 0, width: window.innerWidth }}
    >
      <ContactBanner />
    </motion.div>
  )
}
