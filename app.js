const express = require("express");
const app = express();
const config = require("config");
const path = require("path");
const sendMail = require("./modules/mailer.module");

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post("/feedback", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await sendMail(name, email, message);
    res
      .status(200)
      .json({ message: "Your message has been sent successfully" });
  } catch (e) {
    res.status(500).json({ message: "Sending failure" });
  }
});

app.get("/download-cv", (req, res) => {
  const docPath = path.join(__dirname, "public", "Front-End Developer. CV.rtf");
  res.download(docPath, (error) => {
    if (error) {
      console.log(error);
    }
  });
});

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  app.get(/\/.+/, (req, res) => {
    res.redirect('/');
  })
}

app.listen(PORT, () =>
  console.log(`The server has been started on port ${PORT}...`)
);
