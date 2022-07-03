import { Sequelize } from 'sequelize-typescript';

const mySqlPort: number = Number.parseInt(process.env.MYSQL_PORT) || 3306;
const postgresSqlPort: number =
  Number.parseInt(process.env.POSTGRES_PORT) || 5432;

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

export const postgresSqlProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.POSTGRES_URL,
        port: postgresSqlPort,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
      });
      sequelize.addModels([]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
