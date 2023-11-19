// import { createRequire } from 'node:module';
// import { fileURLToPath } from "url";   

// function AddData (title, contents, created_by, timestamp){
//   const require = createRequire(import.meta.url);
//   const myJson = require('./mockdata.json');
  
//   const newData = {
//     "idx": (myJson.length +1),
//     "title": title,
//     "contents": contents,
//     "created_by": created_by,
//     "timestamp": timestamp
//   }
  
  
//   myJson.push(newData)
//   console.log(myJson)
  
//   const path = require('path');
//   const fs = require('fs');
  
//   const __dirname = fileURLToPath(new URL(".", import.meta.url));
//   const writeJsonFilePath = path.join(__dirname, "mockdata.json");
//   fs.writeFileSync(writeJsonFilePath, JSON.stringify(myJson, null, 2))
  
// }

// export default AddData;