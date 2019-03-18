'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // home router
  router.get('/', controller.home.index);
  // common router
  router.post('/common/upload', controller.common.upload);
  router.post('/common/login', controller.common.login);
  // user router
  router.get('/user/query', controller.user.query);
  router.post('/user/update', controller.user.update);
  router.delete('/user/destroy/:id', controller.user.destroy);
  // school router
  router.get('/school/query', controller.school.query);
  router.post('/school/update', controller.school.update);
  router.delete('/school/destroy/:id', controller.school.destroy);

};
