export const logoutUser = () => {
  const cookieName = "loggedUser";
  localStorage.removeItem("auth");
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};
 