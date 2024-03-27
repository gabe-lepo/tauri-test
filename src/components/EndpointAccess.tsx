import "bulma";
import { useEffect, useState, ChangeEvent } from "react";

function EndpointAccess() {
   const [url, setUrl] = useState("");
   const [methodType, setMethodType] = useState("POST");

   const handleMethodChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setMethodType(event.target.value);
   };
   const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
      setUrl(event.target.value);
   };

   useEffect(() => {
      console.log("URL:", url);
      console.log("Method:", methodType);
   }, [url, methodType]);

   return(
      <div className="block container box">
         <p className="title">Endpoint Access</p>

         <div className="field">
            <label className="label">HTTP Method</label>
            <div className="control">
               <div className="select">
                  <select onChange={handleMethodChange}>
                     <option>POST</option>
                     <option>GET</option>
                  </select>
               </div>
            </div>
         </div>
         
         <div className="field">
            <label className="label">Endpoint URL</label>
            <div className="control">
               <input
                  className="input"
                  type="text"
                  placeholder="http://192.168.4.1:8010/test/lights/on"
                  onChange={handleUrlChange}
               />
            </div>
         </div>

         <div className="field">
            <div className="control">
               <button className="button">Submit</button>
            </div>
         </div>
         <hr />
         <div className="field">
            <div className="control">
               <p>Method: {methodType}</p>
               <p>URL: {url}</p>
            </div>
         </div>
      </div>
   );
}

export default EndpointAccess;