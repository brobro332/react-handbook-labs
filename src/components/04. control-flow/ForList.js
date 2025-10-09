import React from "react";

/*
 * [조건 분기 및 반복 처리]
 * 1. 배열을 목록으로 정형화하려면 자바스크립트 표준 Array#map 메서드를 사용하는 것이 권장된다.
 * 2. map() 메서드는 콜백 함수를 통해 배열의 요소들을 처리하고, 최종적으로 새로운 배열을 반환한다.
 * 3. Each child in a list should have a unique "key" prop. 에러가 발생할 것이다.
 *    - key 속성이 없는 경우 리액트가 배열의 변경을 감지할 수 없다.
 *      특정 항목이 추가 / 삭제되는 경우 전체 목록을 다시 생성해야 하고, 무시할 수 없는 오버헤드가 발생한다.
 *    - 배열 요소에 의미 있는 주 키가 없는 경우 map() 메서드의 인덱스 값을 사용할 수 있지만, 권장하지 않는다.
 * 4. ForNest, ForItem과 같이 목적에 따라 컴포넌트를 잘라내면 뷰의 재사용성을 높이고,
 *    코드의 가시성을 높일 수 있다.
 */
export default function ForList({ src }) {
  return (
    <dl>
      {src.map((el, idx) => (
        <React.Fragment key={el.isbn}>
          <dt>
            <a href={`https://wikibook.co.kr/images/cover/s/${el.isbn}.jpg`}>
              {el.title} ({el.price}원)
            </a>
          </dt>
          <dd>{el.summary}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
