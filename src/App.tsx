import { useState, createContext } from 'react'
import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import ThemeContext, { Theme } from './contexts/ThemeContext'

function App() {
	// state: tema-variabel
	// använder Context för att skicka värdet ner till komponenter som använder den
	const [theme, setTheme] = useState<string>('light')
	const themeObject: Theme = {
		theme: theme,
		toggleTheme: () => {
			if( theme === 'light' ) {
				setTheme('dark')
			} else {
				setTheme('light')
			}
		}
	}

	return (
		<div className={"app " + theme}>
			<ThemeContext.Provider value={themeObject}>
				<Header />
			</ThemeContext.Provider>
			<Main />
		</div>
	)
}

export default App
