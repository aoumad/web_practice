function showMyInfo(username = 'Default user', role = 'Default role', theme = 'Default theme')
{
    return `Hello ${username}, Your Role is: ${role}, Your theme is: ${theme}`;
}

console.log(showMyInfo());
console.log(showMyInfo('abdo'));
console.log(showMyInfo('abdo', 'backend engineer', 'Black'));