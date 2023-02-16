import FormMovies from "./FormMovies";
import useFormMovies from "../hooks/useFormMovies";
import ListMovies from "./ListMovies";
import LoadingMovies from "./LoadingMovies";

export default function Movies() {
	const { movies, getMovies, error, loading } = useFormMovies();

	const getListMovies = (search: string) => {
		getMovies(search);
	};

	const viewTrailer = (titleMovie: string, year: string) => {
		const url = `https://youtube.com/results?search_query=trailer+${titleMovie}+${year}`;
		window.open(url, "_blank");
	};

	return (
		<>
			<header style={styles.header}>
				<FormMovies getListMovies={getListMovies} />

				{error ? (
					<h3 style={{ color: "red", marginTop: 35 }}>{error}</h3>
				) : null}
			</header>
			<main>
				{loading ? (
					<LoadingMovies />
				) : (
					<ListMovies
						movies={movies}
						viewTrailer={viewTrailer}
					/>
				)}
			</main>
		</>
	);
}

const styles = {
	header: {
		display: "grid",
		placeItems: "center",
		minWidth: "100%",
		marginTop: 80,
	},
};
