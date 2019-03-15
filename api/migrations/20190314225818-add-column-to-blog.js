'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('blogs', 'images', {
      allowNull: true,
      type: Sequelize.JSON
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('blogs', 'images')
  }
}
