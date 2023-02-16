import { IMovies } from "./../interfaces/movies";
import { useState } from "react";
import callMovies from "../services/callMovies";

export default function useFormMovies() {
	const [movies, setMovies] = useState<IMovies[]>([]);
	const [error, setError] = useState<String | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [oldSearch, setOldSearch] = useState<String>("");

	const getMovies = async (search: string) => {
		//*void duplicate search the same time
		if (!searchValidation(search)) return null;
		try {
			setLoading(true);
			setError(null);
			const res = await callMovies(search);
			if (res.length === 0) {
				setError(`No movies found for "${search}"`);
				setMovies([]);
			}
			setMovies(res)
		} catch (e) {
			setError("error when searching movies");
		} finally {
			setLoading(false);
		}
	};

	
/**
 * If the search is the same as the old search, return false. Otherwise, set the old search to the new
 * search and return true
 */
	const searchValidation = (search: string) => {
		if (search === oldSearch) return false;
		setTimeout(() => {
			setOldSearch("");
		}, 5000);

		setOldSearch(search);
		return true;
	};

	return { movies, getMovies, error, loading };
}
