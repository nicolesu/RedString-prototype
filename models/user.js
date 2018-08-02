//users in this app
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const UserSchema = new Schema({
	name:{
		type: String,
		required: true
	},
	nickname:{
		type: String,
		required: true
	},
	// sex:{
	// 	type: String,
	// 	required: true
	// },
	// status:{ //1:single, 2:complicated, 3:seeing someone
	// 	type: Number,
	// 	required: true
	// },
	// age:{
	// 	type: Number,
	// 	required: true
	// },
	// e_mail:{
	// 	type: String,
	// 	required: true
	// },
	username:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	// friends:{
	// 	type: [String],
	// 	required: true
	// },
	// pastEvent:{
	// 	type: [String],
	// 	required: true
	// },
	// upcomingEvent:{
	// 	type: [String],
	// 	required: true
	// },
	date:{
		type: Date,
		default: Date.now
	}
});

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = User  = mongoose.model('user', UserSchema);