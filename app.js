// const { tulisPertanyaan, simpanContact } = require("./contacts");

// const main = async () => {
//   const nama = await tulisPertanyaan("Masukan nama anda : ");
//   const email = await tulisPertanyaan("Masukan email anda : ");
//   const nim = await tulisPertanyaan("Masukan NIM anda : ");

//   simpanContact(nama, email, nim);
// };
// main();

// mengambil argumen dari command line
const { argv } = require("process");
const yargs = require("yargs");

yargs.command(
  "add",
  "Menambahkan contact baru",
  () => {},
  (argv) => {
    console.log(argv.nama);
  }
);

yargs.parse();
