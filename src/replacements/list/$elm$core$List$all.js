var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			function (a) {
				return !isOkay(a);
			},
			list);
	});