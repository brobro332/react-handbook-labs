import ForItem from "./ForItem";

/*
 * [sort]
 * 1. Arrays#sort 메서드를 이용하면 값의 차이를 통해 요소를 정렬할 수 있다.
 * 2. 가령 내림차순 정렬을 위해서는 n.price - m.price로 처리할 수 있다.
 */
export default function ForSort({ src }) {
  src.sort((m, n) => m.price - n.price);
  return (
    <dl>
      {src.map((el) => (
        <ForItem book={el} />
      ))}
    </dl>
  );
}
