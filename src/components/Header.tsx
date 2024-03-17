import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { motion, useScroll, useSpring } from 'framer-motion'

const NavBar = styled.div`
  min-height: 80px;
  background-color: #222831;
  color: #fff;
  font-size: 1.2em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  postion: sticky;
  top: 0;
`

const NavRoute = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    letter-spacing: 2px;
  }
  a.active {
    text-decoration: underline;
  }
  img {
    width: 40px;
    marign-right: 10px;
  }
`

// 定义进度条
const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: #fff;
  transform-origin: 0%;
  z-index: 9999;
`

function Header() {
  // 获取滚动条高度  scrollYProgress
  const { scrollYProgress } = useScroll()

  // useSpring - 动画
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
  })

  return (
    <>
      <NavBar>
        <NavRoute>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Contact
          </NavLink>
        </NavRoute>
      </NavBar>
      {/* 写上进度条的样式 */}
      <ProgressBar style={{ scaleX }} />
    </>
  )
}

export default Header
