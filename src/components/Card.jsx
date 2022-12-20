import Sidebar from "./Sidebar";
import PersonalInfo from "./PersonalInfo";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function Card() {
  return (
    <div className="w-[50%] bg-white rounded-xl shadow-2xl p-4">
      <div className="flex items-center gap-28">
        <Sidebar />
        <Routes>
          <Route path="/" element={<PersonalInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default Card;
