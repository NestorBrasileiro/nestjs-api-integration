import { Sequelize } from 'sequelize-typescript';

const mySqlPort: number = Number.parseInt(process.env.MYSQL_PORT) || 3306;

export const mySqlProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.MYSQL_URL,
        port: mySqlPort,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
      });
      sequelize.addModels([]);

      await sequelize.sync();
      return sequelize;
    },
  },
];
