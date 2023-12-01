import db from '../utils/db.js';

export default {
  findAll() {
    // return [
    //   { CatID: 1, CatName: 'Laptop' },
    //   { CatID: 2, CatName: 'Phone' },
    //   { CatID: 3, CatName: 'Clothes' },
    //   { CatID: 4, CatName: 'Jewery' },
    // ];
    return db('categories');
  },
  add(entity) {
    return db('categories').insert(entity);
  },
  findById(id) {
    return db('categories').where('CatID', id).first();
  },
  del(id) {
    return db('categories').where('CatID', id).del();
  },
  patch(entity) {
    const id = entity.CatID;
    delete entity.CatID;
    return db('categories').where('CatID', id).update(entity);
  },
};
