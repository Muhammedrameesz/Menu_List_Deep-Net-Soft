const menuRouter = require("express").Router()
const {getMenuItems,BrunchCocktails} = require("../controllers/getMenuItems")

menuRouter.get("/menuList",getMenuItems)
menuRouter.get("/coktails",BrunchCocktails)

module.exports = menuRouter;