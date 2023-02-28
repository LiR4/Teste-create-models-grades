
    const Sequelize = require('sequelize');
    const database = require('../config/dbConfig');
    const gestorModels = require('./gestorModels');
    const medicoModels = require('./medicoModels');
    
    const gradeUser = database.definer(gradeTable, {
    idend_atl:{
        type : Sequelize.INTEGER(4),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    cep : Sequelize.CHAR(8),
    logradouro : Sequelize.STRING(100),
    num_end_atl : Sequelize.STRING(7),
    bairro : Sequelize.STRING(100),
    complemento : Sequelize.STRING(50),
    pt_ref : Sequelize.STRING(50),
    cidade : Sequelize.STRING(60),
    uf : Sequelize.CHAR(2),
    pais : Sequelize.STRING(30),
    tipo_end_atl : Sequelize.ENUM('RESIDENCIAL', 'COMERCIAL'),
    id_end_atl : {
        type : Sequelize.INTEGER(4),
        references : {
            model : atletaModels,
            key : 'idatleta'
        }
    }})
    
    database.sync()
    module.export = gradeUser