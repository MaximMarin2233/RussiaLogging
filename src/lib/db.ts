import mysql from 'mysql2/promise';

const baseConfig = {
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

export const dbConnections: Record<number, mysql.Pool> = {
  1: mysql.createPool({
    host: process.env.DB_HOST_MAIN,
    ...baseConfig
  }),

  2: mysql.createPool({
    host: process.env.DB_HOST_1,
    ...baseConfig
  })
};
