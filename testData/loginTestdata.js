const testdata={
    users:{
      valid:{usernme:'standard_user', passwrd:'secret_sauce'},
      invalid:{usernme:'wrongusre', passwrd:'wrong123'},
      locked:{usernme:'locked_out_user', passwrd:'secret_sauce'}
    },

    expected:{
    pageTitle:        'Swag Labs',
    inventoryURL:     'https://www.saucedemo.com/inventory.html',
    cartURL:          'https://www.saucedemo.com/cart.html',
    loginErrorMsg:    'Username and password do not match',
    lockedErrorMsg:   'Sorry, this user has been locked out'
    }
}

module.exports = {testdata}