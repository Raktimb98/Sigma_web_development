var slugify = require('slugify');
let slug = slugify('Some string to slugify')
console.log(slug);

let slug2 = slugify('Another string to slugify','_')
console.log(slug2);
