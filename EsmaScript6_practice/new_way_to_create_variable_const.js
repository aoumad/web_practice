const SETTINGS = 
{
    'name' : 'Abdo',
    'age'  : 22
}
Object.freeze(SETTINGS);
SETTINGS.name = 'Abderazzak';
console.log(SETTINGS);