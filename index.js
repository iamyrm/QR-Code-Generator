import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Enter the URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const userURL = answers.URL;
    var userQR = qr.image(userURL, { ec_level: "H" });
    userQR.pipe(fs.createWriteStream("userQRCode.png"));

    fs.writeFile("userURLs.txt", userURL, (err) => {
      if (err) throw err;
      console.log("Your URL has been saved");
    });
  });
