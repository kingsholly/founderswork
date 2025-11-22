import { createServer } from "http";
import next from "next";

const port = parseInt(process.env.PORT || "3000");
const dev = false; // must be false in production
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, () => {
    console.log(`Next.js server running on port ${port}`);
  });
});
