import { Router } from "express";

const router = Router();

router.get("/like", (req, res) => {
  req.auth.userId;
});

export default router;
