import "../main.css";

type Option = "success" | "info" | "warning" | "danger";

interface Props {
   type: Option;
   text: string;
   onClick: () => void;
}

export default function Button({ type, text, onClick }: Props) {
   let colors: string = '';

   if (type === "success") {
      colors = 'bg-emerald-400 hover:bg-emerald-500'
   } else if (type === "info") {
      colors = 'bg-sky-400 hover:bg-sky-500'
   } else if (type === "warning") {
      colors = 'bg-amber-400 hover:bg-amber-500'
   } else if (type === "danger") {
      colors = 'bg-rose-500 hover:bg-rose-600'
   } else {
      colors = 'bg-slate-400 hover:bg-slate-500'
   }
   
   return (
      <button
         type="button"
         className={
            "antialiased font-medium leading-normal " +
            "inline-block rounded-md px-6 py-2 " +
            "transition duration-150 ease-in-out " +
            colors
         }
         onClick={onClick}
      >
         {text}
      </button>
   );
};