const axios = require('axios');

async function clearTask(userId, taskId, bearerToken) {
  try {
    const { data } = await axios({
      url: `https://lb.backend-sidequest.rcade.game/users/${userId}/quests/${taskId}`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    console.log(
      `Task with ID ${taskId} has been cleared! Your points now:`,
      data.user.points
    );
  } catch (error) {
    console.log('Error in Clear Task: ' + error.response.data.message);
  }
}

module.exports = clearTask;
