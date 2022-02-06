# Benchmark results

## Elm Core asset overview

    elm.opt.js                                   164.8kb
    elm.opt.min.js                                32.6kb
    elm.opt.min.js.gz                               11kb
    elm.opt.transformed.js                       226.3kb
    elm.opt.transformed.min.js                    31.1kb
    elm.opt.transformed.min.js.gz                 10.8kb

## Html asset overview

    elm.js                                       160.6kb
    elm.opt.js                                   157.6kb
    elm.opt.min.js                                30.2kb
    elm.opt.min.js.gz                             10.3kb
    elm.opt.prepack.js                           130.8kb
    elm.opt.prepack.min.js                        26.8kb
    elm.opt.prepack.min.js.gz                     10.5kb
    elm.opt.transformed.js                       218.1kb
    elm.opt.transformed.min.js                    29.1kb
    elm.opt.transformed.min.js.gz                 10.2kb

## Elm UI asset overview

    elm.opt.js                                   353.7kb
    elm.opt.min.js                                  73kb
    elm.opt.min.js.gz                             20.2kb
    elm.opt.transformed.js                       448.8kb
    elm.opt.transformed.min.js                      70kb
    elm.opt.transformed.min.js.gz                   20kb

## Elm UI 2 asset overview

    elm.opt.js                                   186.9kb
    elm.opt.min.js                                36.3kb
    elm.opt.min.js.gz                             12.2kb
    elm.opt.transformed.js                       254.8kb
    elm.opt.transformed.min.js                    34.9kb
    elm.opt.transformed.min.js.gz                 12.1kb

## elm-animator asset overview

    elm.opt.js                                   239.2kb
    elm.opt.min.js                                45.3kb
    elm.opt.min.js.gz                             15.3kb
    elm.opt.transformed.js                       322.6kb
    elm.opt.transformed.min.js                    43.7kb
    elm.opt.transformed.min.js.gz                 15.2kb

## Elm Markdown asset overview

    elm.js                                       351.2kb
    elm.opt.js                                   338.1kb
    elm.opt.min.js                                69.7kb
    elm.opt.min.js.gz                             22.3kb
    elm.opt.prepack.js                           387.6kb
    elm.opt.prepack.min.js                        78.2kb
    elm.opt.prepack.min.js.gz                     27.3kb
    elm.opt.transformed.js                       438.6kb
    elm.opt.transformed.min.js                    66.9kb
    elm.opt.transformed.min.js.gz                 22.1kb


