import React, { useRef, useState } from "react";

interface FormMoviesProps {
	getListMovies: (search: string) => void;
}
export default function FormMovies({ getListMovies }: FormMoviesProps) {
	const [search, setSearch] = useState<string>("");
	const searchRef = useRef<HTMLInputElement>(null!);

	const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(target.value.trim());
		searchRef.current.style.border = "1px solid #fff";
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (handleValidation()) getListMovies(search);
	};

	const handleValidation = () => {
		if (search == "") {
			searchRef.current.style.border = "1px solid red";
			searchRef.current.focus();
		}
		return search !== "";
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					ref={searchRef}
					type="text"
					name="search"
					onChange={(event) => handleChange(event)}
					style={styles.input}
					placeholder="search movies"
				/>
				<button style={styles.button}>Search</button>
			</form>
			
		</>
	);
}

const styles = {
	input: {
		fontSize: "1.1em",
		border: "1px solid #fff",
		borderRadius: 2,
		marginRight: 15,
		backgroundColor: "#333",
		color: "#fff",
		padding: "15px",
	},
	button: {
		fontSize: "1.3em",
		border: "none",
		borderRadius: 5,
		backgroundColor: "#4CAF50",
		color: "#fff",
		cursor: "pointer",
		padding: "15px",
	},
};
