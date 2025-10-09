/*
 * [이벤트 핸들러]
 * 1. JSX 식으로 이벤트 핸들러를 설정하기 위해서는 onEvent={ ... } 구문을 사용하면 된다.
 * 2. 해당 속성에 전달되는 것은 함수 자체라는 점을 유의해야 한다. 
 */
export default function EventBasic({ type }) {
  const d = new Date();

  const current = () => {
    switch (type) {
      case "date":
        console.log(d.toLocaleDateString());
        break;
      case "time":
        console.log(d.toLocaleTimeString());
        break;
      default:
        console.log(d.toLocaleString());
        break;
    }
  };

  return (
    <div>
      <button onClick={current}>현재 시각 가져오기</button>
    </div>
  );
}
