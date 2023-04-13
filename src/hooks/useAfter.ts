import { useState } from "react";

export function useAfter<T>(value: T, ms: number) {
	const [state, setState] = useState<T | null>(null);
	setTimeout(() => {
		setState(value);
	}, ms);

	return state;
}
