import express from 'express';
import categoryService from '../services/category.service.js';

const router = express.Router();
router.get('/', async function (req, res) {
  const list = await categoryService.findAll();
  res.render('vwCategory/list', {
    list: list,
    empty: list.length === 0
  });
})

router.get('/add', function (req, res) {
  res.render('vwCategory/add');
})

router.post('/add', async function (req, res) {
  // console.log(req.body);
  // const entity = {
  //   CatName: req.body.txtCatName
  // }
  const ret = await categoryService.add(req.body);
  console.log(ret); // inserted id

  res.render('vwCategory/add');
})

// admin/categories/edit?id=6
router.get('/edit', async function (req, res) {
  const id = req.query.id || 0;
  const category = await categoryService.findById(id);
  if (!category) {
    return res.redirect('/admin/categories');
  }

  res.render('vwCategory/edit', {
    category: category
  });
})

router.post('/del', async function (req, res) {
  await categoryService.del(req.body.CatID);
  res.redirect('/admin/categories');
})

router.post('/patch', async function (req, res) {
  await categoryService.patch(req.body);
  res.redirect('/admin/categories');
})

export default router;