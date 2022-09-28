const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const expectedResult = 20;
  
  function containsA() {
    // escreva seu código aqui
    let totalOfLetters = 0;
    names.forEach((name) => {
      const lettersFromName = name.split('');
      totalOfLetters += lettersFromName.reduce((lettersInName, currentLetter) => {
        if (currentLetter === 'a' || currentLetter === 'A') {
          return lettersInName + 1;
        }
        return lettersInName;
      }, 0)
    });
    return totalOfLetters;
  }
  console.log(containsA());