## Elm Core

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| sum 300 list of custom types            |                              |safari    |       678,460|         |
| sum 300 list of custom types            |final                         |safari    |       791,552|  (117%) |
| sum 300 list of custom types            |                              |firefox   |       103,086|         |
| sum 300 list of custom types            |final                         |firefox   |       116,415|  (113%) |
| sum 300 list of custom types            |                              |chrome    |       575,336|         |
| sum 300 list of custom types            |final                         |chrome    |       773,120|  (134%) |
| Update single record                    |                              |safari    |     3,921,445|         |
| Update single record                    |final                         |safari    |     3,667,621|   (94%) |
| Update single record                    |                              |firefox   |     7,524,946|         |
| Update single record                    |final                         |firefox   |     7,765,487|  (103%) |
| Update single record                    |                              |chrome    |     8,065,885|         |
| Update single record                    |final                         |chrome    |     7,840,883|   (97%) |
| Update single record via inlining creation in elm|                              |safari    |    39,651,476|         |
| Update single record via inlining creation in elm|final                         |safari    |    39,494,048|  (100%) |
| Update single record via inlining creation in elm|                              |firefox   |    49,000,178|         |
| Update single record via inlining creation in elm|final                         |firefox   |    48,131,435|   (98%) |
| Update single record via inlining creation in elm|                              |chrome    |    70,616,100|         |
| Update single record via inlining creation in elm|final                         |chrome    |    69,579,746|   (99%) |
| Return list literal                     |                              |safari    |     5,377,948|         |
| Return list literal                     |final                         |safari    |     5,123,521|   (95%) |
| Return list literal                     |                              |firefox   |     4,179,845|         |
| Return list literal                     |final                         |firefox   |     4,949,102|  (118%) |
| Return list literal                     |                              |chrome    |    10,764,630|         |
| Return list literal                     |final                         |chrome    |    10,312,015|   (96%) |
| Dict.fromList                           |                              |safari    |       501,173|         |
| Dict.fromList                           |final                         |safari    |       585,256|  (117%) |
| Dict.fromList                           |                              |firefox   |       236,090|         |
| Dict.fromList                           |final                         |firefox   |       489,454|  (207%) |
| Dict.fromList                           |                              |chrome    |       403,280|         |
| Dict.fromList                           |final                         |chrome    |       749,401|  (186%) |
| Dict.get                                |                              |safari    |     6,201,207|         |
| Dict.get                                |final                         |safari    |     7,322,338|  (118%) |
| Dict.get                                |                              |firefox   |     4,038,981|         |
| Dict.get                                |final                         |firefox   |     6,706,501|  (166%) |
| Dict.get                                |                              |chrome    |    10,350,654|         |
| Dict.get                                |final                         |chrome    |    10,385,141|  (100%) |
| Dict.insert                             |                              |safari    |     3,728,617|         |
| Dict.insert                             |final                         |safari    |     4,085,005|  (110%) |
| Dict.insert                             |                              |firefox   |     1,845,168|         |
| Dict.insert                             |final                         |firefox   |     4,082,296|  (221%) |
| Dict.insert                             |                              |chrome    |     5,398,955|         |
| Dict.insert                             |final                         |chrome    |     5,798,422|  (107%) |
| Dict.toList                             |                              |safari    |     2,848,439|         |
| Dict.toList                             |final                         |safari    |     3,860,597|  (136%) |
| Dict.toList                             |                              |firefox   |       961,986|         |
| Dict.toList                             |final                         |firefox   |     3,132,591|  (326%) |
| Dict.toList                             |                              |chrome    |     2,289,958|         |
| Dict.toList                             |final                         |chrome    |     6,081,881|  (266%) |
| Dict.size                               |                              |safari    |     8,275,409|         |
| Dict.size                               |final                         |safari    |    12,253,304|  (148%) |
| Dict.size                               |                              |firefox   |     3,454,366|         |
| Dict.size                               |final                         |firefox   |     9,363,194|  (271%) |
| Dict.size                               |                              |chrome    |    14,314,165|         |
| Dict.size                               |final                         |chrome    |    11,885,049|   (83%) |
| Calling a function with a 6 record arg  |                              |safari    |    52,922,266|         |
| Calling a function with a 6 record arg  |final                         |safari    |    52,656,252|   (99%) |
| Calling a function with a 6 record arg  |                              |firefox   |    50,051,132|         |
| Calling a function with a 6 record arg  |final                         |firefox   |    51,080,170|  (102%) |
| Calling a function with a 6 record arg  |                              |chrome    |   103,463,937|         |
| Calling a function with a 6 record arg  |final                         |chrome    |   107,702,916|  (104%) |
| Calling a function with 6 args         |                              |safari    |    35,162,713|         |
| Calling a function with 6 args         |final                         |safari    |    52,633,677|  (150%) |
| Calling a function with 6 args         |                              |firefox   |    41,136,864|         |
| Calling a function with 6 args         |final                         |firefox   |    48,525,259|  (118%) |
| Calling a function with 6 args         |                              |chrome    |   109,073,772|         |
| Calling a function with 6 args         |final                         |chrome    |   109,433,661|  (100%) |
| Encode string                           |                              |safari    |     3,677,615|         |
| Encode string                           |final                         |safari    |     3,913,759|  (106%) |
| Encode string                           |                              |firefox   |     4,758,488|         |
| Encode string                           |final                         |firefox   |     5,419,871|  (114%) |
| Encode string                           |                              |chrome    |     3,439,711|         |
| Encode string                           |final                         |chrome    |     3,279,386|   (95%) |
| Encode Object                           |                              |safari    |       565,639|         |
| Encode Object                           |final                         |safari    |       690,548|  (122%) |
| Encode Object                           |                              |firefox   |       493,325|         |
| Encode Object                           |final                         |firefox   |       725,420|  (147%) |
| Encode Object                           |                              |chrome    |       643,647|         |
| Encode Object                           |final                         |chrome    |       755,207|  (117%) |
| Equals literal int                      |                              |safari    |    52,848,736|         |
| Equals literal int                      |final                         |safari    |    54,098,935|  (102%) |
| Equals literal int                      |                              |firefox   |    29,844,238|         |
| Equals literal int                      |final                         |firefox   |    71,186,314|  (239%) |
| Equals literal int                      |                              |chrome    |   102,337,175|         |
| Equals literal int                      |final                         |chrome    |   103,114,101|  (101%) |
| Equals, no literal                      |                              |safari    |    30,627,079|         |
| Equals, no literal                      |final                         |safari    |    28,627,023|   (93%) |
| Equals, no literal                      |                              |firefox   |    27,176,172|         |
| Equals, no literal                      |final                         |firefox   |    55,075,295|  (203%) |
| Equals, no literal                      |                              |chrome    |    99,829,518|         |
| Equals, no literal                      |final                         |chrome    |   102,924,183|  (103%) |
| String.fromInt                          |                              |safari    |    47,258,583|         |
| String.fromInt                          |final                         |safari    |    52,360,988|  (111%) |
| String.fromInt                          |                              |firefox   |    62,348,951|         |
| String.fromInt                          |final                         |firefox   |    66,221,042|  (106%) |
| String.fromInt                          |                              |chrome    |   107,115,530|         |
| String.fromInt                          |final                         |chrome    |   108,826,586|  (102%) |


