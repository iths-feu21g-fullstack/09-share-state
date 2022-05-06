import { createContext } from 'react'

export interface Theme {
	theme: string;
	toggleTheme: ()=> void;
}

const ThemeContext = createContext<Theme>({
	theme: 'light',
	toggleTheme: () => {}
})



export default ThemeContext
