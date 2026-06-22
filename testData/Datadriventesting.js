const datad= {
    validUsers:[
        {usernme:'standard_user', passwrd:'secret_sauce', role:'standard'},
        {usernme:'problem_user', passwrd:'secret_sauce', role:'problem'},
        {usernme:'performance_glitch_user', passwrd:'secret_sauce', role:'performance'}
    ],
    InvalidUsers:[
        {usernme:'wrong_user', passwrd:'wrong123', reason:'wrong credentials'},
        {usernme:'', passwrd:'wrong123', reason:'Username empty'},
        {usernme:'wrong_user', passwrd:'', reason:'password empty'}
    ],
    locked_user:{
        usernme:'locked_out_user',
        passwrd:'secret_sauce',
        reason:'locked_out'
    },

    
    expected:{
    pageTitle:        'Swag Labs',
    inventoryURL:     'https://www.saucedemo.com/inventory.html',
    cartURL:          'https://www.saucedemo.com/cart.html',
    loginErrorMsg:    'Username and password do not match',
    lockedErrorMsg:   'Sorry, this user has been locked out'
    }
}

module.exports= {datad}