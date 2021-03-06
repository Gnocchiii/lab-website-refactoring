
import { GET_LOGIN, GET_LOGIN_OUT, GET_REGISTER } from "../actionTypes";
import { API } from '../common/index'

const getLogin = (result) => ({
    type: GET_LOGIN,
    result
});

const getLoginOut = () => ({
    type: GET_LOGIN_OUT,

});

const getRegister = () => ({
    type: GET_REGISTER,

});

export const getLoginApi = (values) => {
    return dispatch => {
        API.getLogin(values)
            .then(res => {
                const result = res.data;
                dispatch(getLogin(result));

            })
            .catch(() => {
                console.log('error')
            });
    };
};


export const getLoginOutApi = () => {
    return dispatch => {

        API.getLoginOut()
            .then((res) => {
                const result = res.result.error_code
                dispatch(getLoginOut(result));
            })
            .catch(() => {
                console.log('error')
            });
    };
};


export const getRegisterApi = (values) => {
    return dispatch => {
        API.getRegister(values)
            .then(() => {
                dispatch(getRegister());
            })
            .catch(() => {
                console.log('error')  //为什么抛出错误的原因不知道
            });
    };
};
