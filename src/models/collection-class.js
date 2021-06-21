'use strict'

// Provide a layer of logic between Express Router handlers and Postgres Operations.

class Collection {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  // spread syntax, this allows us to create a new object literal from the keys / values from the options object
  // this allows us to keep the (options) passed into the read method and the parameter for the model as seperate entities.
  read(id, options = {}) {
    let modelParams = {...options};
    if(id){
      modelParams.where = {id:id};
      return this.model.findOne(modelParams);
    }else {
      return this.model.findAll(modelParams);
    }
  }

  create(json) {
    return this.model.create(json);
  }

  async update(id, json) {
    let row = await this.model.findOne({
      where: {
        id: id,
      }
    });

    let updatedRow = await row.update(json);
    return updatedRow;
  }

  delete(id) {
    return this.model.destroy({
      where: {
        id: id,
      }
    })
  }
//  the things sequelize needs to create an association betwen models like (car and make)
  createAssociation (type, model, options){
    // type == (hasMany) || (belongsToMany)
    // model ==  some sequelize model
    // options {foreignKey, sourceKey}
    try {
      this.model[type](model, options);
    }catch(e){
      console.log(e);
    }
  }
}

module.exports = Collection;
