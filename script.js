function hitungTotal(nama, ...nilai) {
    // Calculate the total value using the reduce method
    const total = nilai.reduce((acc, current) => acc + current, 0);
    
    // Use the spread operator to combine the nilai array with an additional array
    const combinedArray = [...nilai, 3, 7];
    
    // Print the result to the console using a template literal
    console.log(`Nama: ${nama}, Total Nilai: ${total}`);
    
    return combinedArray;
  }