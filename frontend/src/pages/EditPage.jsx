import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { GiFeather } from "react-icons/gi";

import axios from "axios";

export default function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  function updateDetails(e) {
    e.preventDefault();

    let book = {
      BookTitle: title,
      AuthorName: author,
      Description: description,
    };

    axios
      .put(`http://localhost:8000/updateBook/${id}`, book)
      .then((res) => {
        if (res.status === 200) {
          alert("Book Updated...");
        }
        navigate("/books");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/getItem/${id}`).then((res) => {
      if (res) {
        const data = res.data;
        setTitle(data.BookTitle);
        setAuthor(data.AuthorName);
        setDescription(data.Description);
      }
    });
  }, [id]);

  return (
    <div className="flex flex-col p-5 items-center bg-gradient-to-r from-gray-800 to-gray-700 w-full h-full overflow-scroll">
      <div className="text-7xl font-extrabold mt-10 mb-20">
        <GiFeather className="text-gray-400" />
        Book Stack
      </div>
      <form
        onSubmit={(e) => updateDetails(e)}
        className="flex flex-col gap-5 w-[50rem]"
      >
        <input
          type="text"
          value={title}
          className="p-5 rounded"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book Title"
        />
        <input
          type="text"
          value={author}
          className="p-5 rounded"
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author Name"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-5 rounded"
          placeholder="Description"
        />
        <button
          className="border border-black bg-black px-5 py-2 rounded text-slate-300"
          type="submit"
        >
          Update Book Details
        </button>
      </form>
    </div>
  );
}
