//Create web server with node.js
//import express module
const express = require('express');
//import body-parser module
const bodyParser = require('body-parser');
//import path module
const path = require('path');
//import express-handlebars module
const exphbs = require('express-handlebars');
//import express-validator module
const { check, validationResult } = require('express-validator');
//import moment module
const moment = require('moment');
//import mongoose module
const mongoose = require('mongoose');
//import flash module
const flash = require('connect-flash');
//import session module
const session = require('express-session');
//import passport module
const passport = require('passport');
//import config module
const config = require('./config/database');