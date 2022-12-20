import Sidebar from "./Sidebar";
import PersonalInfo from "./PersonalInfo";

function Card() {
  return (
    <div className="w-[50%] bg-white rounded-xl shadow-2xl p-4">
      <div className="flex items-center gap-28">
        <Sidebar />
        <PersonalInfo />
      </div>
    </div>
  );
}

export default Card;
