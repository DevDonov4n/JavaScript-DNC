let promise  = new  Promise((resolve) => {
    resolve(123)
});

promise
    .then(console.log())
    .catch(console.log())

//=========================================================



let promesa = async () => new Promise((resolve, reject) => {
    reject('ocorreu um erro aqui')
});

try{
    const resolvePromesa = await promesa()
    console.log('afdjknsD');
} catch (error){
    console.log(error);
}