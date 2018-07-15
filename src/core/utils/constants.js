'use strict'

const Key = require('interface-datastore').Key

const FILE_TYPES = {
  file: 0,
  directory: 1
}

module.exports = {
  FILE_SEPARATOR: '/',
  _KEY: new Key('/local/filesroot'),
  get MFS_ROOT_KEY() {
    return this._KEY
  },
  set MFS_ROOT_KEY(key){
    this._KEY = key
  },
  MAX_CHUNK_SIZE: 262144,
  MAX_LINKS: 174,
  FILE_TYPES
}
