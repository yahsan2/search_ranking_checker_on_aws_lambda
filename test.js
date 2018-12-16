'use strict'

const launchChrome = require('@serverless-chrome/lambda')
const CDP = require('chrome-remote-interface')
const puppeteer = require('puppeteer')

/**
 * Lambdaハンドラ
 * @param {Object} event Lambdaイベントデータ
 * @param {Object} context Contextオブジェクト
 * @param {function} callback コールバックオプション
 */  
exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: "screenshotBuffer"
      }    
}
