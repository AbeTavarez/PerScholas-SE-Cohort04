const React = require("react");

function Index(props) {
  const { fruits } = props;

  return (
    <div>
      <nav>
        <a href="/fruits/new">Create a New Fruit</a>
      </nav>
      
      <h1>Index Page</h1>

      <ul>
        {fruits.map((fruit, i) => {
          return (
            <li key={fruit._id}>
              The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is {fruit.color}{" "}
              {fruit.readyToEat
                ? "It is ready to eat"
                : "It is not ready to eat"}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = Index;
