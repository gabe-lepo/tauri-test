import "../main.css";
import CardTitle from "./CardTitle";
import { useState } from "react";
import { readText, writeText } from "@tauri-apps/api/clipboard";
import Button from "./Button";

export default function Clipboard() {
   const [input, setInput] = useState<string>("");
   
   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value);
   };

   return (
      <>
         <CardTitle title={"Clipboard"} subtitle="System Clipboard Interface" />
         <input
            className="bg-inherit w-full"
            type="text"
            // value={input}
            placeholder="Enter some text"
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            onChange={handleInputChange}
         />
         <p>You entered: {input}</p>
         <Button
            type={"info"}
            text={"Write"}
            onClick={async () => {await writeText(input)}}
            disabled={false}
         />
      </>
   )
};