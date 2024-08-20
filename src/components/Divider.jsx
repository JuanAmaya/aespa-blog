export default function Divider() {
  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-aespaPink to-aespaBlue w-full h-5 my-16"></div>
      <div className="absolute -top-1/2 flex gap-4 left-1/2 -translate-x-1/2 w-fit">
        <img src="/icons/Icon-Karina.png" alt="Heart icon" className="h-10" />
        <img
          src="/icons/Icon-Winter.png"
          alt="Butterfly icon"
          className="h-10"
        />
        <img src="/icons/Icon-Giselle.png" alt="Moon icon" className="h-10" />
        <img src="/icons/Icon-Ningning.png" alt="Star icon" className="h-10" />
      </div>
    </div>
  );
}
