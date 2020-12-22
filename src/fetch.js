const fetch = require("node-fetch");
fetch("https://registry.npm.taobao.org/")
    .then(value => {
        return value.json();
    }).then(json => {
    console.log(json);
})
    .catch(reason => {
        console.log(reason);
        debugger
    });



