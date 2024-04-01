require('dotenv').config();
const getTasks = require('./getTasks');
const clearTask = require('./clearTask');

const USER_ID = process.env.TOKEN.split('-')[0];
const MY_BEARER = process.env.TOKEN;

(async () => {
  try {
    const tasksToClear = await getTasks(USER_ID, MY_BEARER);

    for (const taskId of tasksToClear) {
      await clearTask(USER_ID, taskId, MY_BEARER);
    }

    console.log(
      'All tasks have been cleared, congrats! Subscribe: https://t.me/HappyCuanAirdrop'
    );
  } catch (error) {
    console.log(
      'Error in Clear Tasks: ' +
        (error.response?.data?.message || error.response)
    );
  }
})();
