/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	saveData: function (req,res) {
		if(req.body){
			Product.saveData(req.body,function (err,data) {
				if(err){
					res.json({
						status:false,
						response:err
					});
				}else{
					res.json({
						status:true,
						response:data
					});
				}
			});
		}else{
			res.json({
				status:false,
				response:"Invalid request"
			});
		}
	},
	editData:function (req,res) {
		if(req.body){
			Product.editData(req.body,function (err,data) {
				if(err){
					res.json({
						status:false,
						response:err
					});
				}else{
					res.json({
						status:true,
						response:data
					});
				}
			})
		}else{
			res.json({
				status:false,
				response:"Invalid request"
			})
		}
	},
	deleteData:function (req,res) {
		if(req.body){
			Product.deleteData(req.body,function (err,data) {
				if(err){
					res.json({
						status:false,
						response:err
					});
				}else{
					res.json({
						status:true,
						response:data
					});
				}
			})
		}else{
			res.json({
				status:false,
				response:"Invalid request"
			})
		}
	}
};
