import "../main.css";
import Button from "./Button";
import CardTitle from "./CardTitle";
import { Command } from "@tauri-apps/api/shell";

export default function Shell() {
   async function runCommand() {
      const command = new Command('pwd');
      command.on('close', data => {
         console.log(`Command finished with code ${data.code} and signal ${data.signal}`)
      });
      command.on('error', error => console.error(`command error: "${error}"`));
      command.stdout.on(`data`, line => console.log(`command stdout: "${line}"`));
      command.stderr.on(`data`, line => console.log(`command stderr: "${line}"`));

      const child = await command.spawn();
      console.log(`pid:`, child.pid);
   };

   return (
      <>
         <CardTitle title="Shell" subtitle="Interact with system shell" />
         <Button 
            type={"success"}
            text={"Run Command"}
            onClick={runCommand}
            disabled={false}
         />
      </>
   );
};