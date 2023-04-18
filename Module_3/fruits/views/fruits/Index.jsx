const React = require("react");
const DefaultLayout = require('../layout/Default');

function Index(props) {
  const { fruits } = props;

  return (
    <DefaultLayout title="Fruits Index Page">
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
                {" "}
                <a href={`/fruits/${fruit._id}/edit`}>Edit</a>

              <form method="POST" action={`/fruits/${fruit._id}?_method=DELETE`}>
                <input type="submit" value="DELETE"/>
              </form>


            </li>
          );
        })}
      </ul>

    </DefaultLayout>
  );
}

module.exports = Index;
