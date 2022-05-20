import dotenv from 'dotenv';

dotenv.config();

export const config = {
    PORT: process.env.PORT,
    MYSQL_DATABASE_NAME: process.env.MYSQL_DATABASE_NAME,

};
