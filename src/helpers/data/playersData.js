import axios from 'axios';

import utils from '../utils';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPlayersByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/players.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFireBaseCollection(data)))
    .catch((err) => reject(err));
});

const deletePlayer = (playerId) => axios.delete(`${baseUrl}/players/${playerId}.json`);

const createPlayer = (newPlayer) => axios.post(`${baseUrl}/players.json`, newPlayer);

const updatePlayer = (playerId, updatedPlayer) => axios.put(`${baseUrl}/players/${playerId}.json`, updatedPlayer);

export default {
  getPlayersByUid, deletePlayer, createPlayer, updatePlayer,
};
