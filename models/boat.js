module.exports = (sequelize, DataTypes) => {
    const boat = sequelize.define('boat', {
        name: {
            type: DataTypes.STRING(45), 
            validate: {
                notContains:'boat'

            }
        },
        color: {
            type: DataTypes.STRING(45)
        }
    })
    boat.associate = (models) => {
        boat.belongsToMany(models.sailor, { through: models.reserve })
    }
    return boat;
}