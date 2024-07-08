import { cn } from "../api/weather";

export default function Container(props) {
  return (
    <div
      {...props}
      className={cn(
        "w-full bg-white border rounded-xl flex py-4 shadow-sm",
        props.className
      )}
    />
  );
}