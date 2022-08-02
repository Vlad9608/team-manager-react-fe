import axios from 'axios';

const teamsBaseURL = 'http://localhost:8000/teams';
const playersBaseURL = 'http://localhost:8000/players';
const usersBaseURL = 'http://localhost:8000/users';

export const REST_TEAMS = axios.create({
  baseURL: teamsBaseURL,
  timeout: 100000,
  headers: {
    'X-engage-initiator': 'frontend',
    'Content-Type': 'application/json',
  },
});

export const REST_PLAYERS = axios.create({
  baseURL: playersBaseURL,
  timeout: 100000,
  headers: {
    'X-engage-initiator': 'frontend',
    'Content-Type': 'application/json',
  },
});

export const REST_USERS = axios.create({
  baseURL: usersBaseURL,
  timeout: 100000,
  headers: {
    'X-engage-initiator': 'frontend',
    'Content-Type': 'application/json',
  },
});