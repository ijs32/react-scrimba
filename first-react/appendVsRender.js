const example = (
  <div>
    <h1>Hello example</h1>
    <ul>
      <li>why</li>
      <li>cant</li>
      <li>i</li>
      <li>append</li>
      <li>this!!!</li>
    </ul>
  </div>
);

// document.getElementById("root").append(example);
ReactDOM.render(example, document.getElementById("root"));

// you cannot use append because reactdom.render takes react elements and translates them into something
// your browser can understand
