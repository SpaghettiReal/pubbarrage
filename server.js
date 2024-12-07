var express = require("express")
var request = require("request")
var app = express()
var port = 80

app.use(express.json())

app.post("/ProxyGet", function(req, res){
    if (!req.body.url){
        res.send("No url provided")
        return
    }

    var URL = Request.body.url
    request(URL).pipe(res)

})

app.listen(port)