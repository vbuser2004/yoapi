import yoyoapi from 'yoyoapi';

const startApi = () => {
    const yo = new yoyoapi('', '', '', 'https://www.yahoo.com');

    console.log('Api URL: ' + yo.ApiURL);
};

startApi();
