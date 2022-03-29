// [ { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] }, { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] }, ];

function rainDance(arr = []){
    let avgRainfall;
    let totalRainfall;
    for(let i=0;i<arr.length;i++){
        avgRainfall = 0;
        totalRainfall = 0;
        for(let j=0;j<arr[i].rainfall.length;j++){
            totalRainfall += arr[i].rainfall[j];
        }
        avgRainfall = totalRainfall/arr[i].rainfall.length;
        arr[i].avgRainfall = avgRainfall;
        delete arr[i].rainfall;
    }
    console.log(arr);
} 

console.log(rainDance([
    { name: "Boston", rainfall: [1, 2, 3, 4, 5, 6, 7] },
    { name: "Chandler", rainfall: [0, 0, 1, 0, 0, 1, 1] },
    { name: "Charlotte", rainfall: [2, 2, 2, 2, 2, 2, 2] },
    { name: "Dallas", rainfall: [3, 3, 2, 6, 1, 3, 8] },
]));