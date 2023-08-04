import { GiFeather } from "react-icons/gi";
import { useState, useEffect } from "react";
import axios from "axios";
import { TbHttpDelete } from "react-icons/tb";
import { MdOutlineEditNote } from "react-icons/md";

export default function BookList() {
  const [books, setBooks] = useState([]);

  function fetchBooks() {
    axios.get("http://localhost:8000/getItems").then((res) => {
      setBooks(res.data);
    });
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  const deleteBook = (id) => {
    axios.delete(`http://localhost:8000/deleteBook/${id}`).then((res) => {
      if (res.status === 200) {
        alert("Book Deleted...");
      }
      fetchBooks();
    });
  };

  return (
    <div className="flex flex-col p-5 items-center bg-gradient-to-r from-gray-800 to-gray-700 w-full h-full overflow-scroll">
      <div className="text-7xl font-extrabold mt-10 mb-20">
        <GiFeather className="text-gray-400" />
        Book Stack
      </div>

      <div className="book-list flex flex-wrap justify-evenly gap-10">
        {books.map((book, i) => (
          <div
            key={i}
            className="book border w-[25rem] rounded p-5 bg-slate-500 relative"
          >
            <div className="absolute top-0 right-0">
              <TbHttpDelete
                onClick={() => deleteBook(book._id)}
                className="text-red text-3xl text-red-900 cursor-pointer hover:text-red-700"
              />
              <a href={`/edit/${book._id}`}>
                <MdOutlineEditNote className="text-red text-3xl text-black cursor-pointer hover:text-sky-800" />
              </a>
            </div>
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
      <a href="/" className=" mt-5 border-2 p-2  bg-black hover:bg-slate-700 text-gray-300"> Main </a>
    </div>
  );
}
