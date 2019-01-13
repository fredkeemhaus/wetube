import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400); // 잘못된 요청이기에, 비밀번호 저장 묻지 않기
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do: Register User
    // To Do: Log user in
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log in" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  //To Do: Process Log Out
  res.redirect(routes.home);
};

export const usersDetail = (req, res) =>
  res.render("usersDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
