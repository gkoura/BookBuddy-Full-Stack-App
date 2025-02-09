import { useState } from "react";
import { useBooksContext } from "../hooks/useBooksContext";
import { useAuthContext } from "../hooks/useAuthContext";

const BookForm = () => {
	const { dispatch } = useBooksContext();
	const { user } = useAuthContext();

	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [rating, setRating] = useState("");
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!user) {
			setError("You must be logged in");
			return;
		}

		const book = { title, author, rating };

		const response = await fetch("/api/books", {
			method: "POST",
			body: JSON.stringify(book),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`,
			},
		});
		const json = await response.json();

		if (!response.ok) {
			setError(json.error);
			setEmptyFields(json.emptyFields);
		}
		if (response.ok) {
			setTitle("");
			setAuthor("");
			setRating("");
			setError(null);
			setEmptyFields([]);
			dispatch({ type: "CREATE_BOOK", payload: json });
		}
	};

	return (
		<form className="create" onSubmit={handleSubmit}>
			<h3>Add a New Book</h3>

			<label>Book Title:</label>
			<input
				type="text"
				onChange={(e) => setTitle(e.target.value)}
				value={title}
				className={emptyFields.includes("title") ? "error" : ""}
			/>

			<label>Author:</label>
			<input
				type="string"
				onChange={(e) => setAuthor(e.target.value)}
				value={author}
				className={emptyFields.includes("author") ? "error" : ""}
			/>

			<label>Rating:</label>
			<input
				type="number"
				min="1"
				max="5"
				onChange={(e) => setRating(e.target.value)}
				value={rating}
				className={emptyFields.includes("rating") ? "error" : ""}
			/>

			<button>Add Book</button>
			{error && <div className="error">{error}</div>}
		</form>
	);
};

export default BookForm;
