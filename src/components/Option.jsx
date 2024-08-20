export default function Option({ title, icon }) {
  return (
    <div className="text-mainBlue underline flex gap-2 select-none cursor-pointer">
      <img src={icon} alt={`${title} Icon`} className="h-8" />
      <span className="uppercase font-bold arialFont text-2xl">{title}</span>
    </div>
  );
}
