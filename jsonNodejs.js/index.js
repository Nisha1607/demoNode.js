const bioData={
    name : "nisha",
    age : 21,
    passion : 'engineering'
};

const jsonData = JSON.stringify(bioData);

//console.log(jsonData);

const objDAta =JSON.parse(jsonData);

console.log(objDAta);