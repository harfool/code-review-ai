import express from 'express'
import codeReview from '../controllers/codeReview.controller.js'

const router = express.Router()

router.get("/get-response" , codeReview)

export default router