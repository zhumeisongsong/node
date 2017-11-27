const config = require('../config')
const nodemailer = require('nodemailer')
const json2html = require('node-json2html')
let mailTransport = nodemailer.createTransport(config.mail)

module.exports = {
  'POST /api/contacts': async (ctx, next) => {
    ctx.response.type = 'application/json'

    let t = {
      '<>': 'div', 'html': '御社名：${company}' +
      '<br>ご担当者様名:${name}<br>' +
      'メールアドレス:${email}<br>' +
      '電話番号:${phone}<br>' +
      'ご質問:${question}'
    }
    let d = ctx.request.body
    let html = json2html.transform(d, t)

    let options = {
      from: config.mail.auth.user,
      to: config.mail.auth.user,
      subject: config.mailBody.title,
      html: html
    }
    mailTransport.sendMail(options, function (err, msg) {
      if (err) {
        ctx.response.body = err
      }
    })
    ctx.response.body = 200
  }
}
