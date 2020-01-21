const app = require("./config/server");

app.server.listen(app.port, app.hostname, () => {
  console.log(
    `Server running at http://${app.hostname}:${app.port}/`
  );
});