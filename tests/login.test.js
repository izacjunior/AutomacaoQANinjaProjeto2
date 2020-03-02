
module.exports = {
    'login com sucesso': function (browser) {

        var userInfor = '.user .info .span'
        browser
             .resizeWindow(1366, 768)
            .url('http://zombie-web:5000/login').waitForElementVisible('card-login', 3000)
            .setValue('input[name=email]', 'izac@gmail.com')
            .SetValue('input[name=password]', '123456')
            .click('.login-button')
            .waitForElementVisible(userInfor, 3000)
            .assert.containsText(userInfor, 'Izac')
            .end();
    }
}