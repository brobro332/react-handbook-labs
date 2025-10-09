import { useState } from "react";

/**
 * [state]
 * 1. state 값을 변경하기 위해서는 state++과 같은 연산은 반영되지 않는다.
 *    리액트의 관리 밖에서 갱신하는 것이기 때문이다.
 * 2. 올바르게 state 값을 변경하기 위해서는 setState() 함수를 사용해야 한다.
 * 3. state는 다음과 같은 타이밍에 리렌더링을 발생시킨다.
 *    - state가 업데이트된 경우
 *    - 전달받은 props가 변경된 경우
 *    - 부모 컴포넌트가 다시 렌더링된 경우
 */
export default function StateBasic({ init }) {
  const [count, setCount] = useState(init);
  const handleClick = () => setCount(count + 1);

  console.log(`count is ${count}`);

  return (
    <>
      <button onClick={handleClick}>카운트</button>
      <p>{count}번 클릭했습니다.</p>
    </>
  );
}
