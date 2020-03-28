const fs = require("fs")

let sonnets = fs.readFileSync("./src/pages/sonnets/all-sonnets.json", "utf-8")
JSON.parse(sonnets).forEach((sonnetObj, index) => {
  const newLines = sonnetObj.lines.map((line, index) => ({
    lineNumber: index + 1,
    line,
  }))

  const newSonnet = {
    title: `${index + 1}`,
    lines: newLines,
  }
  fs.writeFileSync(
    `./src/pages/sonnets/${index + 1}.json`,
    JSON.stringify(newSonnet),
    { options: "utf-8" }
  )
})
