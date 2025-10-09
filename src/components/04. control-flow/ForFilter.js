import ForItem from "./ForItem";

/*
 * [filter]
 * 1. Arrays#filter 메서드를 이용하면 임의의 조건식에 따라 기존 배열을 필터링할 수 있다.
 */
export default function ForFilter({ src }) {
  const lowPrice = src.filter((book) => book.price < 25000);
  return (
    <dl>
      {lowPrice.map((el) => (
        <ForItem book={el} />
      ))}
    </dl>
  );
}
