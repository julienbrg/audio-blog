import * as React from 'react'
import { Text, Button, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { Head } from '../components/layout/Head'
import { SITE_NAME, SITE_DESCRIPTION } from '../utils/config'

export default function Home() {
  return (
    <>
      <Head title={SITE_NAME} description={SITE_DESCRIPTION} />
      <main></main>
    </>
  )
}
