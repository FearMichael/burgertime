module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Burgers", {
        name: {
            type:  DataTypes.STRING,
            validate: {
                is: /^[a-zA-Z\s]*$/,
                len: [2,40],
                notEmpty: true
            },
        },
        eaten: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        ingredients: {
            type: DataTypes.TEXT,
            defaultValue: null,
            is: /^[a-zA-Z\s]*$/,
        },
    }, {timestamps: true, paranoid: true})
}