const commonFunction = require('./../helpers/commonFunction');


const test = (req, res) => {
    console.log('***** test *****');
    commonFunction.sendResponse(200, true, 'test successfully!', function (response) {
        res.json(response);
    });
}

module.exports = {
    test
}