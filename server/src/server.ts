import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import helmet from 'helmet';

import routes from './routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(routes);

app.use(errors());

app.listen(process.env.APP_PORT);
