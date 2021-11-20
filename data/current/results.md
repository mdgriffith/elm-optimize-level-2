# Benchmark results

## Elm Core asset overview

    .keep                                            0kb
    elm.opt.js                                     165kb
    elm.opt.min.js                                32.6kb
    elm.opt.min.js.gz                             11.1kb
    elm.opt.transformed.js                       227.4kb
    elm.opt.transformed.min.js                    31.3kb
    elm.opt.transformed.min.js.gz                   11kb

## Elm CSS - Realworld asset overview

    .keep                                            0kb
    elm.opt.js                                     253kb
    elm.opt.min.js                                47.3kb
    elm.opt.min.js.gz                             14.7kb
    elm.opt.transformed.js                       346.6kb
    elm.opt.transformed.min.js                    46.3kb
    elm.opt.transformed.min.js.gz                 14.7kb

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
    elm.opt.transformed.js                       446.7kb
    elm.opt.transformed.min.js                    69.6kb
    elm.opt.transformed.min.js.gz                   20kb

## Elm Markdown asset overview

    .keep                                            0kb
    elm.opt.js                                   404.9kb
    elm.opt.min.js                                  81kb
    elm.opt.min.js.gz                             25.1kb
    elm.opt.transformed.js                       515.5kb
    elm.opt.transformed.min.js                    77.6kb
    elm.opt.transformed.min.js.gz                 24.9kb


