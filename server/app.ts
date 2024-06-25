import express from 'express';
import dotenv from 'dotenv'
import sequelize from './dataAccess/dataAccess'
import { Users } from './models/users';
import setupSwagger from './swaggerConfig';
import usersController from './controllers/usersController';
dotenv.config()
const port=process.env.PORT||8000
const app= express();
app.use(express.json());

setupSwagger(app);
app.use('/users', usersController);

app.listen(port, async () => {
    console.log(`Server is running at http://localhost:${port}`);

    // בדיקת התחברות למסד נתונים
    // try {
    //     await sequelize.authenticate();
    //     console.log('Connection has been established successfully.');
    // } catch (error) {
    //     console.error('Unable to connect to the database:', error);
    // }
});

