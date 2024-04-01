import "../main.css";
import { useState, ChangeEvent, useEffect } from "react";
import { fetch, ResponseType } from "@tauri-apps/api/http";
import CardTitle from "./CardTitle";

function EndpointAccess() {
   const endpoint = {
      LIGHTS_ON: "http://192.168.4.1:8010/test/lights/on",
      LIGHTS_BOOST: "http://192.168.4.1:8010/test/lights/boost",
      LIGHTS_OFF: "http://192.168.4.1:8010/test/lights/off"
   };
   const TIMEOUT = 5;

   const [url, setUrl] = useState(endpoint.LIGHTS_ON);
   const [fetchResponse, setFetchResponse] = useState<ResponseType.JSON | unknown>();
   const [fetchError, setFetchError] = useState("");
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      setFetchResponse(undefined);
      setFetchError("");
   }, []);

   const updateUrl = (event: ChangeEvent<HTMLSelectElement>) => {
      if (event.target.value === "Lights ON") {
         setUrl(endpoint.LIGHTS_ON);
      } else if (event.target.value === "Lights BOOST") {
         setUrl(endpoint.LIGHTS_BOOST);
      } else {
         setUrl(endpoint.LIGHTS_OFF);
      }
   };

   async function handleClick() {
      setFetchResponse(undefined);
      setFetchError("");
      setIsLoading(true);
      console.log(`Received click, fetching from ${url}...`);
      await fetch(url, {
         method: "POST",
         timeout: TIMEOUT,
         responseType: ResponseType.JSON,
      }).then((response) => {
         console.log(response.data)
         setFetchResponse(response.data);
      }).catch((err) => {
         console.error(err);
         setFetchError(err);
      });
      setIsLoading(false);
   }

   return(
      <>
         <CardTitle title="Device Controls" subtitle="Endpoint Access" />
         <select onChange={updateUrl}>
            <option>Lights ON</option>
            <option>Lights BOOST</option>
            <option>Lights OFF</option>
         </select>
         <p>{url}</p>
         <button className={""} onClick={handleClick}>Submit</button>
         <hr />
         <p>Response</p>
         <p>{JSON.stringify(fetchResponse)}</p>
         <p>Error</p>
         <p>{fetchError}</p>
      </>
   );
}

export default EndpointAccess;