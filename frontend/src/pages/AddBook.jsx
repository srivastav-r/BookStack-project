import { useState } from "react";
import axios from "axios";
import { GiFeather } from "react-icons/gi";
export default function AddBook() {
  const [AuthorName, setAuthorName] = useState("");
  const [BookTitle, setBookTitle] = useState("");
  const [Description, setDescription] = useState("");

  const addBook = () => {
    let Details = {
      AuthorName: AuthorName,
      BookTitle: BookTitle,
      Description: Description,
    };

    axios.post("http://localhost:8000/addDetails", Details).then((res) => {
      if (res.status === 201) {
        alert("Book Added...");
      }
    });

    setAuthorName("");
    setBookTitle("");
    setDescription("");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to from-gray-900 to-gray-700 bg-gradient-to-r h-full">
      <div className="text-7xl font-extrabold mt-10">
        <GiFeather className="text-gray-400" />
        Book Stack
      </div>
      <form
        onSubmit={addBook}
        className="flex flex-col w-[30rem] items-center mt-10 border border-gray-200 border-3xl py-5 px-10"
      >
        <input
          type="text"
          required
          className="mt-10 mb-5 w-full p-2 text-black border-black bg-gray-600 rounded border border-3"
          placeholder="BookTitle"
          value={BookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />
        <input
          type="text"
          required
          className="w-full mb-5  p-2 border-black text-black bg-gray-600 border rounded border-3"
          placeholder="AuthorName"
          value={AuthorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          required
          className="w-full p-2 text-black border-gray-300 bg-gray-600 rounded row-{30} col-{50} border border-3xl"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex gap-5 w-full justify-evenly">
          <button
            type="submit"
            className="px-5 py-2 mt-5 text-gray-300 border-2 bg-black hover:bg-slate-500 rounded-lg "
          >
            Add Book
          </button>
          <a
            className="mt-5 px-5 py-2 text-center text-gray-300 border-2 bg-black hover:bg-slate-500 rounded-lg"
            href="/books"
          >
            View Books
          </a>
        </div>
      </form>
    </div>
  );
}
