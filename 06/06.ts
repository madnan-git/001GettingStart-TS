//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let per_name : string = "\t\t\t \n Muhammad Adnan Attari \t \n\n";

console.log(`Name with whitespaces:  ${per_name}`);

let strippedName: string = per_name.trim();
console.log(`Stripped name: ${strippedName}`);
