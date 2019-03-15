'use strict'
module.exports = (sequelize, DataTypes) => {
  const blog = sequelize.define(
    'blog',
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      images: DataTypes.JSON
    },
    {
      underscored: true
    }
  )
  return blog
}
