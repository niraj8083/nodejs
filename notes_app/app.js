const fs = require('fs')
fs.writeFileSync('notes.txt','This file was created by nodejs for training!')

const fs1 = require('fs')
fs1.appendFileSync('notes.txt',' I am appending this file into notes')