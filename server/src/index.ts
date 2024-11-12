import express from "express";

const app = express();
const PORT: number = 5000;

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started on PORT = ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();