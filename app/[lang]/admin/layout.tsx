'use client'

import Providers from '../../../components/Providers'
import HeadersAdmin from '../../../components/HeadersAdmin'
import React from 'react'
import Footer from '@/components/Footer'

export default function Layout ({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Providers>
        <HeadersAdmin />
        {children}
        <Footer />
      </Providers>
    </>
  )
}
