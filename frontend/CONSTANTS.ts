let API = 'http://localhost:3000';
let covidAPI = `https://api.covid19india.org/states_daily.json`;

export const CONSTANTS = {
  SIGNUP() {
    return `${API}/signup`;
  },
  LOGIN() {
    return `${API}/login`;
  },

  TRACKCOVID() {
    return `${covidAPI}`;
  },
};
