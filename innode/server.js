var https   = require("https");
var fs      = require("fs");
const express = require('express');
const app = express();
const PORT=9000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))


function generateInvoice(invoice, filename, success, error) {
    var postData = JSON.stringify(invoice);
    var options = {
        hostname  : "invoice-generator.com",
        port      : 443,
        path      : "/",
        method    : "POST",
        headers   : {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(postData)
        }
    };

    var file = fs.createWriteStream(filename);

    var req = https.request(options, function(res) {
        res.on('data', function(chunk) {
            file.write(chunk);
        })
        .on('end', function() {
            file.end();

            if (typeof success === 'function') {
                success();
            }
        });
    });
    req.write(postData);
    req.end();

    if (typeof error === 'function') {
        req.on('error', error);
    }
}


app.post('/createIn',async(req,res)=>{
    const Invoice= req.body.Invoice;

    generateInvoice(Invoice, 'Created.pdf', function() {
        console.log("Saved invoice to invoice.pdf");
    }, function(error) {
        console.error(error);
    });

    res.send("PDF has been Generated");
    
})

app.listen(PORT, () => {
    console.log(`Server Connected Successfully on ${PORT}`);
})