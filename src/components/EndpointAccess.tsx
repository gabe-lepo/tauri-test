import "bulma";

function EndpointAccess() {


   return(
      <div className="block container box">
         <p className="title">Device Endpoint Access</p>

         <div className="field">
            <label className="label">HTTP Method</label>
            <div className="control">
               <div className="select">
                  <select>
                     <option>POST</option>
                     <option>GET</option>
                  </select>
               </div>
            </div>
         </div>
         
         <div className="field">
            <label className="label">Endpoint URL</label>
            <div className="control">
               <input className="input" type="text" placeholder="http://192.168.4.1:8010/test/lights/on" />
            </div>
         </div>

         <hr />

         <div className="field">
            <div className="control">
               <button className="button">Submit</button>
            </div>
         </div>
      </div>
   );
}

export default EndpointAccess;