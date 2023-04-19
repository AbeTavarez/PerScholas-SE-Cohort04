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

      <div>
        {
          fruit.expiration && <h4>{Date(fruit.expiration[0].date)}</h4>
        }
      </div>

      <form action={`/fruits/expires/${fruit._id}`} method="POST">
        <select name="code">
          <option>EXP</option>
          <option>RDY</option>
        </select>
        <input name="date" type="datetime-local" value="2023-04-13T19:30"/>
        <input type="submit" />
      </form>
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
