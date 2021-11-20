# Benchmark results

## Elm Core asset overview

    elm.js                                       168.3kb
    elm.opt.js                                   163.8kb
    elm.opt.min.js                                32.3kb
    elm.opt.min.js.gz                             10.9kb
    elm.opt.minus-without-arrowize-functions.min.js      30.8kb
    elm.opt.minus-without-arrowize-functions.min.js.gz      10.7kb
    elm.opt.minus-without-inline-equality.min.js      28.1kb
    elm.opt.minus-without-inline-equality.min.js.gz      10.6kb
    elm.opt.minus-without-inline-functions.min.js      29.1kb
    elm.opt.minus-without-inline-functions.min.js.gz      10.8kb
    elm.opt.minus-without-inline-number-to-string.min.js      28.1kb
    elm.opt.minus-without-inline-number-to-string.min.js.gz      10.6kb
    elm.opt.minus-without-object-update.min.js      28.1kb
    elm.opt.minus-without-object-update.min.js.gz      10.6kb
    elm.opt.minus-without-passing-unwrapped-functions.min.js      27.8kb
    elm.opt.minus-without-passing-unwrapped-functions.min.js.gz      10.6kb
    elm.opt.minus-without-variant-shapes.min.js        28kb
    elm.opt.minus-without-variant-shapes.min.js.gz      10.6kb
    elm.opt.prepack.js                           146.7kb
    elm.opt.prepack.min.js                        30.6kb
    elm.opt.prepack.min.js.gz                       12kb
    elm.opt.transformed.js                       214.8kb
    elm.opt.transformed.min.js                    28.1kb
    elm.opt.transformed.min.js.gz                 10.6kb


