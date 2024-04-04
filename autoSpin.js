require('dotenv').config();
const axios = require('axios');

const headers = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.6348.198 Safari/537.36',
  'Accept-Encoding': 'gzip, deflate, br, zstd',
  'Content-Type': 'text/plain',
  'sec-ch-ua': '"(Not(A:Brand";v="99", "Chromium";v="124", "Google Chrome";v="124"',
  'sec-ch-ua-mobile': '?0',
  'authorization': `Bearer ${process.env.TOKEN}`,
  'sec-ch-ua-platform': '"macOS"',
  'origin': 'https://sidequest.rcade.game',
  'sec-fetch-site': 'same-site',
  'sec-fetch-mode': 'cors',
  'sec-fetch-dest': 'empty',
  'referer': 'https://sidequest.rcade.game/',
  'accept-language': 'en-US,en;q=0.9'
};

const data = '{}';

const userId = process.env.TOKEN.split('-')[0];

const config = {
  method: 'POST',
  url: `https://lb.backend-sidequest.rcade.game/users/${userId}/quests/1`,
  headers: headers,
  data: data
};

axios.request(config)
  .then(response => {
    const { user, spinIndex } = response.data;
    if (user && user.points !== undefined && spinIndex !== undefined) {
      console.log(`Spin sukses: points saat ini ${user.points}`);
    } else if (response.data.message === "User has already completed this quest") {
      console.log('User has already completed spin');
    } else {
      console.log('Unknown response format.');
    }
  })
  .catch(error => {
    if (error.response && error.response.data && error.response.data.message === "User has already completed this quest") {
      console.log('User has already completed spin');
    } else if (error.response && error.response.data && error.response.data.message) {
      console.log({ message: error.response.data.message });
    } else {
      console.log('Error:', error.message);
    }
  });
