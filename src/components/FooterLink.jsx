export default function FooterLink({ socialUrl, name }) {
  return (
    <a
      href={socialUrl}
      target="_blank"
      className="text-mainBlue text-xl font-bold arialFont underline"
    >
      [{name}]
    </a>
  );
}
