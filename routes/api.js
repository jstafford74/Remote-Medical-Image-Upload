const router = require("express").Router();
const imageController = require("../controllers/imageController")

router.route("/images")
    .post(imageController.submitImage)
    .get(imageController.getImages)
// .delete(imageController.deleteImage);

router.route("/images/:filename")
    .get(imageController.getImage);

module.exports = router;
