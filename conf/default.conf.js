module.exports = {
    express: {
        port: process.env.CAMARERO_PORT || 3000
    },
    camarero: {
        uploadPath: process.env.CAMARERO_UPLOAD_PATH || 'public/data',
        basicAuthPath: process.env.CAMARERO_PASSWD_PATH || 'public/passwd'
    },
    staticFiles: {
        icons: true,
        view: 'details',
        template: `${__dirname}/../public/index.html`,
        stylesheet: `${__dirname}/../public/style/filelisting.css`
    },
    isProduction: () => {
        return process.env.NODE_ENV === 'production';
    }
};