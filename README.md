# WP VUE AUTH

## What it is?

It is simple demonstration APP created using VUE 2 JS, it is for Authentication user for wordpress.

### What's done

* User login
* User Logout
* Request password reset
* User validation tests (and after reset app)
* Store user in localstorage app
* Add example post

Errors and all other things are displayed in DEBUG

### Rrerequisites

* [VUE](https://vuejs.org/) - VUE
* [simple-jwt-authentication](https://github.com/jonathan-dejong/simple-jwt-authentication/wiki/Documentation) - simple-jwt-authentication
* [WP REST V2](https://developer.wordpress.org/rest-api/) - 

### Project setup

* Setup your WordPress
* Install plugin and setup [simple-jwt-authentication](https://github.com/jonathan-dejong/simple-jwt-authentication/wiki/Documentation)

* Setup app:
```
npm install
```

Compiles and hot-reloads for development
```
npm run serve
```

Compiles and minifies for production
```
npm run build
```

Run your tests
```
npm run test
```

Lints and fixes files
```
npm run lint
```

### TO DO

* Check Woo Compability
* Create new user ?
* Edit current user
* Edit another user
* Edit Post
* Make this example more UI friendly :)

### At the End

* Check it first without any 3'th part WP REST plugins, may be some conflicts
* More about Auth for WP Rest [WP REST V2](https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/)
* Big thanks to [Jonathan de Jong](https://github.com/jonathan-dejong) for great work and development :)

