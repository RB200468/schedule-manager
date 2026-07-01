import { Router } from "express";

const router = Router();
router.get("/", (req, res) => 
    res.json([{ code: 200, message: "Api is working!" }])
);

export default router;