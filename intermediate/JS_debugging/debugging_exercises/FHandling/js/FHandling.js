function connection() {
    return {
        open: function () {
            console.log('open connection')
        },
        close: function () {
            console.log('close connection')
        }
    };
}

let connector = connection();

try {
    connection.open();
} catch (e) {
    console.log(e.message);
} finally {
    connector.close();
}