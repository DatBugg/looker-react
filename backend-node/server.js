const cors = require("cors");
const express = require("express");
const { LookerNodeSDK } = require("@looker/sdk-node");

const port = 3001;
const app = express();
// The init40 method below will authenticate using
// the looker.ini file
const sdk = LookerNodeSDK.init40();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/", async (req, res) => {
  const userId = await sdk.ok(sdk.me("id"));
  const accessToken = await sdk.login_user(userId.id);
  const user = {
    user_token: accessToken.value,
    token_last_refreshed: Date.now(),
  };
  res.json({ ...user });
});

app.listen(port, async () => {
  console.log(`Backend Server listening on port ${port}`);
});
