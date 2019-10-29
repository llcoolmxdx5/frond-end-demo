// mothod = fetch 报错 跨域
async function ajax (url = '', data = {}, type = 'GET', method = 'fetchs'){
    // 整理表单数据
    type = type.toUpperCase();
    let sendData;
    if (type === 'GET') {
        let _data = [];
        Object.keys(data).forEach(key => {
            _data.push(key + '=' + data[key])
        });
        let baseUrl = 'http://10.9.42.247:4000/api/v1';
        url = baseUrl + url + '?' + _data.join('&')
    } else {
        sendData = JSON.stringify(data)
    }
    // 创建ajax提交对象

    if (window.fetch && method === 'fetch') {
        let reqConfig = {
            credentials: 'include',
            method: type,
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            mode: 'cors',
            cache: 'force-cache'
        };
        let response, responseJson;
        try {
            response = await fetch(url, reqConfig);
            responseJson = await response.json();
            return responseJson
        } catch(error) {
            throw new Error(error)
        }
    } else {
        return new Promise((resolve, reject) => {
            let reqObj;

            if (window.XMLHttpRequest) {
                reqObj = new XMLHttpRequest()
            } else {
                reqObj = new ActiveXObject('Microsoft.XMLHTTP')
            }

            reqObj.open(type, url, true);
            reqObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
            reqObj.send(sendData);

            reqObj.onreadystatechange = () => {
                if (reqObj.readyState === 4) {
                    if (reqObj.status === 200) {
                        let res = reqObj.response;
                        if (typeof res !== 'object') {
                            res = JSON.parse(res)
                        }
                        resolve(res)
                    } else {
                        reject(reqObj)
                    }
                }
            }
        })
    }
}
export default ajax