import { useEffect, useState } from "react";
import { Sport } from "./Burger";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { getMessage } from "@/services/api";

export const Chat = ({ type, isOpen }: { type: Sport; isOpen: boolean }) => {
  const [question, setQuestion] = useState<string>("");
  const sendMessage = () => {
    setQuestion("");
    getMessage(type, question).then((response) => {
      console.log(response);

      setHistoric([...historic, response.message]);
    });
  };

  const [historic, setHistoric] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
      setHistoric([]);
    }
  }, [type]);

  return (
    <div
      className={`w-80 chatbot text-white absolute left-20 h-80 bg-gray-900 bottom-0 h-screen transition-all duration-300 ease-in-out ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="w-full h-11/12 bg-gray-900 overflow-y-scroll">
        <div className="text-2xl p-5">{type} Chat</div>
        {historic.map((message) => (
          <div className="p-2">
            <p>ChatBot:</p>
            <p>{message}</p>
          </div>
        ))}
      </div>

      <div className="w-full h-1/12 bg-gray-700 p-5 text-white flex items-center justify-center">
        <Input
          placeholder="Ecrivez votre message"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />{" "}
        <Button className="ml-2" onClick={sendMessage}>
          Envoyer
        </Button>
      </div>
    </div>
  );
};
