
import express from "express";

const router = express.Router();

// controllers
const {
    postLink,
    links,
    viewCount,
    link,
    unlink
} = require("../controllers/link");
const { requireSignin } = require("../controllers/auth")

router.post("/post-link", requireSignin, postLink);
router.get("/links", links);
router.put("/view-count/:linkId", viewCount);
router.put("/link", requireSignin, link);
router.put("/unlink", requireSignin, unlink);

module.exports = router;
