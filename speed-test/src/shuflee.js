function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // karıstırılacak ögeler varsa.
    while (currentIndex !== 0) {
  
      // biri secilir.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // burada digeriyle degisir.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  export default shuffle;