'use strict';


module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        first_name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        last_name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        phone: {
            allowNull: false,
            type: DataTypes.STRING
        },
        full_address: {
            allowNull: false,
            type: DataTypes.STRING
        },
        ssnHash: {
            allowNull: true,
            type: DataTypes.CHAR(64)
        }
    }, {tableName: "user",
        defaultScope: {
            rawAttributes: {
                exclude: ["ssnHash"]
            }
        }
    });

    return User;
};
