import "../main.css"

interface CardProps {
   component: React.ReactNode
}

export default function ComponentCard({ component }: CardProps) {
   return (
      <div className="container px-4 py-2 mt-2 border">
         {component}
      </div>
   );
}