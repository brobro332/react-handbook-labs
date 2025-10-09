import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MyHello from "./components/MyHello";
import EventBasic from "./components/EventBasic";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*
 * [앱 리렌더링]
 * 1. root.render() 메서드를 반복 호출함으로써 렌더링을 반복한다.
 * 2. 이때 업데이트가 필요한 부분 HTML 요소만 교체되는 것을 확인할 수 있다.
 *    이를 통해 리액트는 뷰 렌더링 오버헤드를 최소화한다는 사실을 알 수 있다.
 */
// setInterval(() => {
//   root.render(
//     <p>현재 시각: {(new Date()).toLocaleString()}</p>
//   );
// }, 1000);

/*
 * [JSX 규칙]
 * 1. JSX는 유일한 루트 요소를 가지므로 여러 요소를 열거할 수 없고,
 *    아래 예제 코드와 같이 <div> 등의 요소로 묶어주어야 한다.
 *    이때 더미 요소로 사용되는 것은 <React.Fragment> 요소이다.
 *    그 줄임말로 <></>를 사용하는 것이 권장된다.
 * 2. { ... } 구문을 통해 자바스크립트 표현식을 삽입할 수 있다.
 * 3. 문자열 리터럴은 따옴표로 표시한다.
 * 4. XSS라는 취약점에 대한 방어를 위해 { ... } 구문의 표현식은 이스케이프 처리된다.
 *    가령 악성 사용자가 태그 등의 스크립트를 요청하더라도,
 *    해당 태그는 이스케이프 처리되어 단순한 문자열로 페이지에 반영된다.
 * 5. 실제 참조 삽입 시에도 마찬가지로 이스케이프 처리되므로 의도치 않은 값을 렌더링하는 것에 주의해야 한다.
 * 6. 부울 값, undefined, null은 렌더링되지 않는다.
 * 7. { ... } 구문을 통해 속성 값을 설정할 수 있다.
 *    이때 속성 값을 큰 따옴표로 묶으면 문자열로 간주되기 때문에 피해야 한다.
 * 8. 여러 속성을 적용할 때는 객체 형식으로 속성을 준비하여 스프레드 구문을 사용한다.
 * 9. 속성 값의 기본은 true다.
 * 10. { ... } 구문에서 식의 값은 문자열로 전달하는 것이 일반적이지만,
 *     style 속성은 예외적으로 객체 형식으로 지정해야 한다.
 *     하지만 스타일을 지정하기 위해 style 속성을 사용하는 것보다는,
 *     css 파일을 통해 className 속성을 사용하는 것이 더욱 권장된다.
 * 11. JSX는 자바스크립트 자체가 아니라, 실행 시 자바스크립트 코드인
 *     React.createElement() 메서드로 변환되는 확장 구문이다.
 */
// const nickname = 'brobro332';
// const dest = 'https://ko.react.dev';

// root.render(
//   // 태그 밖에서 주석으로 사용할 수 있다.
//   /* 태그 밖에서 주석으로 사용할 수 있다. */
//   <>
//       {/* 태그 자식 요소에서 사용할 수 있는 주석이다. */}
//       <p>Hello, World !</p>
//       <p>Hello, React !</p>
//       <p>Hello, {nickname}</p>

//       {/* 실제 참조 */}
//       <div>{'Tom &amp; Jerry'}</div>
//       <div>{'Tom \u0026 Jerry'}</div>                      {/* 이스케이프 시퀀스 */}
//       <div>{`Tom ${String.fromCodePoint(38)} Jerry`}</div> {/* 유니코드 포인트 */}

//       <ul>
//         <li>{true}</li>
//         <li>{false}</li>
//         <li>{undefined}</li>
//         <li>{null}</li>
//         <li>{0}</li> {/* 유일하게 렌더링 */}
//       </ul>

//       <a href={dest}>리액트 공식 홈페이지</a>
//   </>
// )

/*
 * [props]
 * 1. 큰 따옴표로 묶인 속성 값은 모두 문자열로 간주된다.
 *    값을 숫자나 객체, 또는 함수로 전달하고 싶다면 { ... } 구문을 사용해야 한다.
 */
root.render(
  <React.StrictMode>
    {/* <MyHello myName="홍길동" /> */}
    <EventBasic type="time" />
  </React.StrictMode>
);

reportWebVitals();
