const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
 const KeepModel = new Schema({

 	Title :{

 		type: String,
 		required:true

 	},

 	Text:{

 		type : String,
 		required :true
 	}
 });

 module.exports = mongoose.model("Keep",KeepModel);
