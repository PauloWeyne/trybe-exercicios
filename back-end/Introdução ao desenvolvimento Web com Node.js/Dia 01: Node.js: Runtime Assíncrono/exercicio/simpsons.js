const fs = require('fs').promises;

// async function getSimpsonsById() {
//     const data = await fs.readFile('./simpsons.json', 'utf-8');
//     const dataParse = JSON.parse(data);
//     const array = dataParse.map(({id, name}) => `${id}: ${name}`);
//     console.log(array);
// }

// getSimpsonsById();

async function writeData() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
    const object = JSON.parse(fileContent)
    object.push({ id: 10, name: 'Paulo Weyne' })

    const array = object.map(({id, name}) => `${id}: ${name}`)
    

    console.log(array);
}

writeData()