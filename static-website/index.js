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

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
