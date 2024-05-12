import "../main.css";

interface CardProps {
   component: React.ReactNode
};

export default function ComponentCard({ component }: CardProps) {
   return (
      <div className={
         "container px-4 py-2 " +
         "min-h-32 max-h-80 overflow-auto overscroll-none border " +
         "shadow-lg shadow-neutral-300 hover:shadow-neutral-500 " +
         "transition duration-150 ease-in-out"
      }>
         <div className="border border-dashed">{component}</div>
      </div>
   );
};