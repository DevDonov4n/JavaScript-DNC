const armario = [
    {item: 'camisetas'},
    'cueca',
    {item: 'moletons'},
    {item: 'calças'},
];

armario.push({item: 'shorts'});

console.log(armario[0]);
console.log(armario[4]);

armario.pop();
console.log(armario);

armario[0] = {item: 'toucas'};
console.log(armario[0]);

console.log(armario.length);

console.log(armario.indexOf('cueca'));

armario.forEach((item) => {
    console.log(item);
});