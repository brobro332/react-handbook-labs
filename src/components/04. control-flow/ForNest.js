import ForItem from "./ForItem";

export default function ForNest({ src }) {
  return (
    <dl>
      {src.map((el) => (
        <ForItem book={el} />
      ))}
    </dl>
  );
}
