const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Place model
class Place extends Model {
    
}

Place.init(
    {
        business_id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false
        },
        business_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        business_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        business_map_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        },
        mask_selection: {
            // This info comes in from an option selection... not sure if this is a string or not?
            type: DataTypes.STRING,
            allownull: false,
        }
    },
    {
    sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'place'
    }

);

module.exports = Place;