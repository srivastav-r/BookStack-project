import { GoBook } from "react-icons/go";
import { BiUserPin } from "react-icons/bi";
import { GiFeather } from "react-icons/gi";

function App() {
  return (
    <>
      <div className=" flex flex-col  items-center h-screen bg-gradient-to from-gray-800 to-gray-700 bg-gradient-to-r ">
        <div className="text-7xl font-extrabold mt-10 mb-20 ">
          <GiFeather className="text-gray-400" />
          Book Stack
        </div>
        <div>
          <h1 className="text-2xl  text-neutral-400 text-center font-bold">
            {`"`} Step into a world where words weave magic, characters come to
            life, and imagination knows <br />
            no bounds - embark on a journey through the pages of a book that
            promises to captivate <br /> your heart and mind {`"`}
          </h1>
        </div>
        <div className="flex gap-10 mt-10 ">
          <a
            href="/signin"
            className=" flex flex-col px-5 py-5 w-[150px] border items-center border-black rounded bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-400 via-slate-800 to-indigo-200 hover:bg-slate-900"
          >
            <GoBook className="text-6xl  " />
            <span className="text-white text-xl">Publisher</span>
          </a>
          <a
            href="/visitor"
            className="flex flex-col items-center w-[150px] px-5 py-5 border border-black rounded bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-400 via-slate-800 to-indigo-200 hover:bg-slate-600"
          >
            <BiUserPin className="text-6xl" />
            <span className=" text-white text-xl">Visitor</span>
          </a>
        </div>
      </div>
    </>
  );
}
export default App;
