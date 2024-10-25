const fs = require('fs');
const zlib = require('zlib');

const inputFilePath = './public.gz';
const outputFilePath = 'extracted';

const gzip = zlib.createGunzip();
const input = fs.createReadStream(inputFilePath);
const output = fs.createWriteStream(outputFilePath);

input.pipe(gzip).pipe(output).on('finish', () => {
    console.log('File decompressed successfully.');
});
