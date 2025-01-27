import React, { Fragment } from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
`

const Footer = styled.footer`
  font-size: 20px;
  color: white;
  padding: 30px 100px;
  text-align: right;
  width: 100vw;
  border-top: 1px solid #b78883;
  display: flex;
  justify-content: space-between;
`

const Layout = ({ children }) => (
  <Fragment>
    <Wrapper>{children}</Wrapper>
    <Footer>
      <span>ServelessDays Milano</span>
      <span >@FarminFarzin</span>
    </Footer>
  </Fragment>
)

export default Layout