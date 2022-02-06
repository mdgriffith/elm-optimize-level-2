# Benchmark results

## Elm Core asset overview

    .keep                                            0kb
    elm.opt.js                                     165kb
    elm.opt.min.js                                32.6kb
    elm.opt.min.js.gz                             11.1kb
    elm.opt.transformed.js                       228.9kb
    elm.opt.transformed.min.js                    31.9kb
    elm.opt.transformed.min.js.gz                 11.1kb

## Elm CSS - Realworld asset overview

    .keep                                            0kb
    elm.opt.js                                     253kb
    elm.opt.min.js                                47.3kb
    elm.opt.min.js.gz                             14.7kb
    elm.opt.transformed.js                       347.2kb
    elm.opt.transformed.min.js                    46.5kb
    elm.opt.transformed.min.js.gz                 14.8kb

## Html asset overview

    .keep                                            0kb
    elm.opt.js                                   142.5kb
    elm.opt.min.js                                21.8kb
    elm.opt.min.js.gz                              7.3kb
    elm.opt.transformed.js                       199.7kb
    elm.opt.transformed.min.js                    20.9kb
    elm.opt.transformed.min.js.gz                  7.2kb

## Elm UI asset overview

    .keep                                            0kb
    elm.opt.js                                   352.3kb
    elm.opt.min.js                                72.4kb
    elm.opt.min.js.gz                             20.1kb
    elm.opt.transformed.js                       450.7kb
    elm.opt.transformed.min.js                    72.7kb
    elm.opt.transformed.min.js.gz                 20.7kb

## Elm Markdown asset overview

    .keep                                            0kb
    elm.opt.js                                   404.9kb
    elm.opt.min.js                                  81kb
    elm.opt.min.js.gz                             25.1kb
    elm.opt.transformed.js                       513.8kb
    elm.opt.transformed.min.js                    79.5kb
    elm.opt.transformed.min.js.gz                 25.2kb


