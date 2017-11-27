const config = {
  port: 4000,

  mail: {
    host: 'smtp.sina.com',
    secureConnection: true,
    auth: {
      user: 'yuantianbingxue@sina.com',
      pass: 'ytbx2222222'
    },
  },

  mailBody: {
    title: 'TOPICLIPお問い合わせ',
  }
};

module.exports = config;