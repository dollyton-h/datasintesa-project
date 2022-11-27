import axios from "axios";

export const USER = {
  userList: `https://randomuser.me/api/`
}

export function apiGetList(params) {
  return axios
    .get(USER.userList + params)
    .then((response) => ({ response }))
    .catch((err) => {
      return { error: err.response };
    });
}