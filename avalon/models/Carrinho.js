module.exports = (sequelize, DataTypes) => {
    const Carrinho = sequelize.define(
        "Carrinho",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            quantidade: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
       
            livros_id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false
            },
            usuarios_id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false
            },
        },

        {
            tableName: "carrinho",
            timestamps: false,
            createdAt: false,
            updatedAt: false
        }
    );

    Carrinho.associate = (models) => {
        Carrinho.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'usuarios_id'
        })

        Carrinho.belongsTo(models.Livro, {
            as: 'livros',
            foreignKey: 'livros_id'
        })
    };

    Carrinho.getTotal = async () => {
        const items = await Carrinho.findAll();
        let total = 0;

        items.forEach(item => {
            total += item.preco * item.quantidade;
        });

        return total;
    };

    return Carrinho;
};