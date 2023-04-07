const {Schema, model} = require('mongoose')

const User = new Schema({
	email: {type: String, unique: true, required: true},
	password: {type: String, required: true},
	role: {type: String, ref: 'Role', required: true},
	phone: {type: String},
	name: {type: String},
	surname: {type: String},
	patronimyc: {type: String},
	INN: {type: String},
	KPP: {type: String},
	level: {type: Number},
	ep: {type: String, default:'None'},
})

module.exports = model('User', User)