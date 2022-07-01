'use strict';

// CREATE TABLE users
// (
//     id SERIAL NOT NULL CONSTRAINT users_pk PRIMARY KEY,
//     name character varying(255),
//     email character varying(255) CONSTRAINT users_email_key UNIQUE,
//     password character varying(128),
//     phone character varying(22) NULL,
//     gender integer NULL,
//     role_id integer,
//     status boolean NOT NULL DEFAULT true,
//     created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
//     updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
// );

module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        role_id: {
            type: DataTypes.INTEGER,

        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
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
        tableName: 'users',
        timestamps: false
    });

    return User;
}