## Html

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| create a 4 level nested html tree       |                              |safari    |        34,860|         |
| create a 4 level nested html tree       |final                         |safari    |        40,222|  (115%) |
| create a 4 level nested html tree       |                              |firefox   |        15,897|         |
| create a 4 level nested html tree       |final                         |firefox   |        21,517|  (135%) |
| create a 4 level nested html tree       |                              |chrome    |        27,861|         |
| create a 4 level nested html tree       |final                         |chrome    |        75,085|  (269%) |


## Elm UI

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| create a 4 level nested Elm UI tree     |                              |safari    |         2,292|         |
| create a 4 level nested Elm UI tree     |final                         |safari    |         2,839|  (124%) |
| create a 4 level nested Elm UI tree     |                              |firefox   |         1,126|         |
| create a 4 level nested Elm UI tree     |final                         |firefox   |         1,876|  (167%) |
| create a 4 level nested Elm UI tree     |                              |chrome    |         3,189|         |
| create a 4 level nested Elm UI tree     |final                         |chrome    |         3,950|  (124%) |


## Elm UI 2

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| create a 4 level nested Elm UI tree     |                              |safari    |         7,561|         |
| create a 4 level nested Elm UI tree     |final                         |safari    |         8,886|  (118%) |
| create a 4 level nested Elm UI tree     |                              |firefox   |         3,353|         |
| create a 4 level nested Elm UI tree     |final                         |firefox   |         4,777|  (142%) |
| create a 4 level nested Elm UI tree     |                              |chrome    |         5,989|         |
| create a 4 level nested Elm UI tree     |final                         |chrome    |         7,986|  (133%) |


