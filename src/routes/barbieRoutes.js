import express from "express";
import { getAll, getById, createBarbie} from "../controllers/barbieController.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", createBarbie);

export default router;