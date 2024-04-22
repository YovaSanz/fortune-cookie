const getRandomNumber = ( limit, limtBefore = limit ) => {

    let randomNum;

    do {
        
        randomNum = Math.floor( Math.random() * limit );
    
    } while (randomNum === limtBefore); // Repite el proceso si el nuevo número es igual al número anterior
    
    return randomNum;
}

export default getRandomNumber;