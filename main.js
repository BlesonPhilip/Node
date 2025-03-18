import fs from "fs";

// fs.readFile("abc.txt", "utf-8", (error, data) => {
//   if (error) throw error;
//   else console.log(data);
// });

const data = "\nGrapes";
// fs.writeFile("abc.txt", data, "utf-8", (error) => {
//   console.log("file written");
// });

// fs.appendFile("abc.txt", data, "utf-8", (error) => {
//   console.log("file added");
// });

fs.mkdir("main", (err) => {
  if (err) console.log(err);
  else console.log("folder created");
});

fs.unlink("abs.txt", (err) => {
  if (err) console.log(err);
  else console.log("file deleted");
});
