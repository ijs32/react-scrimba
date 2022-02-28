// function TempName() {
//   return (
//     <div>
//       <img src="react-logo.png" style={{ width: "40px" }} />
//       <h1>Fun facts about React</h1>
//       <ul>
//         <li>was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100k stars on Github</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//     </div>
//   );
// }

// ReactDOM.render(<TempName />, document.getElementById("root"));

/*
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page
*/

function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src="react-logo.png" width="30px" />
        </nav>
      </header>
      <h1>Top reasons I am excited to learn react</h1>
      <ul>
        <li>I am excited to build out the Dreamland frontend using react</li>
        <li>I am excited to add it to my resume lol</li>
        <li>I like it more than vue already</li>
      </ul>
      <footer>© 2022 Silber development. All rights reserved.</footer>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