## Elm Core

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| sum 300 list of custom types            |                              |safari    |     1,083,357|         |
| sum 300 list of custom types            |final                         |safari    |     1,412,156|  (130%) |
| sum 300 list of custom types            |                              |firefox   |       210,260|         |
| sum 300 list of custom types            |final                         |firefox   |       254,747|  (121%) |
| sum 300 list of custom types            |                              |chrome    |       987,517|         |
| sum 300 list of custom types            |final                         |chrome    |     1,221,647|  (124%) |
| Update single record                    |                              |safari    |       294,420|         |
| Update single record                    |final                         |safari    |       295,181|  (100%) |
| Update single record                    |                              |firefox   |       495,821|         |
| Update single record                    |final                         |firefox   |       500,026|  (101%) |
| Update single record                    |                              |chrome    |       539,230|         |
| Update single record                    |final                         |chrome    |       553,466|  (103%) |
| Update single record via inlining creation in elm|                              |safari    |    48,792,581|         |
| Update single record via inlining creation in elm|final                         |safari    |    50,927,583|  (104%) |
| Update single record via inlining creation in elm|                              |firefox   |    69,561,411|         |
| Update single record via inlining creation in elm|final                         |firefox   |    67,787,901|   (97%) |
| Update single record via inlining creation in elm|                              |chrome    |   120,501,794|         |
| Update single record via inlining creation in elm|final                         |chrome    |   114,150,043|   (95%) |
| Return list literal                     |                              |safari    |     7,384,740|         |
| Return list literal                     |final                         |safari    |     8,068,836|  (109%) |
| Return list literal                     |                              |firefox   |     7,276,292|         |
| Return list literal                     |final                         |firefox   |     7,717,271|  (106%) |
| Return list literal                     |                              |chrome    |    18,483,857|         |
| Return list literal                     |final                         |chrome    |    18,590,104|  (101%) |
| Dict.fromList                           |                              |safari    |       802,477|         |
| Dict.fromList                           |final                         |safari    |       940,319|  (117%) |
| Dict.fromList                           |                              |firefox   |       382,828|         |
| Dict.fromList                           |final                         |firefox   |       521,839|  (136%) |
| Dict.fromList                           |                              |chrome    |       800,441|         |
| Dict.fromList                           |final                         |chrome    |     1,228,943|  (154%) |
| Dict.get                                |                              |safari    |     9,664,396|         |
| Dict.get                                |final                         |safari    |    11,336,126|  (117%) |
| Dict.get                                |                              |firefox   |     5,193,891|         |
| Dict.get                                |final                         |firefox   |     6,270,568|  (121%) |
| Dict.get                                |                              |chrome    |    15,561,336|         |
| Dict.get                                |final                         |chrome    |    15,570,514|  (100%) |
| Dict.insert                             |                              |safari    |     5,928,219|         |
| Dict.insert                             |final                         |safari    |     6,518,825|  (110%) |
| Dict.insert                             |                              |firefox   |     3,184,575|         |
| Dict.insert                             |final                         |firefox   |     3,988,681|  (125%) |
| Dict.insert                             |                              |chrome    |     8,342,925|         |
| Dict.insert                             |final                         |chrome    |    10,005,229|  (120%) |
| Dict.toList                             |                              |safari    |     3,799,005|         |
| Dict.toList                             |final                         |safari    |     5,263,097|  (139%) |
| Dict.toList                             |                              |firefox   |     1,973,777|         |
| Dict.toList                             |final                         |firefox   |     4,074,500|  (206%) |
| Dict.toList                             |                              |chrome    |     4,310,787|         |
| Dict.toList                             |final                         |chrome    |     9,564,051|  (222%) |
| Dict.size                               |                              |safari    |    13,136,835|         |
| Dict.size                               |final                         |safari    |    20,244,143|  (154%) |
| Dict.size                               |                              |firefox   |     6,518,077|         |
| Dict.size                               |final                         |firefox   |     8,724,941|  (134%) |
| Dict.size                               |                              |chrome    |    23,525,834|         |
| Dict.size                               |final                         |chrome    |    17,149,972|   (73%) |
| Calling a function with a 6 record arg  |                              |safari    |    76,138,189|         |
| Calling a function with a 6 record arg  |final                         |safari    |    79,331,317|  (104%) |
| Calling a function with a 6 record arg  |                              |firefox   |    71,489,136|         |
| Calling a function with a 6 record arg  |final                         |firefox   |    72,287,907|  (101%) |
| Calling a function with a 6 record arg  |                              |chrome    |   142,072,200|         |
| Calling a function with a 6 record arg  |final                         |chrome    |   142,220,027|  (100%) |
| Calling a function with 6 args         |                              |safari    |    47,220,024|         |
| Calling a function with 6 args         |final                         |safari    |    79,979,565|  (169%) |
| Calling a function with 6 args         |                              |firefox   |    58,532,175|         |
| Calling a function with 6 args         |final                         |firefox   |    73,351,231|  (125%) |
| Calling a function with 6 args         |                              |chrome    |   140,157,638|         |
| Calling a function with 6 args         |final                         |chrome    |   144,466,535|  (103%) |
| Encode string                           |                              |safari    |     5,353,018|         |
| Encode string                           |final                         |safari    |     5,473,917|  (102%) |
| Encode string                           |                              |firefox   |     6,450,814|         |
| Encode string                           |final                         |firefox   |     6,960,455|  (108%) |
| Encode string                           |                              |chrome    |     5,254,851|         |
| Encode string                           |final                         |chrome    |     5,317,408|  (101%) |
| Encode Object                           |                              |safari    |       929,017|         |
| Encode Object                           |final                         |safari    |     1,067,554|  (115%) |
| Encode Object                           |                              |firefox   |       911,208|         |
| Encode Object                           |final                         |firefox   |     1,064,339|  (117%) |
| Encode Object                           |                              |chrome    |     1,000,668|         |
| Encode Object                           |final                         |chrome    |     1,155,044|  (115%) |
| Equals literal int                      |                              |safari    |    74,731,963|         |
| Equals literal int                      |final                         |safari    |    78,528,441|  (105%) |
| Equals literal int                      |                              |firefox   |    76,534,270|         |
| Equals literal int                      |final                         |firefox   |   100,083,968|  (131%) |
| Equals literal int                      |                              |chrome    |   147,735,063|         |
| Equals literal int                      |final                         |chrome    |   148,576,966|  (101%) |
| Equals, no literal                      |                              |safari    |    37,476,017|         |
| Equals, no literal                      |final                         |safari    |    36,292,032|   (97%) |
| Equals, no literal                      |                              |firefox   |    38,434,375|         |
| Equals, no literal                      |final                         |firefox   |    43,075,063|  (112%) |
| Equals, no literal                      |                              |chrome    |   147,162,653|         |
| Equals, no literal                      |final                         |chrome    |   147,424,639|  (100%) |


