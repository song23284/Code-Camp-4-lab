const env = process.env.NODE_ENV || 'development'
const config  = require('../config.json')[env]
const bcrypt = require('bcryptjs')
const BCRYPT_SALT_ROUNDS = config.salt_length
const passport =require('passport')
const localStrategy = require('passport-local').Strategy
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt
const db = require('../../models')

let jwtOptions = {
}
jwtOptions.secreatOrkey = 'c0dec4mp4'    
passport.use('register',new localStrategy(
    {
        usernameField:'usernameOrEmail',
        passwordField:'password',
        session:false,

    },
    (username,password,done) =>{
        db.user.findOn({
            where:{ username:username}
        }).then(user =>{
            if(user != null){
                console.log('username alredy taken')
                return done(null,false,{message:'username alredy taken'})
            } else {
               let salt = bcrypt.genSaltSync(BCRYPT_SALT_ROUNDS)
               let hashedPassword = bcrypt.hashSync(password,salt)
               db.user.create({username,password:hashedPassword}).then(user=>{
                   console.log("user created")
                   return done(null,user)
               }).catch(err =>{
                   console.log(err)
                   done(err)
               })
            }
        })

    }
))

