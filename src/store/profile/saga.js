import actions from './actions';
import { takeLatest, put, fork, all } from 'redux-saga/effects';
import { getRamDomUser } from 'services/users.services';

export function* updateProfileSaga() {
	yield takeLatest(actions.UPDATE_PROFILE_REQUEST, function* () {
		try {
			const res = yield getRamDomUser();
			if (res && res.status === 200) {
				yield put({ type: actions.UPDATE_PROFILE_SUCSSES, profile: res.data.results[0].user });
			}
		} catch (error) {}
	});
}

export default function* rootSaga() {
	yield all([fork(updateProfileSaga)]);
}
