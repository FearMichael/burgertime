module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Burgers", {
        name: {
            type:  DataTypes.STRING,
            validate: {
                is: /^[a-z]+$/i,
                len: [2,40],
                notNull: true,
                notEmpty: true
            },
        },
        eaten: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        ingredients: {
            defaultValue: null,
            isAlphanumeric: true,
        }
    })
}