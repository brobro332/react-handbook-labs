/*
 * [props]
 * 1. 분할 대입은 { ... } 구문을 사용한다.
 */
// export default function MyHello(props) {
//   return <div>안녕하세요, {props.myName}님!</div>;
// }

export default function MyHello({ myName }) {
  return <div>안녕하세요, {myName}님!</div>;
}
