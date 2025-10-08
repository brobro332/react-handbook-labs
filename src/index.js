import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

/*
 * [앱 리렌더링]
 * 1. root.render() 메서드를 반복 호출함으로써 렌더링을 반복한다.
 * 2. 이때 업데이트가 필요한 부분 HTML 요소만 교체되는 것을 확인할 수 있다.
 *    이를 통해 리액트는 뷰 렌더링 오버헤드를 최소화한다는 사실을 알 수 있다.
 */
setInterval(() => {
  root.render(
    <p>현재 시각: {(new Date()).toLocaleString()}</p>
  );
}, 1000);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

reportWebVitals();
