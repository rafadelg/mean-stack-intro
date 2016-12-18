/*
Schemas not only define the structure of your document and casting of properties, they also define:
 + document instance methods,
 + static Model methods,
 + compound indexes and
 + document lifecycle hooks called middleware.
http://mongoosejs.com/docs/guide.html#methods

init, validate, save, remove
functions which are passed control during execution of asynchronous functions.
Middleware is specified on the schema level and is useful for writing plugins.
2 types of middleware: 
 - document middleware and
 - query middleware.
http://mongoosejs.com/docs/middleware.html

*/