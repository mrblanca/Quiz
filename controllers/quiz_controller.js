// GET /quizes/question  
//exports.question = function(req, res) {
//  res.render('quizes/question', { pregunta: '¿Capital de Italia?'});
//};

// GET /quizes/answer
//exports.answer = function(req, res) {
//	if (req.query.respuesta === 'Roma') {
//		res.render('quizes/answer', { respuesta: 'Correcto'});
//	} else {
//		res.render('quizes/answer', { respuesta: 'Incorrecto'});
//	}
//};

//*************************************************************
//Modificación módulo 7
//var models = require('../models/models.js');

// GET /quizes/question
//exports.question = function(req, res) {
//  models.Quiz.findAll().then(function(quiz) {
//    res.render('quizes/question', { pregunta: quiz[0].pregunta});
//  })
//};

// GET /quizes/answer
//exports.answer = function(req, res) {
//  models.Quiz.findAll().then(function(quiz) {
//    if (req.query.respuesta === quiz[0].respuesta) {
//      res.render('quizes/answer', { respuesta: 'Correcto' });
//    } else {
//      res.render('quizes/answer', { respuesta: 'Incorrecto'});
//    }
//  })
//};
//**************************************

//*******************************************
// Modificación módulo 7 video 4

//var models = require('../models/models.js');

// GET /quizes
//exports.index = function(req, res) {
  //models.Quiz.findAll().then(function(quizes) {
    //res.render('quizes/index.ejs', { quizes: quizes});
  //})
//};

// GET /quizes/:id
//exports.show = function(req, res) {
  //models.Quiz.findById(req.params.quizId).then(function(quiz) {
    //res.render('quizes/show', { quiz: quiz});
 // })
//};

// GET /quizes/:id/answer
//exports.answer = function(req, res) {
  //models.Quiz.findById(req.params.quizId).then(function(quiz) {
    //if (req.query.respuesta === quiz.respuesta) {
      //res.render('quizes/answer', 
        //         { quiz: quiz, respuesta: 'Correcto' });
    //} else {
      //res.render('quizes/answer', 
        //         { quiz: quiz, respuesta: 'Incorrecto'});
   // }
  //})
//};
//****************************************************

//****************************************************
// Modificación Módulo 7 video 5

var models = require('../models/models.js');

// Autoload - factoriza el código si la ruta incluye :quizId
exports.load = function(req, res, next, quizId) {
  models.Quiz.findById(quizId).then(
    function(quiz) {
      if (quiz) {
        req.quiz = quiz;
        next();
      }
      else {
        next(new Error('No existe quizId='+quizId));
      }
    }
  ).catch (function(error) {next(error);})
}

// GET /quizes
exports.index = function(req, res) {
  models.Quiz.findAll().then(
    function(quizes) {
    res.render('quizes/index.ejs', { quizes: quizes});
    }
  ).catch (function(error) {next(error);})
};

// GET /quizes/:id
exports.show = function(req, res) {
  res.render('quizes/show', { quiz: req.quiz});
};

// GET /quizes/:id/answer
exports.answer = function(req, res) {
  var resultado = 'Incorrecto';
  if (req.query.respuesta === req.quiz.respuesta) {
    resultado = 'Correcto';
  }
  res.render('quizes/answer', { quiz: req.quiz, respuesta: resultado});
<<<<<<< HEAD
};
=======
};

    Status API Training Shop Blog About Help 

    © 2015 GitHub, Inc. Terms Privacy Security
>>>>>>> bbfa29b6b7a513fd331328d4f6546905cbb231eb
