export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("barcode") !== "undefined"
      ? localStorage.getItem("barcode")
      : localStorage.clear();

  return userInfo;
};
