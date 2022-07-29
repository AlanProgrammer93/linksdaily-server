
import express from "express";

const router = express.Router();

// controllers
const {
    postLink,
    links,
    viewCount,
    link,
    unlink,
    linkDelete,
    linksCount
} = require("../controllers/link");
const { requireSignin } = require("../controllers/auth")

router.post("/post-link", requireSignin, postLink);
router.get("/links/:page", links);
router.put("/view-count/:linkId", viewCount);
router.put("/link", requireSignin, link);
router.put("/unlink", requireSignin, unlink);
router.delete("/link-delete/:linkId", requireSignin, linkDelete);
router.get("/links-count", linksCount);

module.exports = router;
