const moment = require('moment')

exports.index = function(req, res, next) {
  const nowDate = new Date();
  const date = {
    year: moment(nowDate).format('YYYY'),
    month: moment(nowDate).format('MM'),
    date: moment(nowDate).format('DD')
  }
  const articles = [{
    title: '无标题',
    tag: {
      type: 1,
      name: '设计'
    },
    content: '没有内容',
    date: date
  },{
    title: 'osho',
    tag: {
      type: 2,
      name: '随笔'
    },
    content: '关于osho的读后感',
    date: date
  }];
  // res.render('home', {title: '浪鸭blog', articles: articles })
  res.render('blog/design_detail', {title: '浪鸭blog', articles: articles })
}