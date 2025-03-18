import fs from "fs";

fs.readFile("w.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
    return;
  }
  console.log(data.toUpperCase());
});
