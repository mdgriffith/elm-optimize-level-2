# Benchmark results

## Elm Core asset overview

    .keep                                            0kb
    elm.opt.js                                     165kb
    elm.opt.min.js                                32.6kb
    elm.opt.min.js.gz                             11.1kb
    elm.opt.transformed.js                         225kb
    elm.opt.transformed.min.js                    31.1kb
    elm.opt.transformed.min.js.gz                 10.9kb

## Elm CSS - Realworld asset overview

    .keep                                            0kb
    elm.opt.js                                     253kb
    elm.opt.min.js                                47.3kb
    elm.opt.min.js.gz                             14.7kb
    elm.opt.transformed.js                       344.2kb
    elm.opt.transformed.min.js                      46kb
    elm.opt.transformed.min.js.gz                 14.6kb

## Html asset overview

    .keep                                            0kb
    elm.opt.js                                   142.5kb
    elm.opt.min.js                                21.8kb
    elm.opt.min.js.gz                              7.3kb
    elm.opt.transformed.js                       197.4kb
    elm.opt.transformed.min.js                    20.8kb
    elm.opt.transformed.min.js.gz                  7.1kb

## Elm UI asset overview

    .keep                                            0kb
    elm.opt.js                                   352.3kb
    elm.opt.min.js                                72.4kb
    elm.opt.min.js.gz                             20.1kb
    elm.opt.transformed.js                       444.3kb
    elm.opt.transformed.min.js                    69.5kb
    elm.opt.transformed.min.js.gz                 19.9kb

## Elm Markdown asset overview

    .keep                                            0kb
    elm.opt.js                                   404.9kb
    elm.opt.min.js                                  81kb
    elm.opt.min.js.gz                             25.1kb
    elm.opt.transformed.js                       513.2kb
    elm.opt.transformed.min.js                    77.5kb
    elm.opt.transformed.min.js.gz                 24.8kb


