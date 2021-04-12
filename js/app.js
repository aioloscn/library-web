
let baseUrl = "http://127.0.0.1:7070";
var url = {
	user: {
		getSMSCode: baseUrl + "/library-user/user/getSMSCode",
		login: baseUrl + "/library-user/user/login",
		getByToken: baseUrl + "/library-user/user",
		logout: baseUrl + "/library-user/user/logout"
	},
	book: {
		list: baseUrl + "/library-book/book/list",
		getById: baseUrl + "/library-book/book/get",
		getSimilarRecommended: baseUrl + "/library-book/book/getSimilarRecommended"
	},
	cart: {
		add: baseUrl + "/library-shopping-cart/shoppingCart",
		get: baseUrl + "/library-shopping-cart/shoppingCart",
		deleteByBookId: baseUrl + "/library-shopping-cart/shoppingCart/deleteByBookId"
	}
}