## Elm Core

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| sum 300 list of custom types            |                              |firefox   |       154,215|         |
| sum 300 list of custom types            |final                         |firefox   |       174,719|  (113%) |
| sum 300 list of custom types            |without arrowize functions    |firefox   |       174,564|  (113%) |
| sum 300 list of custom types            |without inline equality       |firefox   |       167,649|  (109%) |
| sum 300 list of custom types            |without inline functions      |firefox   |       161,827|  (105%) |
| sum 300 list of custom types            |without inline number-to-string|firefox   |       171,676|  (111%) |
| sum 300 list of custom types            |without object update         |firefox   |       173,188|  (112%) |
| sum 300 list of custom types            |without passing unwrapped functions|firefox   |       169,798|  (110%) |
| sum 300 list of custom types            |without variant shapes        |firefox   |       169,763|  (110%) |
| sum 300 list of custom types            |                              |chrome    |     1,123,323|         |
| sum 300 list of custom types            |final                         |chrome    |     1,655,708|  (147%) |
| sum 300 list of custom types            |without arrowize functions    |chrome    |     1,654,897|  (147%) |
| sum 300 list of custom types            |without inline equality       |chrome    |     1,656,375|  (147%) |
| sum 300 list of custom types            |without inline functions      |chrome    |     1,652,090|  (147%) |
| sum 300 list of custom types            |without inline number-to-string|chrome    |     1,659,441|  (148%) |
| sum 300 list of custom types            |without object update         |chrome    |     1,660,608|  (148%) |
| sum 300 list of custom types            |without passing unwrapped functions|chrome    |     1,658,549|  (148%) |
| sum 300 list of custom types            |without variant shapes        |chrome    |     1,118,673|  (100%) |
| Update single record                    |                              |firefox   |     9,945,574|         |
| Update single record                    |final                         |firefox   |     5,826,950|   (59%) |
| Update single record                    |without arrowize functions    |firefox   |     5,794,500|   (58%) |
| Update single record                    |without inline equality       |firefox   |     5,836,187|   (59%) |
| Update single record                    |without inline functions      |firefox   |     5,664,532|   (57%) |
| Update single record                    |without inline number-to-string|firefox   |     5,776,198|   (58%) |
| Update single record                    |without object update         |firefox   |     9,815,909|   (99%) |
| Update single record                    |without passing unwrapped functions|firefox   |     5,796,790|   (58%) |
| Update single record                    |without variant shapes        |firefox   |     5,874,873|   (59%) |
| Update single record                    |                              |chrome    |    14,382,202|         |
| Update single record                    |final                         |chrome    |    52,657,228|  (366%) |
| Update single record                    |without arrowize functions    |chrome    |    53,480,405|  (372%) |
| Update single record                    |without inline equality       |chrome    |    52,515,803|  (365%) |
| Update single record                    |without inline functions      |chrome    |    53,456,903|  (372%) |
| Update single record                    |without inline number-to-string|chrome    |    50,820,375|  (353%) |
| Update single record                    |without object update         |chrome    |    14,865,306|  (103%) |
| Update single record                    |without passing unwrapped functions|chrome    |    51,073,582|  (355%) |
| Update single record                    |without variant shapes        |chrome    |    51,705,344|  (360%) |
| Update single record via inlining creation in elm|                              |firefox   |    66,103,073|         |
| Update single record via inlining creation in elm|final                         |firefox   |    66,465,257|  (101%) |
| Update single record via inlining creation in elm|without arrowize functions    |firefox   |    67,083,975|  (101%) |
| Update single record via inlining creation in elm|without inline equality       |firefox   |    66,336,733|  (100%) |
| Update single record via inlining creation in elm|without inline functions      |firefox   |    67,627,155|  (102%) |
| Update single record via inlining creation in elm|without inline number-to-string|firefox   |    68,126,014|  (103%) |
| Update single record via inlining creation in elm|without object update         |firefox   |    69,903,071|  (106%) |
| Update single record via inlining creation in elm|without passing unwrapped functions|firefox   |    67,518,114|  (102%) |
| Update single record via inlining creation in elm|without variant shapes        |firefox   |    67,855,349|  (103%) |
| Update single record via inlining creation in elm|                              |chrome    |   136,774,667|         |
| Update single record via inlining creation in elm|final                         |chrome    |   132,617,938|   (97%) |
| Update single record via inlining creation in elm|without arrowize functions    |chrome    |   131,773,465|   (96%) |
| Update single record via inlining creation in elm|without inline equality       |chrome    |   134,841,626|   (99%) |
| Update single record via inlining creation in elm|without inline functions      |chrome    |   136,262,330|  (100%) |
| Update single record via inlining creation in elm|without inline number-to-string|chrome    |   118,986,406|   (87%) |
| Update single record via inlining creation in elm|without object update         |chrome    |   136,506,796|  (100%) |
| Update single record via inlining creation in elm|without passing unwrapped functions|chrome    |   127,543,062|   (93%) |
| Update single record via inlining creation in elm|without variant shapes        |chrome    |   129,709,969|   (95%) |
| Return list literal                     |                              |firefox   |     5,763,419|         |
| Return list literal                     |final                         |firefox   |     6,065,076|  (105%) |
| Return list literal                     |without arrowize functions    |firefox   |     6,106,269|  (106%) |
| Return list literal                     |without inline equality       |firefox   |     5,911,546|  (103%) |
| Return list literal                     |without inline functions      |firefox   |     5,623,820|   (98%) |
| Return list literal                     |without inline number-to-string|firefox   |     6,005,760|  (104%) |
| Return list literal                     |without object update         |firefox   |     5,941,653|  (103%) |
| Return list literal                     |without passing unwrapped functions|firefox   |     6,078,013|  (105%) |
| Return list literal                     |without variant shapes        |firefox   |     6,097,427|  (106%) |
| Return list literal                     |                              |chrome    |    13,658,671|         |
| Return list literal                     |final                         |chrome    |    13,403,786|   (98%) |
| Return list literal                     |without arrowize functions    |chrome    |    13,481,114|   (99%) |
| Return list literal                     |without inline equality       |chrome    |    13,287,921|   (97%) |
| Return list literal                     |without inline functions      |chrome    |    13,329,159|   (98%) |
| Return list literal                     |without inline number-to-string|chrome    |    12,237,935|   (90%) |
| Return list literal                     |without object update         |chrome    |    13,424,774|   (98%) |
| Return list literal                     |without passing unwrapped functions|chrome    |    12,263,374|   (90%) |
| Return list literal                     |without variant shapes        |chrome    |    12,829,895|   (94%) |
| Dict.fromList                           |                              |firefox   |       302,927|         |
| Dict.fromList                           |final                         |firefox   |       612,070|  (202%) |
| Dict.fromList                           |without arrowize functions    |firefox   |       599,955|  (198%) |
| Dict.fromList                           |without inline equality       |firefox   |       601,151|  (198%) |
| Dict.fromList                           |without inline functions      |firefox   |       300,265|   (99%) |
| Dict.fromList                           |without inline number-to-string|firefox   |       613,008|  (202%) |
| Dict.fromList                           |without object update         |firefox   |       613,293|  (202%) |
| Dict.fromList                           |without passing unwrapped functions|firefox   |       548,528|  (181%) |
| Dict.fromList                           |without variant shapes        |firefox   |       595,306|  (197%) |
| Dict.fromList                           |                              |chrome    |       788,762|         |
| Dict.fromList                           |final                         |chrome    |     1,257,898|  (159%) |
| Dict.fromList                           |without arrowize functions    |chrome    |     1,283,242|  (163%) |
| Dict.fromList                           |without inline equality       |chrome    |     1,253,224|  (159%) |
| Dict.fromList                           |without inline functions      |chrome    |       815,075|  (103%) |
| Dict.fromList                           |without inline number-to-string|chrome    |     1,197,546|  (152%) |
| Dict.fromList                           |without object update         |chrome    |     1,264,266|  (160%) |
| Dict.fromList                           |without passing unwrapped functions|chrome    |     1,092,165|  (138%) |
| Dict.fromList                           |without variant shapes        |chrome    |     1,213,238|  (154%) |
| Dict.get                                |                              |firefox   |     4,940,630|         |
| Dict.get                                |final                         |firefox   |     8,260,024|  (167%) |
| Dict.get                                |without arrowize functions    |firefox   |     8,711,412|  (176%) |
| Dict.get                                |without inline equality       |firefox   |     8,371,357|  (169%) |
| Dict.get                                |without inline functions      |firefox   |     4,842,642|   (98%) |
| Dict.get                                |without inline number-to-string|firefox   |     8,534,924|  (173%) |
| Dict.get                                |without object update         |firefox   |     8,095,092|  (164%) |
| Dict.get                                |without passing unwrapped functions|firefox   |     8,284,660|  (168%) |
| Dict.get                                |without variant shapes        |firefox   |     8,753,466|  (177%) |
| Dict.get                                |                              |chrome    |    17,344,944|         |
| Dict.get                                |final                         |chrome    |    17,588,481|  (101%) |
| Dict.get                                |without arrowize functions    |chrome    |    17,635,399|  (102%) |
| Dict.get                                |without inline equality       |chrome    |    17,509,138|  (101%) |
| Dict.get                                |without inline functions      |chrome    |    17,732,935|  (102%) |
| Dict.get                                |without inline number-to-string|chrome    |    17,656,880|  (102%) |
| Dict.get                                |without object update         |chrome    |    17,537,984|  (101%) |
| Dict.get                                |without passing unwrapped functions|chrome    |    17,241,893|   (99%) |
| Dict.get                                |without variant shapes        |chrome    |    18,131,275|  (105%) |
| Dict.insert                             |                              |firefox   |     2,435,738|         |
| Dict.insert                             |final                         |firefox   |     5,111,488|  (210%) |
| Dict.insert                             |without arrowize functions    |firefox   |     5,056,579|  (208%) |
| Dict.insert                             |without inline equality       |firefox   |     5,289,274|  (217%) |
| Dict.insert                             |without inline functions      |firefox   |     2,351,674|   (97%) |
| Dict.insert                             |without inline number-to-string|firefox   |     5,186,911|  (213%) |
| Dict.insert                             |without object update         |firefox   |     5,161,021|  (212%) |
| Dict.insert                             |without passing unwrapped functions|firefox   |     5,114,685|  (210%) |
| Dict.insert                             |without variant shapes        |firefox   |     5,059,262|  (208%) |
| Dict.insert                             |                              |chrome    |    10,143,007|         |
| Dict.insert                             |final                         |chrome    |    10,297,600|  (102%) |
| Dict.insert                             |without arrowize functions    |chrome    |    10,822,817|  (107%) |
| Dict.insert                             |without inline equality       |chrome    |    10,243,104|  (101%) |
| Dict.insert                             |without inline functions      |chrome    |    10,019,930|   (99%) |
| Dict.insert                             |without inline number-to-string|chrome    |     9,893,071|   (98%) |
| Dict.insert                             |without object update         |chrome    |    10,239,333|  (101%) |
| Dict.insert                             |without passing unwrapped functions|chrome    |    10,094,023|  (100%) |
| Dict.insert                             |without variant shapes        |chrome    |    10,121,654|  (100%) |
| Dict.toList                             |                              |firefox   |     1,387,706|         |
| Dict.toList                             |final                         |firefox   |     4,365,888|  (315%) |
| Dict.toList                             |without arrowize functions    |firefox   |     4,342,557|  (313%) |
| Dict.toList                             |without inline equality       |firefox   |     4,160,768|  (300%) |
| Dict.toList                             |without inline functions      |firefox   |     1,373,823|   (99%) |
| Dict.toList                             |without inline number-to-string|firefox   |     4,425,263|  (319%) |
| Dict.toList                             |without object update         |firefox   |     4,329,511|  (312%) |
| Dict.toList                             |without passing unwrapped functions|firefox   |     3,079,295|  (222%) |
| Dict.toList                             |without variant shapes        |firefox   |     4,374,764|  (315%) |
| Dict.toList                             |                              |chrome    |     4,051,932|         |
| Dict.toList                             |final                         |chrome    |     8,243,607|  (203%) |
| Dict.toList                             |without arrowize functions    |chrome    |     8,203,691|  (202%) |
| Dict.toList                             |without inline equality       |chrome    |     8,194,431|  (202%) |
| Dict.toList                             |without inline functions      |chrome    |     3,925,448|   (97%) |
| Dict.toList                             |without inline number-to-string|chrome    |     7,783,662|  (192%) |
| Dict.toList                             |without object update         |chrome    |     8,295,836|  (205%) |
| Dict.toList                             |without passing unwrapped functions|chrome    |     5,330,957|  (132%) |
| Dict.toList                             |without variant shapes        |chrome    |     7,845,874|  (194%) |
| Dict.size                               |                              |firefox   |     4,863,462|         |
| Dict.size                               |final                         |firefox   |    13,307,131|  (274%) |
| Dict.size                               |without arrowize functions    |firefox   |    13,221,029|  (272%) |
| Dict.size                               |without inline equality       |firefox   |    13,295,806|  (273%) |
| Dict.size                               |without inline functions      |firefox   |     4,954,614|  (102%) |
| Dict.size                               |without inline number-to-string|firefox   |    13,230,846|  (272%) |
| Dict.size                               |without object update         |firefox   |    13,044,305|  (268%) |
| Dict.size                               |without passing unwrapped functions|firefox   |    13,571,798|  (279%) |
| Dict.size                               |without variant shapes        |firefox   |    13,132,742|  (270%) |
| Dict.size                               |                              |chrome    |    24,941,672|         |
| Dict.size                               |final                         |chrome    |    18,330,029|   (73%) |
| Dict.size                               |without arrowize functions    |chrome    |    18,321,441|   (73%) |
| Dict.size                               |without inline equality       |chrome    |    18,218,041|   (73%) |
| Dict.size                               |without inline functions      |chrome    |    25,565,838|  (103%) |
| Dict.size                               |without inline number-to-string|chrome    |    18,259,739|   (73%) |
| Dict.size                               |without object update         |chrome    |    18,490,667|   (74%) |
| Dict.size                               |without passing unwrapped functions|chrome    |    18,239,903|   (73%) |
| Dict.size                               |without variant shapes        |chrome    |    18,268,658|   (73%) |
| Calling a function with a 6 record arg  |                              |firefox   |    74,194,505|         |
| Calling a function with a 6 record arg  |final                         |firefox   |    75,061,502|  (101%) |
| Calling a function with a 6 record arg  |without arrowize functions    |firefox   |    73,532,391|   (99%) |
| Calling a function with a 6 record arg  |without inline equality       |firefox   |    72,929,679|   (98%) |
| Calling a function with a 6 record arg  |without inline functions      |firefox   |    75,276,137|  (101%) |
| Calling a function with a 6 record arg  |without inline number-to-string|firefox   |    75,792,613|  (102%) |
| Calling a function with a 6 record arg  |without object update         |firefox   |    75,895,598|  (102%) |
| Calling a function with a 6 record arg  |without passing unwrapped functions|firefox   |    73,762,660|   (99%) |
| Calling a function with a 6 record arg  |without variant shapes        |firefox   |    74,750,850|  (101%) |
| Calling a function with a 6 record arg  |                              |chrome    |   169,031,218|         |
| Calling a function with a 6 record arg  |final                         |chrome    |   170,363,880|  (101%) |
| Calling a function with a 6 record arg  |without arrowize functions    |chrome    |   164,618,184|   (97%) |
| Calling a function with a 6 record arg  |without inline equality       |chrome    |   169,535,006|  (100%) |
| Calling a function with a 6 record arg  |without inline functions      |chrome    |   171,593,876|  (102%) |
| Calling a function with a 6 record arg  |without inline number-to-string|chrome    |   171,032,966|  (101%) |
| Calling a function with a 6 record arg  |without object update         |chrome    |   171,115,448|  (101%) |
| Calling a function with a 6 record arg  |without passing unwrapped functions|chrome    |   171,148,007|  (101%) |
| Calling a function with a 6 record arg  |without variant shapes        |chrome    |   169,639,231|  (100%) |
| Calling a function with 6 args         |                              |firefox   |    62,532,455|         |
| Calling a function with 6 args         |final                         |firefox   |    79,392,031|  (127%) |
| Calling a function with 6 args         |without arrowize functions    |firefox   |    78,415,888|  (125%) |
| Calling a function with 6 args         |without inline equality       |firefox   |    74,025,228|  (118%) |
| Calling a function with 6 args         |without inline functions      |firefox   |    62,047,229|   (99%) |
| Calling a function with 6 args         |without inline number-to-string|firefox   |    76,661,342|  (123%) |
| Calling a function with 6 args         |without object update         |firefox   |    78,547,693|  (126%) |
| Calling a function with 6 args         |without passing unwrapped functions|firefox   |    74,417,748|  (119%) |
| Calling a function with 6 args         |without variant shapes        |firefox   |    80,092,631|  (128%) |
| Calling a function with 6 args         |                              |chrome    |   170,998,454|         |
| Calling a function with 6 args         |final                         |chrome    |   167,568,568|   (98%) |
| Calling a function with 6 args         |without arrowize functions    |chrome    |   168,271,385|   (98%) |
| Calling a function with 6 args         |without inline equality       |chrome    |   169,263,651|   (99%) |
| Calling a function with 6 args         |without inline functions      |chrome    |   172,337,627|  (101%) |
| Calling a function with 6 args         |without inline number-to-string|chrome    |   168,050,795|   (98%) |
| Calling a function with 6 args         |without object update         |chrome    |   168,154,388|   (98%) |
| Calling a function with 6 args         |without passing unwrapped functions|chrome    |   167,986,051|   (98%) |
| Calling a function with 6 args         |without variant shapes        |chrome    |   170,693,043|  (100%) |
| Encode string                           |                              |firefox   |     5,358,363|         |
| Encode string                           |final                         |firefox   |     5,858,638|  (109%) |
| Encode string                           |without arrowize functions    |firefox   |     5,739,032|  (107%) |
| Encode string                           |without inline equality       |firefox   |     5,865,617|  (109%) |
| Encode string                           |without inline functions      |firefox   |     5,311,953|   (99%) |
| Encode string                           |without inline number-to-string|firefox   |     5,936,411|  (111%) |
| Encode string                           |without object update         |firefox   |     5,955,621|  (111%) |
| Encode string                           |without passing unwrapped functions|firefox   |     5,961,439|  (111%) |
| Encode string                           |without variant shapes        |firefox   |     5,970,431|  (111%) |
| Encode string                           |                              |chrome    |     4,339,043|         |
| Encode string                           |final                         |chrome    |     4,369,269|  (101%) |
| Encode string                           |without arrowize functions    |chrome    |     4,374,147|  (101%) |
| Encode string                           |without inline equality       |chrome    |     4,344,519|  (100%) |
| Encode string                           |without inline functions      |chrome    |     4,390,873|  (101%) |
| Encode string                           |without inline number-to-string|chrome    |     4,348,480|  (100%) |
| Encode string                           |without object update         |chrome    |     4,392,777|  (101%) |
| Encode string                           |without passing unwrapped functions|chrome    |     4,359,309|  (100%) |
| Encode string                           |without variant shapes        |chrome    |     4,325,575|  (100%) |
| Encode Object                           |                              |firefox   |       754,236|         |
| Encode Object                           |final                         |firefox   |       929,902|  (123%) |
| Encode Object                           |without arrowize functions    |firefox   |       922,893|  (122%) |
| Encode Object                           |without inline equality       |firefox   |       935,063|  (124%) |
| Encode Object                           |without inline functions      |firefox   |       751,960|  (100%) |
| Encode Object                           |without inline number-to-string|firefox   |       937,486|  (124%) |
| Encode Object                           |without object update         |firefox   |       940,951|  (125%) |
| Encode Object                           |without passing unwrapped functions|firefox   |       839,873|  (111%) |
| Encode Object                           |without variant shapes        |firefox   |       920,050|  (122%) |
| Encode Object                           |                              |chrome    |     1,049,392|         |
| Encode Object                           |final                         |chrome    |     1,209,106|  (115%) |
| Encode Object                           |without arrowize functions    |chrome    |     1,217,287|  (116%) |
| Encode Object                           |without inline equality       |chrome    |     1,140,688|  (109%) |
| Encode Object                           |without inline functions      |chrome    |     1,104,749|  (105%) |
| Encode Object                           |without inline number-to-string|chrome    |     1,209,466|  (115%) |
| Encode Object                           |without object update         |chrome    |     1,225,923|  (117%) |
| Encode Object                           |without passing unwrapped functions|chrome    |     1,126,826|  (107%) |
| Encode Object                           |without variant shapes        |chrome    |     1,196,795|  (114%) |



