const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
 const user = Schema({

 	Name:{

 		type : String,
 		required :true
 	},
 	
 	Password:{

 		type : String,
 		required : true	
 	}
 });

 module.export = mongoose.model("userModel",user);