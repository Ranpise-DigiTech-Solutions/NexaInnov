import FooterComponent from '@/components/global/footer'
import NavbarComponent from '@/components/global/navbar'
import React from 'react'

type Props = {
    children: React.ReactNode;
}

const ContactLayout = ({ children }: Props) => {
  return (
    <div>
        <NavbarComponent />
        {children}
        <FooterComponent />
    </div>
  )
}

export default ContactLayout