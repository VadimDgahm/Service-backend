import express,{Request, Response} from 'express'
const app = express();
const port = process.env.PORT || 3000;

// Маршрут для главной страницы
app.get('/', (req: Request, res: Response) => {
  res.send('Привет, мир,vbh');
});


// Слушаем порт и запускаем сервер
app.listen(port, () => {
  console.log(`Сервер запущен на пор ${port}`);
});