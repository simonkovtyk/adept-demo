import React from "react";
import { TestModel } from "../../models/test/test.model.tsx";

export const HomeView = () => {
	const [ count, setCount ] = React.useState<number>(0);
	const [ displayTestModel, setDisplayTestModel ] = React.useState<number>(0);
	const refH1: React.MutableRefObject<null | HTMLHeadingElement> = React.useRef(null);

	React.useEffect((): () => void => {
		setTimeout((): void => {
			setDisplayTestModel(1);
		}, 5000);

		if (count > 10) {
			refH1.current!.style.backgroundColor = "#000000";
		}

		return (): void => {
			console.log("Component destroyed");
		}
	}, [count]);

	return (
		<React.Fragment>
			<h1 ref={ refH1 }>Fick dich!</h1>
			<p>Anzahl: { count }</p>
			<button onClick={ (): void => setCount(count + 1) }>Klick</button>
			{ displayTestModel === 0 && <TestModel /> }
		</React.Fragment>
	)
}
