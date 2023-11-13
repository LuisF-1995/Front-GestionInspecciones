"use strict";
exports.id = 379;
exports.ids = [379];
exports.modules = {

/***/ 53210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ API_GESTION_INSPECCIONES_URL)
/* harmony export */ });
/* unused harmony export API_ADMINS_GESTION_INSPECCIONES */
const API_GESTION_INSPECCIONES_URL = "http://localhost:8080";
const API_ADMINS_GESTION_INSPECCIONES = "http://localhost:8090";


/***/ }),

/***/ 24018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kw: () => (/* binding */ sendPostRequest),
/* harmony export */   Tk: () => (/* binding */ sendGetRequest),
/* harmony export */   iC: () => (/* binding */ sendPutRequest)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93258);

async function sendGetRequest(endpoint, token) {
    let headers = {};
    if (token && token.length > 0) {
        headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
    } else {
        headers = {
            "Content-Type": "application/json"
        };
    }
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(endpoint, headers);
        return response.data;
    } catch (error) {
        return error;
        throw new Error("No se pudo obtener la informaci\xf3n de la API");
    }
}
async function sendPostRequest(endpoint, bodyData, token) {
    try {
        let headers = {};
        if (token && token.length > 0) {
            headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            };
        } else {
            headers = {
                "Content-Type": "application/json"
            };
        }
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(endpoint, bodyData, headers);
        return response.data;
    } catch (error) {
        return error;
        console.error("Error al enviar la solicitud POST:", error);
        throw error;
    }
}
async function sendPutRequest(endpoint, dataUpdate, token) {
    let headers = {};
    if (token && token.length > 0) {
        headers = {
            "Content-Type": "application/json",
            "Origin": "http://localhost:3000",
            "Authorization": `Bearer ${token}`
        };
    } else {
        headers = {
            "Content-Type": "application/json",
            "Origin": "http://localhost:3000"
        };
    }
    axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.put(endpoint, dataUpdate, headers).then((response)=>{
        return response.data;
    }).catch((error)=>{
        return error;
    });
}


/***/ })

};
;