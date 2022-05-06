import { useRecoilState } from 'recoil'
import CounterAtom from '../../atoms/CounterAtom'

const Counter = () => {
	const [value, setValue] = useRecoilState<number>(CounterAtom)

	return (
		<div className="counter">
			<p> The value is: {value}. </p>
			<p>
				<button onClick={() => setValue(value + 1)}> +1 </button>
				<button onClick={() => setValue(value - 1)}> -1 </button>
			</p>
		</div>
	)
}

export default Counter
