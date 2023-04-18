const React = require("react");
const DefaultLayout = require('../layout/Default')

function Show(props) {
  const { fruit } = props;
  console.log(fruit);

  return (
    <DefaultLayout title="Show Fruit Page">

      <p>
        The {fruit.name} is {fruit.color} {" "}
        {fruit.readyToEat
          ? "Its ready to eat"
          : "It is not ready to eat... Cant touch this"}
      </p>
    </DefaultLayout>
  );
}

module.exports = Show;
