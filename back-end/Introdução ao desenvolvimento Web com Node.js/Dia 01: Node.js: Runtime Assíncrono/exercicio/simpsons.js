const fs = require('fs').promises;

async function getSimpsonsById(id) {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(data);
    const chosenSimpson = simpsons.find((element) => Number(element.id) === id)

    if(!chosenSimpson) {
        throw new Error('id não encontrado')
    } return chosenSimpson
}

async function main(id) {
   const simpsons = await getSimpsonsById(id);
   console.log(simpsons);
}

main(2)
