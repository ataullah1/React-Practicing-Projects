import './App.css';
import Counter from './Counter';

function App() {
  const click1 = () => {
    alert('Hello Click 1');
  };
  const click2 = () => {
    alert('Hello click 2');
  };
  const click3 = () => {
    alert('Hello Click 3');
  };

  // Parameter pass=======
  const click5 = (num) => {
    alert('Hello Click 5 =' + (num + 2));
  };
  return (
    <>
      <h1>Hello</h1>
      <Counter />
      <button onClick={click1}>Click 1</button>
      <button onClick={click2}>Click 1</button>
      <button onClick={click3}>Click 1</button>
      <button onClick={() => click5(9)}>Click 5</button>
      <button onClick={() => alert('Hello Click 4')}>Click 4</button>
    </>
  );
}

export default App;
