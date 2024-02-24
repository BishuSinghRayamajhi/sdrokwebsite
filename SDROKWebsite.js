function toggleSection(sectionId) {
  var section = document.getElementById(sectionId);

  if (section.style.display === "none") {
      section.style.display = "block";
  } else {
      section.style.display = "none";
  }
}
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/getDirectoryContents', (req, res) => {
  const directoryPath = path.join(__dirname, 'public', 'research_articles');

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json({ files });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
