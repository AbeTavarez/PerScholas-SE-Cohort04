const React = require("react");

function Show(props) {
  const { fruit } = props;
  console.log(fruit);

  return (
    <div>
      <h1>Hello Show Page</h1>

      <p>
        The {fruit.name} is {fruit.color} {" "}
        {fruit.readyToEat
          ? "Its ready to eat"
          : "It is not ready to eat... Cant touch this"}
      </p>
    </div>
  );
}

// class Show extends React.Component{
//     render() {
//         return(
//             <h1>Show Route</h1>
//         )
//     }
// }

module.exports = Show;
