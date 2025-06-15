const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const parserRouter = require('./routes/parser');
const generateContent = require("./services/aiService");
const summarizeRouter = require('./routes/summarize');
const mcqRouter = require('./routes/mcq');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/parser', parserRouter);
// app.use('/generateContent', generateContent);
app.use('/summarize',summarizeRouter)
app.use('/mcq', mcqRouter);


app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

module.exports = app;
