import express from 'express';
import categoryService from '../services/category.service.js';

const router = express.Router();

router.get('/', async function (req, res) {
  // res.send('Category list');
  categoryService.findAll().then(function (row) {
    console.log(row);
  });
  const list = await categoryService.findAll();
  res.render('vwCategory/list', {
    list: list,
    empty: list.length === 0,
  });
});

router
  .route('/add')
  .get(function (req, res) {
    res.render('vwCategory/add');
  })
  .post(async function (req, res) {
    console.log(req.body);
    const ret = await categoryService.add(req.body);
    console.log(ret);
    res.render('vwCategory/add');
  });

// admin/categories/edit?id=1
router.route('/edit').get(async function (req, res) {
  const id = req.query.id || 0;
  const category = await categoryService.findById(id);
  if (category == null) {
    return res.redirect('/admin/categories');
  }
  res.render('vwCategory/edit', {
    category: category,
  });
});

router.route('/del').post(async function (req, res) {
await categoryService.del(req.body.CatID);
  res.redirect('/admin/categories');
});

router.route('/patch').post(async function (req, res) {
  await categoryService.patch(req.body);
  res.redirect('/admin/categories');
});

export default router;
