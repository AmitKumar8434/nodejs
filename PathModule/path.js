const path = require('path');

console.log(path.dirname('C:/Users/Amit kumar/nodejs/nodeCh/PathModule/path.js'));
console.log(path.extname('C:/Users/Amit kumar/nodejs/nodeCh/PathModule/path.js'));
console.log(path.basename('C:/Users/Amit kumar/nodejs/nodeCh/PathModule/path.js'));
const myPath = path.parse('C:/Users/Amit kumar/nodejs/nodeCh/PathModule/path.js');
console.log(myPath.root);



