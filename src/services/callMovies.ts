export default async function (search: String) {
	const apiKey = "31dda70";

	try {
		const url = `https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${search}`;
		const res = await fetch(url);
		const json = await res.json();

		const movies = await json.Search;
		if (movies === undefined) return [];

		return movies?.map((movie: any) => ({
			title: movie.Title,
			year: movie.Year,
			id: movie.imdbID,
			type: movie.Type,
			img: movie.Poster,
		}));
	} catch (error) {
		throw new Error(`Error Searching Movies ${error}`);
	}
}
