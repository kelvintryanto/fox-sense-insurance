const router = require("express").Router();

//  === Agent ===
router.get("/agent");
router.get("/login/agent");
router.post("/register/agent");
router.get("/agent/profile");

//  === Customer === 
router.get("/customer");
router.get("/login/customer");
router.post("/register/customer");
router.get("/customer/profile");

//   === policy ===
router.get("/customer/policies");
router.get("/customer/policies/create");
router.post("/customer/policies/create");
router.get("/customer/policies/edit");
router.post("/customer/policies/edit");
