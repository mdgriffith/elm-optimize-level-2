var $elm$core$List$concatMap = F2(
	function (fn, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (item, acc) {
					return _Utils_ap(
						fn(item),
						acc);
				}),
			_List_Nil,
			list);
	});