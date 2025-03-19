import fs from "fs";
import os from "os";

console.log(os.platform());
console.log(os.arch());
console.log(os.type());
console.log(os.release());
console.log(os.hostname());

// fs.readFile("w.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err.message);
//     return;
//   }
//   console.log(data.toUpperCase());
// });

// fs.readFile("w.txt", "utf-8", (err, data) => {
//   fs.writeFile("w.txt", data.toUpperCase(), "utf-8", (err) => {
//     console.log("file written");
//   });
// });