## elm-animator

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| stepwise - 100 steps                    |                              |safari    |    40,303,619|         |
| stepwise - 100 steps                    |final                         |safari    |    40,348,608|  (100%) |
| stepwise - 100 steps                    |                              |firefox   |    16,527,413|         |
| stepwise - 100 steps                    |final                         |firefox   |    28,960,561|  (175%) |
| stepwise - 100 steps                    |                              |chrome    |    55,375,865|         |
| stepwise - 100 steps                    |final                         |chrome    |    55,412,180|  (100%) |
| presolved differential equation         |                              |safari    |    11,229,697|         |
| presolved differential equation         |final                         |safari    |    51,978,085|  (463%) |
| presolved differential equation         |                              |firefox   |     5,403,667|         |
| presolved differential equation         |final                         |firefox   |    38,554,347|  (713%) |
| presolved differential equation         |                              |chrome    |   109,610,186|         |
| presolved differential equation         |final                         |chrome    |   110,801,390|  (101%) |
| elm/random - random float               |                              |safari    |     5,715,228|         |
| elm/random - random float               |final                         |safari    |     8,736,070|  (153%) |
| elm/random - random float               |                              |firefox   |     4,067,229|         |
| elm/random - random float               |final                         |firefox   |    19,169,834|  (471%) |
| elm/random - random float               |                              |chrome    |    20,339,304|         |
| elm/random - random float               |final                         |chrome    |    78,097,823|  (384%) |
| scaled sine method                      |                              |safari    |    54,273,821|         |
| scaled sine method                      |final                         |safari    |    54,876,362|  (101%) |
| scaled sine method                      |                              |firefox   |    52,447,911|         |
| scaled sine method                      |final                         |firefox   |    51,739,606|   (99%) |
| scaled sine method                      |                              |chrome    |   107,088,847|         |
| scaled sine method                      |final                         |chrome    |   108,533,764|  (101%) |
| interpolate to position                 |                              |safari    |       443,688|         |
| interpolate to position                 |final                         |safari    |       552,128|  (124%) |
| interpolate to position                 |                              |firefox   |       198,512|         |
| interpolate to position                 |final                         |firefox   |       431,757|  (217%) |
| interpolate to position                 |                              |chrome    |       620,951|         |
| interpolate to position                 |final                         |chrome    |       681,913|  (110%) |
| capture frames(60fps)                   |                              |safari    |         1,375|         |
| capture frames(60fps)                   |final                         |safari    |         1,751|  (127%) |
| capture frames(60fps)                   |                              |firefox   |           643|         |
| capture frames(60fps)                   |final                         |firefox   |         1,356|  (211%) |
| capture frames(60fps)                   |                              |chrome    |         1,763|         |
| capture frames(60fps)                   |final                         |chrome    |         1,833|  (104%) |
| capture frames(15fps)                   |                              |safari    |         5,348|         |
| capture frames(15fps)                   |final                         |safari    |         6,840|  (128%) |
| capture frames(15fps)                   |                              |firefox   |         2,425|         |
| capture frames(15fps)                   |final                         |firefox   |         4,914|  (203%) |
| capture frames(15fps)                   |                              |chrome    |         6,682|         |
| capture frames(15fps)                   |final                         |chrome    |         7,065|  (106%) |
| Standard                                |                              |safari    |    33,861,466|         |
| Standard                                |final                         |safari    |    40,519,360|  (120%) |
| Standard                                |                              |firefox   |    28,792,050|         |
| Standard                                |final                         |firefox   |    66,303,406|  (230%) |
| Standard                                |                              |chrome    |   102,283,314|         |
| Standard                                |final                         |chrome    |   100,991,697|   (99%) |
| (one - two) < 0 form                    |                              |safari    |    39,688,932|         |
| (one - two) < 0 form                    |final                         |safari    |    54,332,361|  (137%) |
| (one - two) < 0 form                    |                              |firefox   |    30,647,550|         |
| (one - two) < 0 form                    |final                         |firefox   |    73,230,588|  (239%) |
| (one - two) < 0 form                    |                              |chrome    |   104,445,858|         |
| (one - two) < 0 form                    |final                         |chrome    |   103,777,718|   (99%) |
| Create spline                           |                              |safari    |    10,115,736|         |
| Create spline                           |final                         |safari    |    10,148,496|  (100%) |
| Create spline                           |                              |firefox   |    10,914,194|         |
| Create spline                           |final                         |firefox   |    14,189,765|  (130%) |
| Create spline                           |                              |chrome    |    10,420,457|         |
| Create spline                           |final                         |chrome    |    10,228,744|   (98%) |
| Find x on spline                        |                              |safari    |     2,247,290|         |
| Find x on spline                        |final                         |safari    |     2,171,335|   (97%) |
| Find x on spline                        |                              |firefox   |     2,054,534|         |
| Find x on spline                        |final                         |firefox   |     1,987,708|   (97%) |
| Find x on spline                        |                              |chrome    |     1,948,189|         |
| Find x on spline                        |final                         |chrome    |     2,013,831|  (103%) |


## Elm Markdown

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| just a heading                          |                              |safari    |        46,791|         |
| just a heading                          |final                         |safari    |        60,885|  (130%) |
| just a heading                          |                              |firefox   |        23,850|         |
| just a heading                          |final                         |firefox   |        50,887|  (213%) |
| just a heading                          |                              |chrome    |        53,421|         |
| just a heading                          |final                         |chrome    |        78,832|  (148%) |
| elm-explorations/markdown readme        |                              |safari    |        15,673|         |
| elm-explorations/markdown readme        |final                         |safari    |        19,622|  (125%) |
| elm-explorations/markdown readme        |                              |firefox   |         6,980|         |
| elm-explorations/markdown readme        |final                         |firefox   |        14,969|  (214%) |
| elm-explorations/markdown readme        |                              |chrome    |        14,369|         |
| elm-explorations/markdown readme        |final                         |chrome    |        22,026|  (153%) |
| withHeadingsAndLists                    |                              |safari    |         4,552|         |
| withHeadingsAndLists                    |final                         |safari    |         5,959|  (131%) |
| withHeadingsAndLists                    |                              |firefox   |         2,155|         |
| withHeadingsAndLists                    |final                         |firefox   |         4,192|  (195%) |
| withHeadingsAndLists                    |                              |chrome    |         4,811|         |
| withHeadingsAndLists                    |final                         |chrome    |         6,582|  (137%) |
| withHeadingsAndListsAndHtml             |                              |safari    |         2,393|         |
| withHeadingsAndListsAndHtml             |final                         |safari    |         3,147|  (132%) |
| withHeadingsAndListsAndHtml             |                              |firefox   |         1,112|         |
| withHeadingsAndListsAndHtml             |final                         |firefox   |         2,202|  (198%) |
| withHeadingsAndListsAndHtml             |                              |chrome    |         2,447|         |
| withHeadingsAndListsAndHtml             |final                         |chrome    |         3,550|  (145%) |