## Elm CSS - Realworld

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| Search form inspired by vy.no           |                              |safari    |         2,660|         |
| Search form inspired by vy.no           |final                         |safari    |         3,498|  (132%) |
| Search form inspired by vy.no           |                              |firefox   |         2,237|         |
| Search form inspired by vy.no           |final                         |firefox   |         2,587|  (116%) |
| Search form inspired by vy.no           |                              |chrome    |         4,857|         |
| Search form inspired by vy.no           |final                         |chrome    |         5,857|  (121%) |


## Html

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| create a 4 level nested html tree       |                              |safari    |        51,031|         |
| create a 4 level nested html tree       |final                         |safari    |        73,785|  (145%) |
| create a 4 level nested html tree       |                              |firefox   |        30,165|         |
| create a 4 level nested html tree       |final                         |firefox   |        49,501|  (164%) |
| create a 4 level nested html tree       |                              |chrome    |        49,431|         |
| create a 4 level nested html tree       |final                         |chrome    |       128,869|  (261%) |


## Elm UI

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| create a 4 level nested Elm UI tree     |                              |safari    |         3,941|         |
| create a 4 level nested Elm UI tree     |final                         |safari    |         4,587|  (116%) |
| create a 4 level nested Elm UI tree     |                              |firefox   |         2,778|         |
| create a 4 level nested Elm UI tree     |final                         |firefox   |         3,555|  (128%) |
| create a 4 level nested Elm UI tree     |                              |chrome    |         5,178|         |
| create a 4 level nested Elm UI tree     |final                         |chrome    |         6,806|  (131%) |


## Elm Markdown

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| just a heading                          |                              |safari    |        82,688|         |
| just a heading                          |final                         |safari    |       107,889|  (130%) |
| just a heading                          |                              |firefox   |        56,612|         |
| just a heading                          |final                         |firefox   |        76,870|  (136%) |
| just a heading                          |                              |chrome    |        90,830|         |
| just a heading                          |final                         |chrome    |       142,690|  (157%) |
| elm-explorations/markdown readme        |                              |safari    |        23,752|         |
| elm-explorations/markdown readme        |final                         |safari    |        30,860|  (130%) |
| elm-explorations/markdown readme        |                              |firefox   |        15,454|         |
| elm-explorations/markdown readme        |final                         |firefox   |        20,493|  (133%) |
| elm-explorations/markdown readme        |                              |chrome    |        24,675|         |
| elm-explorations/markdown readme        |final                         |chrome    |        40,093|  (162%) |
| withHeadingsAndLists                    |                              |safari    |         3,585|         |
| withHeadingsAndLists                    |final                         |safari    |         4,834|  (135%) |
| withHeadingsAndLists                    |                              |firefox   |         2,533|         |
| withHeadingsAndLists                    |final                         |firefox   |         3,424|  (135%) |
| withHeadingsAndLists                    |                              |chrome    |         3,953|         |
| withHeadingsAndLists                    |final                         |chrome    |         6,305|  (159%) |
| withHeadingsAndListsAndHtml             |                              |safari    |         2,388|         |
| withHeadingsAndListsAndHtml             |final                         |safari    |         3,293|  (138%) |
| withHeadingsAndListsAndHtml             |                              |firefox   |         1,721|         |
| withHeadingsAndListsAndHtml             |final                         |firefox   |         2,327|  (135%) |
| withHeadingsAndListsAndHtml             |                              |chrome    |         2,693|         |
| withHeadingsAndListsAndHtml             |final                         |chrome    |         4,173|  (155%) |



