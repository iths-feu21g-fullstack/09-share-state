import { useContext } from 'react'
import ThemeContext, { Theme } from '../../contexts/ThemeContext'

const ThemeSwitcher = () => {
	const { theme, toggleTheme }: Theme = useContext(ThemeContext)

	return (
		<div>
			<p>
				You have {theme} theme.
				<button onClick={toggleTheme}> Switch theme </button>
			</p>
		</div>
	)
}

export default ThemeSwitcher