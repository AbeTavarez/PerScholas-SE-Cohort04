const React = require("react");

function DefaultLayout(props) {
  const { title, children } = props;
  return (
    <html>
      <head>
      <link rel="stylesheet" href="/css/app.css" />
        <title>{title}</title>
      </head>

      <nav>
        <a href="/fruits">Home</a>
      </nav>

      <body>
        <h1>{title}</h1>

        {children}
      </body>
    </html>
  );
}

module.exports = DefaultLayout;
