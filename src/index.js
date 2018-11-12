import dva from 'dva';
import './index.css';
import {createBrowserHistory as createHistory}  from 'history';
const app = dva({
  history: createHistory(),
});
// // 1. Initialize
// const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/counter').default);
app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
