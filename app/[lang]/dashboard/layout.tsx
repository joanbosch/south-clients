'use client'

import Providers from '../../../components/Providers'
import Headers from '../../../components/Headers'
import React from 'react'
import Footer from '@/components/Footer';

export default function Layout ({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Providers>
        <Headers />
        {children}
        <Footer />
      </Providers>
    </>
  )
}
