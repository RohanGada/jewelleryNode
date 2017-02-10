/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var Schema = mongoose.Schema;
var productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: true
  }
});
var attributes
module.exports = mongoose.model('Product', productSchema);
var models = {
  saveData: function(data, callback) {
    var product = this(data);
    //    Product.findOneAndUpdate({
    //      _id: product._id
    //
    //    },{
    //      $set:data,
    //      $setOnInsert:product
    //    },{
    //      new:true,
    //      upsert:true
    //    }).exec(function (err,data) {
    //      if(err){
    //        callback(err,null);
    //      }else if(data){
    //        callback(null,data);
    //      }else{
    // // this case may never occur, 'coz in case of nil found it makes a new one. But still for safety
    //       callback(err,null);
    //      }
    //    });
    product.save(function(err, data) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },
  editData: function(data, callback) {
    Product.findOneAndUpdate({
      _id: data._id
    }, {
      $set: data
    }, {
      new: true
    }).exec(function(err, data) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },
  deleteData: function(data, callback) {
    Product.findOneAndRemove({
      _id: data._id
    }).exec(function(err, data) {
      if (err) {
        callback(err, null);
      } else if (data) {
        callback(null, data);
      } else {
        callback('Document not found', null);
      }
    });
  }
};
module.exports = _.assign(module.exports, models);
