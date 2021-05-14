import { all, fork, put, delay, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
} from "../reducers/user";

function logInAPI(data) {
  return axios.post("/api/login");
}

function* logIn(action) {
  try {
    yield delay(1000); //서버가 없기 때문에 임시 적용
    // const result = yield call(logInAPI, action.data);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data,
    });
  }
}

function logOutAPI(data) {
  return axios.post("/api/logOut");
}

function* logOut(action) {
  try {
    yield delay(1000);
    // const result = yield call(logOutAPI);
    yield put({
      type: "LOG_OUT_SUCCESS",
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: err.response.data,
    });
  }
}

function signUpAPI() {
  return axios.post("/api/logOut");
}

function* signUp() {
  try {
    yield delay(1000);
    // const result = yield call(signUpAPI);
    yield put({
      type: "SIGN_UP_SUCCESS",
    });
  } catch (err) {
    yield put({
      type: "SIGN_UP_FAILURE",
      data: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest("LOG_IN_REQUEST", logIn);
}

function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST", logOut);
}

function* watchSignUp() {
  yield takeLatest("SIGN_UP_REQUEST", signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignUp)]);
}
