import { useState } from "react";
import "./App.css";
import LateralMenu, { Sport } from "./components/Burger";
import { Chat } from "./components/Chat";

function App() {
  const [chatType, setChatType] = useState<Sport>(Sport.Rugby);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openChat = (sport: Sport) => {

    setChatType(sport);

    if (sport === chatType) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <>
      <LateralMenu openChat={openChat} />
      <Chat type={chatType} isOpen={true} />
    </>
  );
}

export default App;
