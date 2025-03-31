

export enum Sport {
    Rugby = "Rugby",
    Football = "Football",
    Tennis = "Tennis",
    Volleyball = "Volleyball",
    Cyclisme = "Cyclisme"
}

const LateralMenu = ({ openChat} : { openChat: (sport: Sport) => void }) => {


  return (
    <div className="relative">
      {/* Menu */}
      <nav
        className={`absolute h-screen top-0 bg-black w-20 text-white transition-all duration-300 ease-in-out left-0`}
      >
        <ul>
          <li className="py-2 w-full h-20 border-b-gray-500 border-b-1 flex justify-center items-center" onClick={() => openChat(Sport.Rugby)}><a href="#">R</a></li>
          <li className="py-2 w-full h-20 border-b-gray-500 border-b-1 flex justify-center items-center" onClick={() => openChat(Sport.Football)}><a href="#">F</a></li>
          <li className="py-2 w-full h-20 border-b-gray-500 border-b-1 flex justify-center items-center" onClick={() => openChat(Sport.Tennis)}><a href="#">T</a></li>
          <li className="py-2 w-full h-20 border-b-gray-500 border-b-1 flex justify-center items-center" onClick={() => openChat(Sport.Volleyball)}><a href="#">V</a></li>
          <li className="py-2 w-full h-20 border-b-gray-500 border-b-1 flex justify-center items-center" onClick={() => openChat(Sport.Cyclisme)}><a href="#">C</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default LateralMenu;
