import { ReactNode } from 'react'
import Body from './body/Body'
import Header from './header/Header'

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
    </>
  )
}

export default Layout
