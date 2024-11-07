const PolicyController = require("../controllers/policyController");
const ProfileController = require("../controllers/profileController");
const UserController = require("../controllers/userController");

const router = require("express").Router();

// default untuk login di dalam user
router.get("/", (req, res) => {
  res.redirect("/login");
});

//  === Customer ===
router.get("/login", UserController.readUser);
/* tidak ada register, karena pembuatan email dan address nanti jika user diberikan link melalui twilio
 * router.get("/register", UserController.createUserForm);
 * register akan bersamaan dengan pembuatan profileId dan roleId
 * untuk pembuatan otomatis roleId = [1,2], kalau 1 => "Customer", kalau 2 => Agent
 * router.post("/register", UserController.createUser);
 **/

// router ini berguna untuk masuk ke link changeemailpassword untuk membuat email dan password
router.get("/changeemailpassword", UserController.updateUserForm);
router.post("/changeemailpassword", UserController.updateUser);
// router.get("/register", UserController.createUserForm);
router.get("/changePassword", UserController.changePassword);
// register akan bersamaan dengan pembuatan profileId dan roleId
// untuk pembuatan otomatis roleId = [1,2], kalau 1 => "Customer", kalau 2 => Agent
// router.post("/register", UserController.createUser);
// router.get("/changePassword", UserController.updateUserForm);
// router.post("/changePassword", UserController.updateUser);
// harus diingat bahwa agent tidak bisa delete dirinya sendiri karena seperti super admin
// router.get("/delete", UserController.deleteUser);

//   === policy ===
// router.get("/agent/policies/read", PolicyController.readPolicy);
// router.get("/user/policy/read/:profileId", PolicyController.readPolicyByProfileId);
// router.get("/user/policy/create");
// router.post("/user/policy/create");
// router.get("/user/policy/edit");
// router.post("/user/policy/edit");

//  === Agent Profile & User Profile ===
// ditaruh di bawah karena di segment ketiga ada parameter
router.get("/profile/read/:userId", ProfileController.readProfile);
// post create Agent dan User dibuat otomatis, ketika ada yang createUser
// router.post("/profile/create/:userId", ProfileController.createUser);
// get create profile tidak ada karena sudah dibuatkan otomatis profile Idnya serial dan diisi hanya dengan userId
// router.get("/profile/update/:userId", ProfileController.updateUserForm);
// router.post("/profile/update/:userId", ProfileController.updateUser);
// get tidak ada karena delete Profile sama saja dengan deleteUser

module.exports = router;
