export const getUsers = async () => {
  return fetch(`http://localhost:4000/users`).then((res) => {
    return res.json();
  });
};
export const blockUser = async (id) => {
  return fetch(`http://localhost:4000/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      blocked: true,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.json();
  });
};

export const deleteUser = async (id) => {
  return fetch(`http://localhost:4000/users/${id}`, {
    method: "DELETE",
  });
};
export const searchUser = async (query) => {
  return fetch(`http://localhost:4000/users/search?search=${query}`, {
    method: "GET",
  }).then((res) => {
    return res.json();
  });
};
