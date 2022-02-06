# Benchmark results

## Elm Core asset overview

    elm.js                                       168.3kb
    elm.opt.js                                   163.8kb
    elm.opt.min.js                                32.3kb
    elm.opt.min.js.gz                             10.9kb
    elm.opt.prepack.js                           146.7kb
    elm.opt.prepack.min.js                        30.6kb
    elm.opt.prepack.min.js.gz                       12kb
    elm.opt.transformed.js                       214.8kb
    elm.opt.transformed.min.js                    28.1kb
    elm.opt.transformed.min.js.gz                 10.6kb

## Html asset overview

    elm.js                                       167.6kb
    elm.opt.js                                   157.6kb
    elm.opt.min.js                                30.2kb
    elm.opt.min.js.gz                             10.3kb
    elm.opt.prepack.js                           134.9kb
    elm.opt.prepack.min.js                        26.8kb
    elm.opt.prepack.min.js.gz                     10.5kb
    elm.opt.transformed.js                       208.3kb
    elm.opt.transformed.min.js                    26.6kb
    elm.opt.transformed.min.js.gz                 10.1kb

## Elm UI asset overview

    elm.opt.js                                   353.7kb
    elm.opt.min.js                                  73kb
    elm.opt.min.js.gz                             20.2kb
    elm.opt.transformed.js                       435.1kb
    elm.opt.transformed.min.js                    65.4kb
    elm.opt.transformed.min.js.gz                 19.8kb

## Elm UI 2 asset overview

    elm.opt.js                                   186.9kb
    elm.opt.min.js                                36.3kb
    elm.opt.min.js.gz                             12.2kb
    elm.opt.transformed.js                       244.3kb
    elm.opt.transformed.min.js                    31.9kb
    elm.opt.transformed.min.js.gz                 11.9kb

## elm-animator asset overview

    elm.opt.js                                   239.2kb
    elm.opt.min.js                                45.3kb
    elm.opt.min.js.gz                             15.3kb
    elm.opt.transformed.js                       312.4kb
    elm.opt.transformed.min.js                    40.4kb
    elm.opt.transformed.min.js.gz                   15kb

## Elm Markdown asset overview

    elm.opt.arrowize-functions.min.js             63.1kb
    elm.opt.arrowize-functions.min.js.gz            22kb
    elm.opt.inline-equality.min.js                69.8kb
    elm.opt.inline-equality.min.js.gz             22.3kb
    elm.opt.inline-functions.min.js               66.5kb
    elm.opt.inline-functions.min.js.gz              22kb
    elm.opt.inline-number-to-string.min.js        69.8kb
    elm.opt.inline-number-to-string.min.js.gz      22.4kb
    elm.opt.js                                   338.2kb
    elm.opt.min.js                                69.8kb
    elm.opt.min.js.gz                             22.3kb
    elm.opt.object-update.min.js                  69.8kb
    elm.opt.object-update.min.js.gz               22.3kb
    elm.opt.pass-unwrapped-functions.min.js       69.8kb
    elm.opt.pass-unwrapped-functions.min.js.gz      22.3kb
    elm.opt.transformed.js                       423.7kb
    elm.opt.transformed.min.js                    60.8kb
    elm.opt.transformed.min.js.gz                 21.7kb
    elm.opt.variant-shapes.min.js                 69.9kb
    elm.opt.variant-shapes.min.js.gz              22.3kb

## elm-obj-file asset overview

    elm.opt.js                                   231.5kb
    elm.opt.min.js                                60.8kb
    elm.opt.min.js.gz                             17.5kb
    elm.opt.transformed.js                       292.3kb
    elm.opt.transformed.min.js                    55.9kb
    elm.opt.transformed.min.js.gz                 17.2kb


