import mysql from 'mysql2/promise';

const baseConfig = {
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

export const dbConnections: Record<number, mysql.Pool> = {
  0: mysql.createPool({
    host: process.env.DB_HOST_MAIN,
    ...baseConfig
  }),

  1: mysql.createPool({
    host: process.env.DB_HOST_1,
    ...baseConfig
  }),

  2: mysql.createPool({
    host: process.env.DB_HOST_2,
    ...baseConfig
  }),

  3: mysql.createPool({
    host: process.env.DB_HOST_3,
    ...baseConfig
  }),

  4: mysql.createPool({
    host: process.env.DB_HOST_4,
    ...baseConfig
  }),

  5: mysql.createPool({
    host: process.env.DB_HOST_5,
    ...baseConfig
  }),

  6: mysql.createPool({
    host: process.env.DB_HOST_6,
    ...baseConfig
  }),
};
