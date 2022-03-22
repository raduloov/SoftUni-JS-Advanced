import * as api from './api.js';

const endpoints = {
  teams: '/data/teams',
  memebers: '/data/members?where=status%3D%22member%22'
};

export async function getMemebers() {
  return api.get(endpoints.memebers);
}

export async function getAll() {
  return api.get(endpoints.teams);
}
