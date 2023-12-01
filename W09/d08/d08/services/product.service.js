import db from '../utils/db.js';

export default {
  findAll() {
    return db('products');
  },
  add(entity) {
    return db('products').insert(entity);
  },
  findById(id) {
    return db('products').where('ProdID', id).first();
  },
  del(id) {
    return db('products').where('ProdID', id).del();
  },
  patch(entity) {
    const id = entity.ProdID;
    delete entity.ProdID;
    return db('products').where('ProdID', id).update(entity);
  },
  findByCatId(id) {
    return db('products').where('CatID', id);
  },
};