## Elm Core

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| sum 300 list of custom types            |                              |firefox   |       150,372|         |
| sum 300 list of custom types            |final                         |firefox   |       174,275|  (116%) |
| sum 300 list of custom types            |                              |chrome    |     1,113,244|         |
| sum 300 list of custom types            |final                         |chrome    |     1,659,562|  (149%) |
| Update single record                    |                              |firefox   |    10,017,172|         |
| Update single record                    |final                         |firefox   |     5,599,691|   (56%) |
| Update single record                    |                              |chrome    |    14,752,360|         |
| Update single record                    |final                         |chrome    |    53,384,374|  (362%) |
| Update single record via inlining creation in elm|                              |firefox   |    67,640,323|         |
| Update single record via inlining creation in elm|final                         |firefox   |    66,291,196|   (98%) |
| Update single record via inlining creation in elm|                              |chrome    |   128,474,963|         |
| Update single record via inlining creation in elm|final                         |chrome    |   135,766,735|  (106%) |
| Return list literal                     |                              |firefox   |     5,654,776|         |
| Return list literal                     |final                         |firefox   |     5,899,223|  (104%) |
| Return list literal                     |                              |chrome    |    12,610,864|         |
| Return list literal                     |final                         |chrome    |    13,283,166|  (105%) |
| Dict.fromList                           |                              |firefox   |       301,180|         |
| Dict.fromList                           |final                         |firefox   |       612,018|  (203%) |
| Dict.fromList                           |                              |chrome    |       780,014|         |
| Dict.fromList                           |final                         |chrome    |     1,285,876|  (165%) |
| Dict.get                                |                              |firefox   |     4,763,106|         |
| Dict.get                                |final                         |firefox   |     8,400,663|  (176%) |
| Dict.get                                |                              |chrome    |    18,533,372|         |
| Dict.get                                |final                         |chrome    |    17,603,852|   (95%) |
| Dict.insert                             |                              |firefox   |     2,413,152|         |
| Dict.insert                             |final                         |firefox   |     5,240,567|  (217%) |
| Dict.insert                             |                              |chrome    |     9,580,578|         |
| Dict.insert                             |final                         |chrome    |    10,231,695|  (107%) |
| Dict.toList                             |                              |firefox   |     1,412,333|         |
| Dict.toList                             |final                         |firefox   |     4,280,534|  (303%) |
| Dict.toList                             |                              |chrome    |     3,894,968|         |
| Dict.toList                             |final                         |chrome    |     8,280,318|  (213%) |
| Dict.size                               |                              |firefox   |     4,880,405|         |
| Dict.size                               |final                         |firefox   |    13,189,370|  (270%) |
| Dict.size                               |                              |chrome    |    24,814,584|         |
| Dict.size                               |final                         |chrome    |    18,301,014|   (74%) |
| Calling a function with a 6 record arg  |                              |firefox   |    76,722,737|         |
| Calling a function with a 6 record arg  |final                         |firefox   |    73,209,449|   (95%) |
| Calling a function with a 6 record arg  |                              |chrome    |   169,515,377|         |
| Calling a function with a 6 record arg  |final                         |chrome    |   171,871,471|  (101%) |
| Calling a function with 6 args         |                              |firefox   |    61,094,040|         |
| Calling a function with 6 args         |final                         |firefox   |    76,566,579|  (125%) |
| Calling a function with 6 args         |                              |chrome    |   173,837,229|         |
| Calling a function with 6 args         |final                         |chrome    |   169,467,630|   (97%) |
| Encode string                           |                              |firefox   |     5,238,790|         |
| Encode string                           |final                         |firefox   |     5,886,602|  (112%) |
| Encode string                           |                              |chrome    |     4,363,527|         |
| Encode string                           |final                         |chrome    |     4,365,840|  (100%) |
| Encode Object                           |                              |firefox   |       775,906|         |
| Encode Object                           |final                         |firefox   |       940,937|  (121%) |
| Encode Object                           |                              |chrome    |     1,038,607|         |
| Encode Object                           |final                         |chrome    |     1,201,737|  (116%) |


## Html

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| create a 4 level nested html tree       |                              |firefox   |        19,878|         |
| create a 4 level nested html tree       |final                         |firefox   |        24,878|  (125%) |
| create a 4 level nested html tree       |                              |chrome    |        43,689|         |
| create a 4 level nested html tree       |final                         |chrome    |       113,266|  (259%) |


## Elm UI

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| create a 4 level nested Elm UI tree     |                              |firefox   |         2,061|         |
| create a 4 level nested Elm UI tree     |final                         |firefox   |         3,006|  (146%) |
| create a 4 level nested Elm UI tree     |                              |chrome    |         5,748|         |
| create a 4 level nested Elm UI tree     |final                         |chrome    |         6,682|  (116%) |


## Elm UI 2

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| create a 4 level nested Elm UI tree     |                              |firefox   |         4,276|         |
| create a 4 level nested Elm UI tree     |final                         |firefox   |         5,577|  (130%) |
| create a 4 level nested Elm UI tree     |                              |chrome    |        10,131|         |
| create a 4 level nested Elm UI tree     |final                         |chrome    |        12,112|  (120%) |


