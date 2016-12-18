const express = require('express');
const passport= require('passport');
const myStrategy = require('passport-dropbox'); //vía dropbox
var app=express();
//usamos cookie session
var session = require('express-session');
app.use(passport.initialize());
app.use
    (session
        (
            {
                secret:'clavesecreta',
                resave:false,
                saveUninitialized:true,
                cookie:{secure:false} //ssl https
            }
        )
    );
//process serialización/des-ser.
passport.serializeUser ((user,done)=>{
    done(null,user);
});

passport.deserializeUser ((user,done)=>{
    done(null,user);
});

var users = [];
passport.use 
    (   
        new myStrategy(
            {
                consumerKey:'gagagagagagagag',
                consumerSecret:'jsdjsjdsdjsjdsjd',
                callbackURL:'http://17.0.0.1:8080/home'
            },
            (token,tokenSecret,profile,next)=>{     //tokenSecret / caducidad del token
                console.log("Perfil de dropbox: " + profile);
                //lógica de datos
                if (users[profile.id]){
                    next(null, users[profile.id]);
                }
                else {
                    users[profile.id] = profile;  // or users[token] ??
                    next(null,profile);
                }
            }
        )
    );
    
app.get
    (   "/dropbox",
        passport.authenticate('dropbox'),
        (request,response)=>{
            response.send("Encantao!!");
        }
    );

let port = 8080;
app.listen(port);
console.log("Listening server port: " + port);

//ANALIZAR LA URL (en el proceso de ejecución)
