const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Genre = new Schema({
    // 图书种类
    name: {type: String, required: true, minLength: 3, maxLength: 100}
})

// 虚拟属性'url'：图书种类 URL
Genre
    .virtual('url')
    .get(function() {
        return '/catalog/genre/' + this._id;
    })

// 导出 Genre 模型
module.exports = mongoose.model('Genre', Genre)   
    
