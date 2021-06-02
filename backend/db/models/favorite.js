const mongoose = require('mongoose');

const favorite = new mongoose.Schema({
	user: { type:mongoose.Schema.Types.ObjectId, ref: 'Users'},
	products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Products'
}],
	
});                                                                                                                              

module.exports = mongoose.model('Favorite', favorite);