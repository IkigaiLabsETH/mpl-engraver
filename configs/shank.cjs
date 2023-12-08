const path = require("path");
const { generateIdl } = require("@metaplex-foundation/shank-js");

const idlDir = path.join(__dirname, "..", "idls");
const binaryInstallDir = path.join(__dirname, "..", ".crates");
const programDir = path.join(__dirname, "..", "programs");

generateIdl({
  generator: "shank",
  programName: "mpl_engraver_program",
  programId: "engrutYV21fUN2euLkKKwv3vCuVsHg1pBwfJUtKLmZ5",
  idlDir,
  binaryInstallDir,
  programDir: path.join(programDir, "mpl-engraver"),
});
