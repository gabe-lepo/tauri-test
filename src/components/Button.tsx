import "../main.css";

type Option = "success" | "info" | "warning" | "danger";

interface Props {
   type: Option;
   text: string;
   onClick: () => void;
   disabled: Boolean;
}

export default function Button({ type, text, onClick, disabled }: Props) {
   let colors: string = '';

   if (type === "success") {
      colors = 'bg-emerald-400 hover:bg-emerald-500'
   }
   if (type === "info") {
      colors = 'bg-sky-400 hover:bg-sky-500'
   }
   if (type === "warning") {
      colors = 'bg-amber-400 hover:bg-amber-500'
   }
   if (type === "danger") {
      colors = 'bg-rose-500 hover:bg-rose-600'
   }
   
   return (
      <>
         {
            disabled ? (
               <button
                  type="button"
                  className={
                     "antialiased font-medium leading-normal " +
                     "inline-block rounded-md px-6 py-2 " +
                     "transition duration-150 ease-in-out " +
                     "bg-slate-400 hover:bg-slate-500"
                  }
                  onClick={onClick}
                  disabled={true}
               >{text}</button>
            ) : (
               <button
                  type="button"
                  className={
                     "antialiased font-medium leading-normal " +
                     "inline-block rounded-md px-6 py-2 " +
                     "transition duration-150 ease-in-out " +
                     colors
                  }
                  onClick={onClick}
               >{text}</button>
            )
         }
      </>
   );
};