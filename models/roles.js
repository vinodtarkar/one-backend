'use strict';

// CREATE TABLE roles
// (
//     id serial NOT NULL CONSTRAINT roles_pk PRIMARY KEY,
//     name character varying(255),
//     description character varying(255) NULL,
//     permission_type character varying(255),
//     permissions json NULL,
//     created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
//     updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
// );

module.exports = (sequelize, DataTypes) => {
    let Roles = sequelize.define('Roles', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        permissions: {
            type: DataTypes.JSON,
            allowNull: true
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
        tableName: 'roles',
        timestamps: false
    });

    return Roles;
}