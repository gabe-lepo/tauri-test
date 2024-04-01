import "../main.css";

interface Props {
   title: string;
   subtitle?: string;
};

export default function CardTitle({ title, subtitle }: Props) {
   return (
      <div className="text-center antialiased border border-dashed">
         <h1 className={
            "text-4xl" +
            " font-medium"
         }>
            {title}
         </h1>
         <h2 className={
            "text-2xl" +
            " font-light"
         }>
            {subtitle}
         </h2>
      </div>
   );
};