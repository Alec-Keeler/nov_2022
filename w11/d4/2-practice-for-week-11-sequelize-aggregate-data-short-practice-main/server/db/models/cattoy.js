'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CatToy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CatToy.belongsTo( // JOIN Cats ON (CatToys.catId = Cats.id)
        models.Cat, 
        { foreignKey: 'catId' }
      );

      CatToy.belongsTo( // JOIN Toys ON (CatToys.toyId = Toys.id)
        models.Toy, 
        { foreignKey: 'toyId' }
      );
    }
  };
  CatToy.init({
    catId: DataTypes.INTEGER,
    toyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CatToy',
  });
  return CatToy;
};