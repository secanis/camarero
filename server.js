const express = require('express');
const bodyParser = require('body-parser');
const serveIndex = require('serve-index');
const auth = require('http-auth');
const multer = require('multer');
const fs = require('fs');

const app = express();
const router = express.Router();

const config = require('./conf/default.conf.js');

app.use(bodyParser.json())

const uploadDir = `${__dirname}/${config.camarero.uploadPath}`;
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

app.use('/files', express.static(`${__dirname}/${config.camarero.uploadPath}`),
    serveIndex(`${__dirname}/${config.camarero.uploadPath}`, config.staticFiles));
app.use('/vendor/style', express.static(`public/style`));

// init multer to parse multipart/form-data
const m = multer();

router.post('/upload', m.single('file'), (req, res) => {
    const formData = req.body;
    const formFile = req.file;

    if (formFile && formFile.buffer) {
        buffer = Buffer.from(formFile.buffer);
    
        let customPath = formData.path;
        if (!formData.path || formData.path.length === 0) {
            customPath = '';
        }
        // build folder path and create folder if not exist
        const dir = `${__dirname}/${config.camarero.uploadPath}/${customPath}`;
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        // save multer file buffer to a file
        fs.open(`${dir}/${formFile.originalname}`, 'w+', (err, fd) => {
            if (err) {
                throw 'error opening file: ' + err;
            }
    
            fs.write(fd, buffer, 0, buffer.length, null, (err) => {
                if (err) throw 'error writing file: ' + err;
                fs.close(fd, () => {
                    res.send({
                        file: `${config.camarero.uploadPath}/${customPath}/${formFile.originalname}`,
                        message: 'file has been uploaded',
                        status: 'success'
                    });
                })
            });
        });
    } else {
        console.error('could not find uploaded file buffer');
        res.send({
            message: 'could not find uploaded file buffer',
            status: 'error'
        });
    }
});

const basic = auth.basic({ realm: "Camarero Management", file: `${__dirname}/${config.camarero.basicAuthPath}` });
app.use('/api', auth.connect(basic), router);
app.use('/management', auth.connect(basic), express.static(`public/management`));

app.get('*', (req, res) => {
    res.redirect('/files');  
});


app.listen(config.express.port);
console.info(`server is up an running on port: ${config.express.port}`);