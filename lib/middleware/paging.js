module.exports = function(callback, perpage) {
	perpage = perpage || 10;
	return function(req, res, next) {
		var page = Math.max(
			parseInt(req.param('page') || '1', 10),
			1
		)-1;
		callback(req, function(err, total) {
			if (err) return next(err);
			req.page = res.locals.page = {
				currnumber: page,
				perpage: perpage,
				from: page == 0 ? 1 : page * perpage + 1,
				to: page == 0 ? perpage : page * perpage + perpage,
				total: total,
				totalcount: Math.ceil(total / perpage)
			};
			next();
		});
	}
};