import fs from 'fs/promises'

//write
export async function saveDataInFile(path,data){
        const json = JSON.stringify(data,null,2)
        fs.writeFile(path,json,(err)=>{
            if(err)return console.log(err);
            console.log( "File written successfully")
        })
    }
//read
export async function readFileByPath(path){
    try {
        const data = await fs.readFile(path, "utf8");
        return JSON.parse(data)

    } catch (error) {
        console.log(error);
    }
}
//append to file
export async function appendData() {
  try {
    await fs.appendFile('example.txt', '[sa{}]');
    console.log('Data appended successfully.');
  } catch (err) {
    console.error('Error appending data:', err);
  }
}