## Elm Core

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| sum 300 list of custom types            |                              |safari    |     1,122,920|         |
| sum 300 list of custom types            |final                         |safari    |     1,339,447|  (119%) |
| sum 300 list of custom types            |                              |firefox   |       202,165|         |
| sum 300 list of custom types            |final                         |firefox   |       258,208|  (128%) |
| sum 300 list of custom types            |                              |chrome    |       985,551|         |
| sum 300 list of custom types            |final                         |chrome    |     1,258,988|  (128%) |
| Update single record                    |                              |safari    |       285,487|         |
| Update single record                    |final                         |safari    |       273,053|   (96%) |
| Update single record                    |                              |firefox   |       481,889|         |
| Update single record                    |final                         |firefox   |       485,574|  (101%) |
| Update single record                    |                              |chrome    |       543,495|         |
| Update single record                    |final                         |chrome    |       549,652|  (101%) |
| Update single record via inlining creation in elm|                              |safari    |    47,060,680|         |
| Update single record via inlining creation in elm|final                         |safari    |    49,017,329|  (104%) |
| Update single record via inlining creation in elm|                              |firefox   |    65,409,572|         |
| Update single record via inlining creation in elm|final                         |firefox   |    66,672,028|  (102%) |
| Update single record via inlining creation in elm|                              |chrome    |   120,527,031|         |
| Update single record via inlining creation in elm|final                         |chrome    |   112,484,228|   (93%) |
| Return list literal                     |                              |safari    |     7,185,232|         |
| Return list literal                     |final                         |safari    |     7,741,276|  (108%) |
| Return list literal                     |                              |firefox   |     7,232,739|         |
| Return list literal                     |final                         |firefox   |     7,100,726|   (98%) |
| Return list literal                     |                              |chrome    |    18,330,444|         |
| Return list literal                     |final                         |chrome    |    18,382,338|  (100%) |
| Dict.fromList                           |                              |safari    |       777,425|         |
| Dict.fromList                           |final                         |safari    |       891,584|  (115%) |
| Dict.fromList                           |                              |firefox   |       368,420|         |
| Dict.fromList                           |final                         |firefox   |       506,624|  (138%) |
| Dict.fromList                           |                              |chrome    |       805,806|         |
| Dict.fromList                           |final                         |chrome    |     1,203,339|  (149%) |
| Dict.get                                |                              |safari    |     9,614,821|         |
| Dict.get                                |final                         |safari    |    11,153,610|  (116%) |
| Dict.get                                |                              |firefox   |     5,148,983|         |
| Dict.get                                |final                         |firefox   |     5,841,445|  (113%) |
| Dict.get                                |                              |chrome    |    15,305,826|         |
| Dict.get                                |final                         |chrome    |    15,930,631|  (104%) |
| Dict.insert                             |                              |safari    |     5,533,861|         |
| Dict.insert                             |final                         |safari    |     6,237,408|  (113%) |
| Dict.insert                             |                              |firefox   |     3,065,411|         |
| Dict.insert                             |final                         |firefox   |     3,842,599|  (125%) |
| Dict.insert                             |                              |chrome    |     8,230,657|         |
| Dict.insert                             |final                         |chrome    |     9,703,920|  (118%) |
| Dict.toList                             |                              |safari    |     3,974,009|         |
| Dict.toList                             |final                         |safari    |     5,187,987|  (131%) |
| Dict.toList                             |                              |firefox   |     2,043,794|         |
| Dict.toList                             |final                         |firefox   |     4,069,449|  (199%) |
| Dict.toList                             |                              |chrome    |     4,385,824|         |
| Dict.toList                             |final                         |chrome    |     9,480,965|  (216%) |
| Dict.size                               |                              |safari    |    13,080,109|         |
| Dict.size                               |final                         |safari    |    19,563,417|  (150%) |
| Dict.size                               |                              |firefox   |     6,290,526|         |
| Dict.size                               |final                         |firefox   |     8,380,572|  (133%) |
| Dict.size                               |                              |chrome    |    23,732,472|         |
| Dict.size                               |final                         |chrome    |    17,132,119|   (72%) |
| Calling a function with a 6 record arg  |                              |safari    |    75,612,924|         |
| Calling a function with a 6 record arg  |final                         |safari    |    75,411,922|  (100%) |
| Calling a function with a 6 record arg  |                              |firefox   |    71,024,170|         |
| Calling a function with a 6 record arg  |final                         |firefox   |    72,969,345|  (103%) |
| Calling a function with a 6 record arg  |                              |chrome    |   142,766,347|         |
| Calling a function with a 6 record arg  |final                         |chrome    |   142,377,067|  (100%) |
| Calling a function with 6 args         |                              |safari    |    46,632,357|         |
| Calling a function with 6 args         |final                         |safari    |    78,086,967|  (167%) |
| Calling a function with 6 args         |                              |firefox   |    58,577,180|         |
| Calling a function with 6 args         |final                         |firefox   |    71,469,456|  (122%) |
| Calling a function with 6 args         |                              |chrome    |   141,124,644|         |
| Calling a function with 6 args         |final                         |chrome    |   141,435,758|  (100%) |
| Encode string                           |                              |safari    |     5,156,824|         |
| Encode string                           |final                         |safari    |     5,232,578|  (101%) |
| Encode string                           |                              |firefox   |     6,010,216|         |
| Encode string                           |final                         |firefox   |     6,665,525|  (111%) |
| Encode string                           |                              |chrome    |     5,084,119|         |
| Encode string                           |final                         |chrome    |     5,125,981|  (101%) |
| Encode Object                           |                              |safari    |       792,968|         |
| Encode Object                           |final                         |safari    |     1,014,029|  (128%) |
| Encode Object                           |                              |firefox   |       920,324|         |
| Encode Object                           |final                         |firefox   |     1,051,205|  (114%) |
| Encode Object                           |                              |chrome    |     1,147,426|         |
| Encode Object                           |final                         |chrome    |     1,094,538|   (95%) |
| Equals literal int                      |                              |safari    |    72,271,904|         |
| Equals literal int                      |final                         |safari    |    75,441,830|  (104%) |
| Equals literal int                      |                              |firefox   |    75,624,824|         |
| Equals literal int                      |final                         |firefox   |    98,546,819|  (130%) |
| Equals literal int                      |                              |chrome    |   149,603,013|         |
| Equals literal int                      |final                         |chrome    |   145,146,168|   (97%) |
| Equals, no literal                      |                              |safari    |    36,965,072|         |
| Equals, no literal                      |final                         |safari    |    36,651,586|   (99%) |
| Equals, no literal                      |                              |firefox   |    36,652,647|         |
| Equals, no literal                      |final                         |firefox   |    39,483,689|  (108%) |
| Equals, no literal                      |                              |chrome    |   147,454,416|         |
| Equals, no literal                      |final                         |chrome    |   148,978,988|  (101%) |


