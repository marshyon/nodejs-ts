import express, { Application, Request, Response, NextFunction } from 'express';

const port: number = 5000;

const add = (a: number, b: number): number => {
    return a + b;
};

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    const sum = add(2, 3);
    res.send(`Hello World : ${sum}`);
}
);

app.listen(port, () => {
    console.log('Server started on port : ', port);
});
