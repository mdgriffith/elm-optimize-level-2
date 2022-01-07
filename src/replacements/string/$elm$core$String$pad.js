var $elm$core$String$pad = F3(
	function (n, _char, string) {
		var half = (n - $elm$core$String$length(string)) / 2;
		if (half <= 0) {
			return string;
		} else {
			var flooredHalf = $elm$core$Basics$floor(half);
			var repeated = A2(
				$elm$core$String$repeat,
				flooredHalf,
				$elm$core$String$fromChar(_char));
			return (_Utils_cmp(
				flooredHalf,
				$elm$core$Basics$ceiling(half)) < 0) ? (repeated + (string + (repeated + ''))) : (repeated + ($elm$core$String$fromChar(_char) + (string + (repeated + ''))));
		}
	});