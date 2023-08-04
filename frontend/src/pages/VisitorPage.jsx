import { useState } from "react";
import { GiFeather } from "react-icons/gi";
import axios from "axios";

export default function VisitorPage() {
  const [searchKey, setSearchKey] = useState("");
  const [results, setResults] = useState([]);

  const search = (e) => {
    e.preventDefault();

    axios
      .get(`http://localhost:8000/search/${searchKey}`)
      .then((res) => {
        if (res.status === 200) {
          setResults(res.data);
        } else if (res.status === 404) {
          alert("Book not found");
        } else {
          alert("Something went wrong");
        }
      })
      .catch(() => {
        alert("Book not found");
      });

    setSearchKey("");
  };

  return (
    <div className="flex flex-col p-5 items-center bg-gradient-to-r from-gray-800 to-gray-700 w-full h-full overflow-scroll">
      <div className="text-7xl font-extrabold mt-10 mb-20">
        <GiFeather className="text-gray-400" />
        Book Stack
      </div>

      <form
        onSubmit={search}
        className="search-box flex gap-5 items-center mb-10"
      >
        <input
          type="text"
          name="search"
          value={searchKey}
          className="px-5 py-2 w-[40rem] rounded-full"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <input
          type="submit"
          className="bg-black text-white px-5 py-2 rounded-full"
          value="Search"
        />
      </form>

      <div className="results">
        {results.map((book, i) => (
          <div
            key={i}
            className="book border w-[25rem] rounded p-5 bg-slate-500 relative"
          >
            <h2 className="text-5xl mb-5 truncate">{book.BookTitle}</h2>
            <h3 className="text-xl font-bold mb-2 truncate">
              Author Name:
              <span className="font-normal truncate"> {book.AuthorName}</span>
            </h3>
            <p className="text-xl font-bold truncate">
              Book Description:
              <span className="font-normal flex-wrap"> {book.Description}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
