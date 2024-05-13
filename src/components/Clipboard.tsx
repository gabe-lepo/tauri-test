import "../main.css";
import CardTitle from "./CardTitle";
import { useState } from "react";
import { readText, writeText } from "@tauri-apps/api/clipboard";
import Button from "./Button";

export default function Clipboard() {
   const [input, setInput] = useState<string>("");
   const [output, setOutput] = useState<string | null>("");
   const [isLoading, setIsLoading] = useState<boolean>(false);
   
   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value);
   };

   async function writeToClipboard() {
      setIsLoading(true)
      await writeText(input).then((resp) => {
         console.log(`${resp}`);
      }).catch((err) => {
         console.error(`${err}`);
      }).finally(() => {
         setIsLoading(false);
      });
   }

   async function readFromClipboard() {
      setIsLoading(true);
      setOutput(await readText());
      setIsLoading(false);
   }

   return (
      <>
         <CardTitle title={"Clipboard"} subtitle="System Clipboard Interface" />
         <div className="grid grid-cols-2 gap-2">
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
            <Button
               type={"info"}
               text={"Copy"}
               onClick={writeToClipboard}
               disabled={false}
            />
            <input
               className="bg-inherit w-full"
               placeholder="Clipboard contents"
               type="textarea"
               value={output?.toString()}
               disabled
            />
            <Button
               type={"info"}
               text={"Read"}
               onClick={readFromClipboard}
               disabled={isLoading}
            />
         </div>
      </>
   )
};