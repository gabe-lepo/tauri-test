import "../main.css"

interface CardProps {
   component: React.ReactNode
}

export default function ComponentCard({ component }: CardProps) {
   return (
      <div className={
         "container px-4 py-2 min-h-28 max-h-48 overflow-auto overscroll-none border"
      }>
         <div className="border border-dashed">{component}</div>
      </div>
   );
}