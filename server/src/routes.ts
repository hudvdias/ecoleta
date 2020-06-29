import express from "express"
import PointsController from "./controllers/PointsController"
import ItemsController from "./controllers/ItemsController"
import multer from "multer"
import multerConfig from "./config/multer"
import celebrate from "./validators/celebrate"

const routes = express.Router()
const upload = multer(multerConfig)
const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get("/items", itemsController.index)
routes.get("/points", pointsController.index)
routes.post("/points", upload.single("image"), celebrate, pointsController.create)
routes.get("/points/:id", pointsController.show)

export default routes