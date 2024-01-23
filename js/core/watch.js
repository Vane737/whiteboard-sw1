'use strict'
const io = require('socket.io-client');
const socket = io.connect('http://44.233.226.210:9090');
console.log('socket cargado...');

module.exports =  {
    io,
    socket,
};