## Elm Core

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| sum 300 list of custom types            |                              |safari    |     1,296,660|         |
| sum 300 list of custom types            |final                         |safari    |     1,288,062|   (99%) |
| sum 300 list of custom types            |                              |firefox   |       210,034|         |
| sum 300 list of custom types            |final                         |firefox   |       265,892|  (127%) |
| sum 300 list of custom types            |                              |chrome    |     1,026,682|         |
| sum 300 list of custom types            |final                         |chrome    |     1,210,558|  (118%) |
| Update single record                    |                              |safari    |       288,769|         |
| Update single record                    |final                         |safari    |     2,912,691| (1009%) |
| Update single record                    |                              |firefox   |       505,461|         |
| Update single record                    |final                         |firefox   |     1,585,253|  (314%) |
| Update single record                    |                              |chrome    |       601,248|         |
| Update single record                    |final                         |chrome    |     7,486,918| (1245%) |
| Update single record via inlining creation in elm|                              |safari    |    52,961,934|         |
| Update single record via inlining creation in elm|final                         |safari    |    52,646,123|   (99%) |
| Update single record via inlining creation in elm|                              |firefox   |    63,471,865|         |
| Update single record via inlining creation in elm|final                         |firefox   |    67,806,084|  (107%) |
| Update single record via inlining creation in elm|                              |chrome    |   137,488,239|         |
| Update single record via inlining creation in elm|final                         |chrome    |   116,553,788|   (85%) |
| Return list literal                     |                              |safari    |     7,840,001|         |
| Return list literal                     |final                         |safari    |     8,073,418|  (103%) |
| Return list literal                     |                              |firefox   |     7,564,403|         |
| Return list literal                     |final                         |firefox   |     7,685,152|  (102%) |
| Return list literal                     |                              |chrome    |    19,910,849|         |
| Return list literal                     |final                         |chrome    |    17,328,538|   (87%) |
| Dict.fromList                           |                              |safari    |       799,466|         |
| Dict.fromList                           |final                         |safari    |       947,506|  (119%) |
| Dict.fromList                           |                              |firefox   |       375,214|         |
| Dict.fromList                           |final                         |firefox   |       525,806|  (140%) |
| Dict.fromList                           |                              |chrome    |       910,947|         |
| Dict.fromList                           |final                         |chrome    |     1,218,456|  (134%) |
| Dict.get                                |                              |safari    |    10,096,723|         |
| Dict.get                                |final                         |safari    |    11,608,995|  (115%) |
| Dict.get                                |                              |firefox   |     5,312,060|         |
| Dict.get                                |final                         |firefox   |     6,059,408|  (114%) |
| Dict.get                                |                              |chrome    |    17,448,500|         |
| Dict.get                                |final                         |chrome    |    15,549,367|   (89%) |
| Dict.insert                             |                              |safari    |     5,836,739|         |
| Dict.insert                             |final                         |safari    |     6,364,290|  (109%) |
| Dict.insert                             |                              |firefox   |     3,169,006|         |
| Dict.insert                             |final                         |firefox   |     3,951,704|  (125%) |
| Dict.insert                             |                              |chrome    |     9,402,128|         |
| Dict.insert                             |final                         |chrome    |     9,453,835|  (101%) |
| Dict.toList                             |                              |safari    |     4,021,601|         |
| Dict.toList                             |final                         |safari    |     5,279,232|  (131%) |
| Dict.toList                             |                              |firefox   |     2,129,474|         |
| Dict.toList                             |final                         |firefox   |     4,091,994|  (192%) |
| Dict.toList                             |                              |chrome    |     4,738,967|         |
| Dict.toList                             |final                         |chrome    |     9,253,953|  (195%) |
| Dict.size                               |                              |safari    |    13,658,424|         |
| Dict.size                               |final                         |safari    |    19,454,288|  (142%) |
| Dict.size                               |                              |firefox   |     6,582,532|         |
| Dict.size                               |final                         |firefox   |     8,107,315|  (123%) |
| Dict.size                               |                              |chrome    |    26,130,875|         |
| Dict.size                               |final                         |chrome    |    16,922,711|   (65%) |
| Calling a function with a 6 record arg  |                              |safari    |    74,571,721|         |
| Calling a function with a 6 record arg  |final                         |safari    |    76,562,843|  (103%) |
| Calling a function with a 6 record arg  |                              |firefox   |    72,786,138|         |
| Calling a function with a 6 record arg  |final                         |firefox   |    72,397,919|   (99%) |
| Calling a function with a 6 record arg  |                              |chrome    |   156,353,793|         |
| Calling a function with a 6 record arg  |final                         |chrome    |   137,741,759|   (88%) |
| Calling a function with 6 args         |                              |safari    |    47,780,314|         |
| Calling a function with 6 args         |final                         |safari    |    80,922,481|  (169%) |
| Calling a function with 6 args         |                              |firefox   |    57,285,191|         |
| Calling a function with 6 args         |final                         |firefox   |    72,371,785|  (126%) |
| Calling a function with 6 args         |                              |chrome    |   155,756,282|         |
| Calling a function with 6 args         |final                         |chrome    |   140,992,312|   (91%) |
| Encode string                           |                              |safari    |     5,377,126|         |
| Encode string                           |final                         |safari    |     5,335,841|   (99%) |
| Encode string                           |                              |firefox   |     6,413,473|         |
| Encode string                           |final                         |firefox   |     7,122,324|  (111%) |
| Encode string                           |                              |chrome    |     5,857,319|         |
| Encode string                           |final                         |chrome    |     5,069,075|   (87%) |
| Encode Object                           |                              |safari    |     1,033,595|         |
| Encode Object                           |final                         |safari    |     1,073,695|  (104%) |
| Encode Object                           |                              |firefox   |       951,481|         |
| Encode Object                           |final                         |firefox   |     1,094,781|  (115%) |
| Encode Object                           |                              |chrome    |     1,118,925|         |
| Encode Object                           |final                         |chrome    |     1,175,314|  (105%) |
| Equals literal int                      |                              |safari    |    64,782,668|         |
| Equals literal int                      |final                         |safari    |    78,483,994|  (121%) |
| Equals literal int                      |                              |firefox   |    74,801,912|         |
| Equals literal int                      |final                         |firefox   |    95,517,084|  (128%) |
| Equals literal int                      |                              |chrome    |   163,961,176|         |
| Equals literal int                      |final                         |chrome    |   145,562,715|   (89%) |
| Equals, no literal                      |                              |safari    |    36,489,670|         |
| Equals, no literal                      |final                         |safari    |    39,395,452|  (108%) |
| Equals, no literal                      |                              |firefox   |    39,188,218|         |
| Equals, no literal                      |final                         |firefox   |    42,290,830|  (108%) |
| Equals, no literal                      |                              |chrome    |   161,783,732|         |
| Equals, no literal                      |final                         |chrome    |   143,900,730|   (89%) |


