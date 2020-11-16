import { config } from './config/config';
import app from './server/express'

app.listen(config.port, () => {
    console.log(`The application has started on port ${config.port}`);
});


export default app;