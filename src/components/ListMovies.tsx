import { IMovies } from "../interfaces/movies";
interface ListMoviesProps {
	movies: IMovies[];
	viewTrailer: (titleMovie: string, year: string) => void;
}

export default function ListMovies({ movies, viewTrailer }: ListMoviesProps) {

	return (
		<ul
			className="image"
			style={styles.ul}
		>
			{movies?.map((movie) =>
				movie.img !== "N/A" ? (
					<li
						style={styles.li}
						key={movie.id}
					>
						<h3>{movie.title}</h3>
						<p>{movie.year}</p>
						<img
							onClick={() => {
								viewTrailer(movie.title, movie.year);
							}}
							style={styles.img}
							src={movie.img}
							alt={movie.title}
						/>
					</li>
				) : (
					""
				)
			)}
		</ul>
	);
}

const styles = {
	ul: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
		gap: 2,
		listStyle: "none",
		textAlign: "center" as "center",
		"&:hover": {
			background: "blue",
		},
	},
	li: {
		marginTop: 15,
		padding: 5,
	},

	img: {
		height: 430,
		width: 290,
		cursor: "pointer",
	},
};
