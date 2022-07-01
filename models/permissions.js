// CREATE TABLE permissions
// (
//     id serial NOT NULL CONSTRAINT permissions_pk PRIMARY KEY,
//     name character varying(255) NOT NULL,
//     is_active boolean NOT NULL DEFAULT true,
//     is_deleted boolean NOT NULL DEFAULT false,
//     created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
//     updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
// )

module.exports = (sequelize, DataTypes) => {
    let Permissions = sequelize.define('Permissions', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date()
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date()
        }
    }, {
        tableName: 'permissions',
        timestamps: false
    });

    return Permissions;
}