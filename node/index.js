const express = require("express");
const app = express();

const { proxy } = require("rtsp-relay")(app);

const handler = proxy({
  url: `rtsp://rtspstream:b71299ea294da9d188226d667eebddcc@zephyr.rtsp.stream/movie`,
  verbose: false,
});

// the endpoint our RTSP uses
app.ws("/api/stream", handler);

// this is an example html page to view the stream
app.get("/", (req, res) => res.send("Hello!"));

app.listen(2000);
