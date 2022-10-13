import express from "express"
import bodyParser from "body-parser";
import database from "./database/index.js";
import router from "./routes/index.js";
import {loadNuxt, build} from "nuxt";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/', router);

async function startApp() {
  try {
    const nuxt = await loadNuxt("dev");
    app.use(nuxt.render);
    build(nuxt);
    database.authenticate()
      .then(() => app.listen(port, 'localhost'))
      .catch(error => console.error(error));
  } catch (error) {
    console.error(error);
  }
}

startApp();
