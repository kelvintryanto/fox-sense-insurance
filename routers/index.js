const AgentController = require("../controllers/agentController");
const UserController = require("../controllers/userController");

const router = require("express").Router();

//  === Agent ===
router.get("/agent", AgentController.showAgentHome);

//  === Customer ===
router.get("/login", UserController.loginUser);
router.get("/register", UserController.registerUser);
// router.get("/customer");
// router.get("/customer/profile");

//   === policy ===
// todobynopal
// router.get("/customer/policies");
// router.get("/customer/policies/create");
// router.post("/customer/policies/create");
// router.get("/customer/policies/edit");
// router.post("/customer/policies/edit");

module.exports = router;
