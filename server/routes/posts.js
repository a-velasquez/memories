import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
	res.send("IT WORKED!")
})

export default router
