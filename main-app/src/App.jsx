import './index.css';
const App = () => {
  return (
    <>
      <div id="sidebar">
        <h1>React Micro Frontends</h1>
        <div>
         <p>Modules</p>

        </div>
        <nav>
          <ul>
            <li>
              <a href={`/module1`}>Module1</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}

export default App;