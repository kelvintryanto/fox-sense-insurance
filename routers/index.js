const PolicyController = require("../controllers/policyController");
const ProfileController = require("../controllers/profileController");
const UserController = require("../controllers/userController");
const { isAuthenticated, authorizeRole, validatePassword } = require("../helpers/isAuthenticated");

const router = require("express").Router();

// default untuk login di dalam user
router.get("/", UserController.showLandingPage);

//  === User ===
router.get("/register", UserController.createUserForm);
router.post("/register", validatePassword, UserController.createUser);
router.get("/login", UserController.readUser);
router.post("/login", UserController.loginUser);

//  * register akan bersamaan dengan pembuatan profileId dan roleId
//  * untuk pembuatan otomatis roleId = [1,2], kalau 1 => "Customer", kalau 2 => Agent
//  * router.post("/register", UserController.createUser);
//  **/

// router ini berguna untuk masuk ke link changeemailpassword untuk membuat email dan password
// router.get("/changeemailpassword", isAuthenticated, UserController.updateUserForm);
// router.post("/changeemailpassword", isAuthenticated, UserController.updateUser);
// router.get("/register", UserController.createUserForm);
// router.get("/changePassword", UserController.changePassword);
// register akan bersamaan dengan pembuatan profileId dan roleId
// untuk pembuatan otomatis role default = Customer
// router.post("/register", UserController.createUser);
// router.get("/changePassword", UserController.updateUserForm);
// router.post("/changePassword", UserController.updateUser);
// harus diingat bahwa agent tidak bisa delete dirinya sendiri karena seperti super admin
// router.get("/delete", UserController.deleteUser);

//   === policy ===
router.get("/agent/policies/read", isAuthenticated, authorizeRole("Agent"), PolicyController.readPolicy);
// router.get("/user/policy/read/:profileId", PolicyController.readPolicyByProfileId);
// router.get("/user/policy/create");
// router.post("/user/policy/create");
// router.get("/user/policy/edit");
// router.post("/user/policy/edit");

//  === Agent Profile & User Profile ===
router.get("/profile", isAuthenticated, ProfileController.readProfile);
// post create Agent dan User dibuat otomatis, ketika ada yang createUser
// router.post("/profile/create/:userId", ProfileController.createUser);
// get create profile tidak ada karena sudah dibuatkan otomatis profile Idnya serial dan diisi hanya dengan userId
router.get("/profile/update", isAuthenticated, ProfileController.updateProfileForm);
router.post("/profile/update", ProfileController.updateProfile);
// get tidak ada karena delete Profile sama saja dengan deleteUser
router.get("/logout", UserController.logout);

module.exports = router;