## Elm CSS - Realworld

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| Search form inspired by vy.no           |                              |safari    |         2,625|         |
| Search form inspired by vy.no           |final                         |safari    |         3,159|  (120%) |
| Search form inspired by vy.no           |                              |firefox   |         2,176|         |
| Search form inspired by vy.no           |final                         |firefox   |         2,414|  (111%) |
| Search form inspired by vy.no           |                              |chrome    |         4,620|         |
| Search form inspired by vy.no           |final                         |chrome    |         4,968|  (108%) |


## Html

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| create a 4 level nested html tree       |                              |safari    |        50,007|         |
| create a 4 level nested html tree       |final                         |safari    |        59,729|  (119%) |
| create a 4 level nested html tree       |                              |firefox   |        30,417|         |
| create a 4 level nested html tree       |final                         |firefox   |        39,484|  (130%) |
| create a 4 level nested html tree       |                              |chrome    |        48,335|         |
| create a 4 level nested html tree       |final                         |chrome    |        63,608|  (132%) |


## Elm UI

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| create a 4 level nested Elm UI tree     |                              |safari    |         3,811|         |
| create a 4 level nested Elm UI tree     |final                         |safari    |         4,447|  (117%) |
| create a 4 level nested Elm UI tree     |                              |firefox   |         2,665|         |
| create a 4 level nested Elm UI tree     |final                         |firefox   |         3,314|  (124%) |
| create a 4 level nested Elm UI tree     |                              |chrome    |         5,189|         |
| create a 4 level nested Elm UI tree     |final                         |chrome    |         6,272|  (121%) |


## Elm Markdown

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| just a heading                          |                              |safari    |        77,945|         |
| just a heading                          |final                         |safari    |       105,462|  (135%) |
| just a heading                          |                              |firefox   |        54,221|         |
| just a heading                          |final                         |firefox   |        72,397|  (134%) |
| just a heading                          |                              |chrome    |        87,820|         |
| just a heading                          |final                         |chrome    |       129,101|  (147%) |
| elm-explorations/markdown readme        |                              |safari    |        22,395|         |
| elm-explorations/markdown readme        |final                         |safari    |        28,155|  (126%) |
| elm-explorations/markdown readme        |                              |firefox   |        14,710|         |
| elm-explorations/markdown readme        |final                         |firefox   |        19,615|  (133%) |
| elm-explorations/markdown readme        |                              |chrome    |        23,794|         |
| elm-explorations/markdown readme        |final                         |chrome    |        36,786|  (155%) |
| withHeadingsAndLists                    |                              |safari    |         3,482|         |
| withHeadingsAndLists                    |final                         |safari    |         4,521|  (130%) |
| withHeadingsAndLists                    |                              |firefox   |         2,431|         |
| withHeadingsAndLists                    |final                         |firefox   |         3,228|  (133%) |
| withHeadingsAndLists                    |                              |chrome    |         3,793|         |
| withHeadingsAndLists                    |final                         |chrome    |         5,827|  (154%) |
| withHeadingsAndListsAndHtml             |                              |safari    |         2,317|         |
| withHeadingsAndListsAndHtml             |final                         |safari    |         3,059|  (132%) |
| withHeadingsAndListsAndHtml             |                              |firefox   |         1,643|         |
| withHeadingsAndListsAndHtml             |final                         |firefox   |         2,191|  (133%) |
| withHeadingsAndListsAndHtml             |                              |chrome    |         2,585|         |
| withHeadingsAndListsAndHtml             |final                         |chrome    |         3,890|  (150%) |