## elm-animator

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| stepwise - 100 steps                    |                              |firefox   |    22,918,766|         |
| stepwise - 100 steps                    |final                         |firefox   |    40,946,841|  (179%) |
| stepwise - 100 steps                    |                              |chrome    |    82,603,573|         |
| stepwise - 100 steps                    |final                         |chrome    |    85,377,699|  (103%) |
| presolved differential equation         |                              |firefox   |     6,531,124|         |
| presolved differential equation         |final                         |firefox   |    60,971,736|  (934%) |
| presolved differential equation         |                              |chrome    |   172,347,067|         |
| presolved differential equation         |final                         |chrome    |   173,370,046|  (101%) |
| elm/random - random float               |                              |firefox   |     5,363,127|         |
| elm/random - random float               |final                         |firefox   |    20,906,268|  (390%) |
| elm/random - random float               |                              |chrome    |    32,235,899|         |
| elm/random - random float               |final                         |chrome    |   145,729,971|  (452%) |
| scaled sine method                      |                              |firefox   |    80,900,947|         |
| scaled sine method                      |final                         |firefox   |    84,703,633|  (105%) |
| scaled sine method                      |                              |chrome    |   164,774,663|         |
| scaled sine method                      |final                         |chrome    |   172,700,589|  (105%) |
| interpolate to position                 |                              |firefox   |       444,581|         |
| interpolate to position                 |final                         |firefox   |       818,099|  (184%) |
| interpolate to position                 |                              |chrome    |     1,140,737|         |
| interpolate to position                 |final                         |chrome    |     1,248,761|  (109%) |
| capture frames(60fps)                   |                              |firefox   |         1,337|         |
| capture frames(60fps)                   |final                         |firefox   |         2,169|  (162%) |
| capture frames(60fps)                   |                              |chrome    |         3,076|         |
| capture frames(60fps)                   |final                         |chrome    |         4,409|  (143%) |
| capture frames(15fps)                   |                              |firefox   |         5,155|         |
| capture frames(15fps)                   |final                         |firefox   |         8,543|  (166%) |
| capture frames(15fps)                   |                              |chrome    |        12,221|         |
| capture frames(15fps)                   |final                         |chrome    |        17,503|  (143%) |
| Standard                                |                              |firefox   |    39,000,600|         |
| Standard                                |final                         |firefox   |    95,467,938|  (245%) |
| Standard                                |                              |chrome    |   172,473,430|         |
| Standard                                |final                         |chrome    |   169,654,842|   (98%) |
| (one - two) < 0 form                    |                              |firefox   |    39,968,178|         |
| (one - two) < 0 form                    |final                         |firefox   |   105,548,976|  (264%) |
| (one - two) < 0 form                    |                              |chrome    |   170,360,330|         |
| (one - two) < 0 form                    |final                         |chrome    |   171,852,243|  (101%) |
| Create spline                           |                              |firefox   |    14,662,522|         |
| Create spline                           |final                         |firefox   |    15,259,375|  (104%) |
| Create spline                           |                              |chrome    |    14,912,325|         |
| Create spline                           |final                         |chrome    |    14,934,777|  (100%) |
| Find x on spline                        |                              |firefox   |     2,767,071|         |
| Find x on spline                        |final                         |firefox   |     2,732,191|   (99%) |
| Find x on spline                        |                              |chrome    |     3,501,858|         |
| Find x on spline                        |final                         |chrome    |     3,579,522|  (102%) |


## Elm Markdown

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| just a heading                          |                              |firefox   |        47,362|         |
| just a heading                          |final                         |firefox   |       111,037|  (234%) |
| just a heading                          |                              |chrome    |       105,453|         |
| just a heading                          |final                         |chrome    |       172,385|  (163%) |
| elm-explorations/markdown readme        |                              |firefox   |         8,051|         |
| elm-explorations/markdown readme        |final                         |firefox   |        17,735|  (220%) |
| elm-explorations/markdown readme        |                              |chrome    |        18,601|         |
| elm-explorations/markdown readme        |final                         |chrome    |        33,242|  (179%) |
| withHeadingsAndLists                    |                              |firefox   |         2,942|         |
| withHeadingsAndLists                    |final                         |firefox   |         5,774|  (196%) |
| withHeadingsAndLists                    |                              |chrome    |         7,093|         |
| withHeadingsAndLists                    |final                         |chrome    |        11,460|  (162%) |
| withHeadingsAndListsAndHtml             |                              |firefox   |         1,226|         |
| withHeadingsAndListsAndHtml             |final                         |firefox   |         2,497|  (204%) |
| withHeadingsAndListsAndHtml             |                              |chrome    |         3,116|         |
| withHeadingsAndListsAndHtml             |final                         |chrome    |         5,099|  (164%) |


## elm-obj-file

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| decode                                  |                              |firefox   |           655|         |
| decode                                  |                              |firefox   |           480|   (73%) |
| decode                                  |final                         |firefox   |           673|  (103%) |
| decode                                  |final                         |firefox   |           867|  (132%) |
| decode                                  |                              |chrome    |           866|         |
| decode                                  |                              |chrome    |           718|   (83%) |
| decode                                  |final                         |chrome    |           835|   (96%) |
| decode                                  |final                         |chrome    |           946|  (109%) |



