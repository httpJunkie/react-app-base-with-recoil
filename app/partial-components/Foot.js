// import React, { useContext } from 'react'
import React from 'react'
// import { AppContext } from '../context/AppContext'
import { Column, Row } from 'simple-flexbox'
import { Switch } from '@progress/kendo-react-inputs'

// import lightImage from '../public/images/kendokaImage_light.png'
// import darkImage from '../public/images/kendokaImage_dark.png'

import { useRecoilState } from 'recoil'
import { themeRecoil } from '../context/AppAtoms'

const Foot = () => {
  // const context = useContext(AppContext)
  const [theme, changeTheme] = useRecoilState(themeRecoil)
  const isLight = theme === 'light'
  const dateString = new Date().getFullYear()

  const handleThemeSwitch = () => {
    changeTheme(isLight ? 'dark' : 'light')
  }

  return (
    <Row>
      <Column flexGrow={1} >
        <span className='foot-info'>
          httpJunkie {dateString} | &nbsp; <Switch onChange={handleThemeSwitch} checked={isLight} onLabel={'light theme'} offLabel={'dark theme'} />
        </span>
      </Column>
    </Row>
  )
}

export default Foot
