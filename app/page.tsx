import Footer from '@/Components/Footer'
import GetStartedSection1 from '@/Components/GetStartedSection1'
import GetStartedSection2 from '@/Components/GetStartedSection2'
import GetStartedSection3 from '@/Components/GetStartedSection3'
import GetStartedSection4 from '@/Components/GetStartedSection4'
import React from 'react'

const page = () => {
  return (
    <div>
      <GetStartedSection1/>
      <GetStartedSection2/>
      <GetStartedSection3/>
      <GetStartedSection4/>
      <Footer/>
    </div>
  )
}

export default page