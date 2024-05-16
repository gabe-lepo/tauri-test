import "../main.css";
import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import CardTitle from "./CardTitle";

function WifiList() {
   const [name, setName] = useState<string>("<you>");
   const [result, setResult] = useState<string>("");

   const fetchData = async () => {
      try {
         const resp = await invoke<string>('hello_world', { name });
         setResult(resp);
      } catch (err) {
         console.error(`Error: `, (err));
      }
   };

   useEffect(() => {
      fetchData();
   }, [name]);

   const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
   }

   return(
      <>
         <CardTitle title="Wifi List" subtitle="WIP" />
         <div>
            <input
               type="text"
               placeholder="Enter your name"
               autoCapitalize="false"
               autoComplete="false"
               autoCorrect="false"
               onChange={handleNameChange}
            />
         </div>
         <p>{result}</p>
      </>
   );
}

export default WifiList;
