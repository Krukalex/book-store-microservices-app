import express from "express";
import { json } from "body-parser";
import { signupRouter } from "./routes/signup";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { currentUserRouter } from "./routes/current-user";

const app = express();

app.use(json());

app.use(signupRouter);
app.use(signinRouter);
app.use(currentUserRouter);
app.use(signoutRouter);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
