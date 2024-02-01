import React from "react";

export const HomeView = () => {
	const [count, setCount ] = React.useState<number>(0);

	return (
		<React.Fragment>
			<h1>Fick dich!</h1>
			<p>Anzahl: { count }</p>
			<button onClick={ (): void => setCount(count + 1) }>Klick</button>
		</React.Fragment>
	)
}
