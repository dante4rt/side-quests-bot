const axios = require('axios');

async function getTasks(userId, bearerToken) {
  try {
    const { data } = await axios({
      url: `https://lb.backend-sidequest.rcade.game/users/${userId}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    const tasksToClear = Object.values(data.user.quests);

    const uniqueTaskIds = data.quests.reduce((uniqueIds, quest) => {
      if (!tasksToClear.includes(quest._id)) {
        uniqueIds.push(quest._id);
      }
      return uniqueIds;
    }, []);

    return uniqueTaskIds;
  } catch (error) {
    console.log('Error in Get Tasks: ' + error.response.data.message);
    return [];
  }
}

module.exports = getTasks;