## Elm CSS - Realworld

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| Search form inspired by vy.no           |                              |safari    |         2,734|         |
| Search form inspired by vy.no           |final                         |safari    |         3,498|  (128%) |
| Search form inspired by vy.no           |                              |firefox   |         2,262|         |
| Search form inspired by vy.no           |final                         |firefox   |         2,610|  (115%) |
| Search form inspired by vy.no           |                              |chrome    |         4,878|         |
| Search form inspired by vy.no           |final                         |chrome    |         5,829|  (119%) |


## Html

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| create a 4 level nested html tree       |                              |safari    |        51,906|         |
| create a 4 level nested html tree       |final                         |safari    |        72,600|  (140%) |
| create a 4 level nested html tree       |                              |firefox   |        30,449|         |
| create a 4 level nested html tree       |final                         |firefox   |        49,892|  (164%) |
| create a 4 level nested html tree       |                              |chrome    |        49,663|         |
| create a 4 level nested html tree       |final                         |chrome    |       128,742|  (259%) |


## Elm UI

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| create a 4 level nested Elm UI tree     |                              |safari    |         3,958|         |
| create a 4 level nested Elm UI tree     |final                         |safari    |         4,591|  (116%) |
| create a 4 level nested Elm UI tree     |                              |firefox   |         2,776|         |
| create a 4 level nested Elm UI tree     |final                         |firefox   |         3,537|  (127%) |
| create a 4 level nested Elm UI tree     |                              |chrome    |         5,213|         |
| create a 4 level nested Elm UI tree     |final                         |chrome    |         6,869|  (132%) |


## Elm Markdown

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| just a heading                          |                              |safari    |        81,427|         |
| just a heading                          |final                         |safari    |       105,475|  (130%) |
| just a heading                          |                              |firefox   |        55,453|         |
| just a heading                          |final                         |firefox   |        76,058|  (137%) |
| just a heading                          |                              |chrome    |        89,284|         |
| just a heading                          |final                         |chrome    |       142,918|  (160%) |
| elm-explorations/markdown readme        |                              |safari    |        22,997|         |
| elm-explorations/markdown readme        |final                         |safari    |        29,968|  (130%) |
| elm-explorations/markdown readme        |                              |firefox   |        15,220|         |
| elm-explorations/markdown readme        |final                         |firefox   |        20,253|  (133%) |
| elm-explorations/markdown readme        |                              |chrome    |        24,628|         |
| elm-explorations/markdown readme        |final                         |chrome    |        39,518|  (160%) |
| withHeadingsAndLists                    |                              |safari    |         3,604|         |
| withHeadingsAndLists                    |final                         |safari    |         4,791|  (133%) |
| withHeadingsAndLists                    |                              |firefox   |         2,524|         |
| withHeadingsAndLists                    |final                         |firefox   |         3,379|  (134%) |
| withHeadingsAndLists                    |                              |chrome    |         3,940|         |
| withHeadingsAndLists                    |final                         |chrome    |         6,316|  (160%) |
| withHeadingsAndListsAndHtml             |                              |safari    |         2,398|         |
| withHeadingsAndListsAndHtml             |final                         |safari    |         3,213|  (134%) |
| withHeadingsAndListsAndHtml             |                              |firefox   |         1,704|         |
| withHeadingsAndListsAndHtml             |final                         |firefox   |         2,317|  (136%) |
| withHeadingsAndListsAndHtml             |                              |chrome    |         2,667|         |
| withHeadingsAndListsAndHtml             |final                         |chrome    |         4,203|  (158%) |



