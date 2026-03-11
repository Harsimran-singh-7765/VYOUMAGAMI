const https = require('https');

const urls = [
  'https://assets9.lottiefiles.com/packages/lf20_sSf5qO.json',
  'https://assets3.lottiefiles.com/packages/lf20_xsnhtpzx.json',
  'https://assets6.lottiefiles.com/packages/lf20_yzoqyyqf.json'
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(`${url}: ${res.statusCode}`);
  }).on('error', (e) => {
    console.error(e);
  });
});
