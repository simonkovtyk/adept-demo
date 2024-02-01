const obj = {
	name: "Jim",
	age: 18
}

export function getName(): string {
	const { name } = obj;

	return name;
}
