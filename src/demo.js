/*const preloadImage = function (path) {
    return new Promise(function (resolve, reject) {
        const image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = path;

        document.getElementById("root").append(image);
        //throw new Error("request timeout..");
    });
};
preloadImage("./webpack.jpg").then((value) => {
    console.log(value);
}).catch((err) => {
});*/


/*
Promise.resolve().then(value => {
    console.log("step1");
}).then(value => {
    console.log("step2");
});
console.log("step3");
*/

/*
setTimeout(function () {
    console.log(3);
}, 0);

Promise.resolve().then(function () {
    console.log(2);
});

console.log(1);
*/

/*
Promise.reject("request timeout").then(value => {console.log(value)}).catch(reason => {
    console.error(reason);
}).catch(reason => {
    console.error(reason);
});
*/
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jquery')(window);
// console.log($); //测试jquery是否可以正常工作
// Promise.resolve().then(() => console.log("step1"))
//     .then(() => {console.log("step2"); throw new Error("request timeout");})
//     .then(() => console.log("step3"))
//     .catch(reason => {
//         console.error("step4")
//     });

/*$.getJSON("https://registry.npm.taobao.org/",function(json){
    console.log(json);
    debugger
//要求远程请求页面的数据格式为： ?(json_data) //例如： //?([{"_name":"湖南省","_regionId":134},{"_name":"北京市","_regionId":143}]) alert(json[0]._name);
});*/

Promise.resolve($.getJSON("https://registry.npm.taobao.org/"))
    .then(value => {
        console.log(value);
        debugger
    }).catch(reason => {
    console.error(reason.statusText);
    debugger
});



