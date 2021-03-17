import { ReactNode } from 'react'
import Body from './body/Body'
import Footer from './footer/Footer'
import Header from './header/Header'

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </>
  )
}

export default Layout
