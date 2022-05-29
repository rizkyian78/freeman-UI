import React from 'react'
import Content from '@nexys/components/Content/Content'
import ContentAboutMe from 'views/Home/partials/ContentAboutMe'
import ContentOurService from 'views/Home/partials/ContentOurService'
import ContentContactUs from 'views/Home/partials/ContentContactUs'
import WhatWillLearn from 'views/Home/partials/WhatWillLearn'
import useDataWhatWilllearns from 'views/Home/partials/useDataWhatWillLearns'

const styleContent = {
  paddingTop: 50,
  paddingBottom: 50,
}

export interface ExampleDir {
  directory: string
  totalFiles: number
}

interface HomeProps {
  exampleDirs: ExampleDir[]
}

function Home(props: HomeProps) {
  const { exampleDirs } = props
  const listWhatWillLearns = useDataWhatWilllearns(exampleDirs)

  return (
    <div>
      <Content style={{ ...styleContent }}>
        <ContentAboutMe />
        <ContentOurService />
        <ContentContactUs />
      </Content>

      <Content
        id={'whatWillLearn'}
        style={{
          ...styleContent,
        }}
      >
      </Content>
    </div>
  )
}

export default Home
