const express = require("express");
const router = express.Router();

// product allow vendor and admin --- /api/

router.get("/products/", () => { });

router.post("/products/", () => { });

router.put("/products/:id", () => { });

router.delete("/products/:id", () => { });

router.get("/products/:id", () => { });

router.get("/vender/products", () => { });

router.post("/list?vendor_id=", () => { });

module.exports = router;