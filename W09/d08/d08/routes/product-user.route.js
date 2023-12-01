import express from 'express';
import productServices from '../services/product.service.js';
const router = express.Router();

// products/byCat/8
router.get('/byCat/:id', async (req, res) => {
  const catId = req.params.id || 0;
  const list = await productServices.findByCatId(catId);
  res.render('vwProduct/byCat', {
    product: list,
    empty: list.length === 0,
  });
});

export default router;
