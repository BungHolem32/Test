const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://ilan:ilan@localhost:3306/worthy');

const Option = sequelize.define('option', {
  // attributes
  stone_type_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false
  },
  group: {
    type: Sequelize.STRING(255)
    // allowNull defaults to true
  },
  name:{
    type:Sequelize.STRING(255)
  },
  level:{
    type:Sequelize.INTEGER(11)
  },
  worth:{
    type:Sequelize.INTEGER
  }
}, {
  timestamps:false
});

export default Option;