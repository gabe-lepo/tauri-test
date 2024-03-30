import "../main.css";

function Tailwindtest() {
   return(
      <body className="bg-slate-300 dark:bg-slate-800">
         <h1 className="text-6xl font-bold underline dark:text-slate-500">Title</h1>
         <button
            className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800 active:bg-sky-950"
         >Submit</button>

         <div className="p-6 max-w-sm mx-auto bg-white hover:bg-sky-100 dark:bg-slate-600 dark:hover:bg-slate-900 rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
               <img className="h-12 w-12" src="tauri.svg" alt="Chat logo"/>
            </div>
            <div>
               <div className="text-xl font-medium text-black">Chat</div>
               <p className="text-slate-500">Message</p>
            </div>
         </div>
      </body>
   );
}

export default Tailwindtest;