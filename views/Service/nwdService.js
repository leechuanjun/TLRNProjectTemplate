'use strict';

var NWDService = {
  host:'http://127.0.0.1:3000',
  login: '/nwdLoan/users/login',
  register: '/nwdLoan/users/register',

  loginByToken: '/user/login/token',
  getUser: '/user/get',
  createUser: '/user/create',
  updatePassword: '/user/password/update',
  deleteUser: '/user/delete',
  getOfflinePro: '/offlinepro/get'
};

module.exports = NWDService;
