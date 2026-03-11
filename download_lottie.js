const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'lottie');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const files = [
  { url: 'https://assets9.lottiefiles.com/packages/lf20_sSf5qO.json', dest: 'astronaut.json' },
  { url: 'https://assets3.lottiefiles.com/packages/lf20_xsnhtpzx.json', dest: 'tech.json' }
];

files.forEach(file => {
  const fileStream = fs.createWriteStream(path.join(dir, file.dest));
  const options = {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      'Accept': '*/* '
    }
  };

  https.get(file.url, options, (res) => {
    res.pipe(fileStream);
    res.on('end', () => {
      console.log(`Downloaded ${file.dest}`);
    });
  }).on('error', (e) => {
    console.error(`Error downloading ${file.dest}:`, e);
  });
});
