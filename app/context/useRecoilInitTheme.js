import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useMediaPredicate } from 'react-media-hook'

import { themeRecoil } from './AppAtoms'

export function useRecoilInitTheme() {
  const [theme, setTheme] = useRecoilState(themeRecoil)
  const preferredTheme = useMediaPredicate('(prefers-color-scheme: dark)') ? 'dark' : 'light'

  useEffect(() => {
    setTheme(localStorage.getItem('spaceXLaunchApp_theme') || preferredTheme)
    }, []
  )

  useEffect(() => {
    localStorage.setItem('spaceXLaunchApp_theme', theme)
    }, [theme]
  )

  return { theme, preferredTheme}
}