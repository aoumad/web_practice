// making an alias
type StringOrNumber = string | number;
type Object_greeting = {name: string, uid: StringOrNumber};

const LogDetails = (uid: StringOrNumber, item: string) =>
{
    console.log(`${item} has uid of ${uid}`);
}

const greeting = (user: Object_greeting) =>
{
    console.log(`${user.name} says hello!!!`);
}