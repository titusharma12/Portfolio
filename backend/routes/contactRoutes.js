import express from "express";
import { sendEmailAndWhatsApp } from "../controllers/contactControllers.js";

const router = express.Router();
router.post("/contact", sendEmailAndWhatsApp);
export default router;
