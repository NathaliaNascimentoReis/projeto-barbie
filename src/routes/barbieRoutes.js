import express from "express";
import {
  getAll,
  getById,
  createBarbie,
  deletarBarbie,
  updateBarbie
} from "../controllers/barbieController.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", createBarbie);
router.delete("/:id", deletarBarbie);

export default router;
