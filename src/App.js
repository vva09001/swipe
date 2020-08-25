import React, { Suspense } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import AppRouter from 'routes';
import reducers from 'store/reducers';
import saga from 'store/saga';
import 'styles/index.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

const App = () => {
	return (
		<Provider store={store}>
			<Suspense fallback="Loading...">
				<AppRouter />
			</Suspense>
		</Provider>
	);
};

export default App;
