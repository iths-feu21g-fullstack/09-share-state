import { useState, createContext } from 'react'
import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import ThemeContext from './contexts/ThemeContext'

function App() {
	// state: tema-variabel
	// använder Context för att skicka värdet ner till komponenter som använder den
	const [theme, setTheme] = useState<string>('light')

	return (
		<div className="app">
			<ThemeContext.Provider value={theme}>
				<Header />
			</ThemeContext.Provider>
			<Main />
		</div>
	)
}

export default App
