/*
Author: Hugovidafe (Hugo.vidal.ferre@gmail.com)
USEFUL API (c) 2020
Desc: THIS PACKAGE IS UNDER DEVELOPMENT!
Created: 2020-06-05T09:40:19.887Z
Modified: 2020-06-06T21:22:47.597Z
*/

'use strict';

/**
 * Options for the API.
 * @typedef {Object} ApiOptions
 * @property {PathLike} [file_db] The file for use of database.
 * @property {PathLike} [path_langs] Where is the directory of the translations?
 */

exports.DefaultOptions = {
    file_db: './database.json',
    path_langs: './i18n'
}