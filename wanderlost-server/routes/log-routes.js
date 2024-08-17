const express = require("express");
const { isAuth } = require("../middlewares/auth");
const upload = require("../middlewares/upload");
const { addLogs,getAllLogs,getMyLogs,updateLog,getSingleLog,deleteLog } = require("../controllers/log-controller");
const router = express.Router();


router.get("/logs", getAllLogs);

router.post("/addlogs",isAuth,upload.single("logImage"), addLogs);

router.get("/mylog", getMyLogs);

router.put("/logs/:id", updateLog);

router.get("/logs/:id", getSingleLog);

router.delete("/logs/:id", deleteLog);

module.exports = router;
