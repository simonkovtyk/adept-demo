import React from "react";
import "./test.model.css";

export const TestModel = (): React.ReactElement => {
	React.useEffect((): () => void => {
		return (): void => {
			console.log("Dieser Component wurde zerstört.");
		}
	})

	return (
		<h1>Dieser Component wird zerstört</h1>
	);
}
