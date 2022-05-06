import { atom, RecoilState } from 'recoil'

const CounterAtom: RecoilState<number> = atom({
	key: 'bacon',  // any unique string
	default: 1   // this can also be an object with several values
})

export default CounterAtom
