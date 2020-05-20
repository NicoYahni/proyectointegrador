var express = require('express');
var router = express.Router();

const controller = require('../Controllers/controladorViews')
    

router.get("/", controller.home);
router.get("/popular", controller.popular);
router.get("/upcoming", controller.upcoming);
router.get("/actors", controller.actors);
router.get("/generos", controller.generos);
router.get("/favoritos", controller.favoritos);
router.get("/login", controller.login);


// HTTP://localhost:3000/actoresdetalles


router.get('/actoresdetalles', controller.actoresdetalles);

module.exports = router;
