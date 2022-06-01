export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();
  return userInfo;
};

export const setUser = (data) => {
  const userInfo = localStorage.setItem("user", JSON.stringify(data));
  return userInfo;
};
