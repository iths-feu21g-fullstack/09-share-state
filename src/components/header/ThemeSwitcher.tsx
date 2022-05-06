import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

const ThemeSwitcher = () => {
	const theme: string = useContext(ThemeContext)

	return (
		<div>
			<p>
				You have {theme} theme.
				<button> Switch theme </button>
			</p>
		</div>
	)
}

export default ThemeSwitcher