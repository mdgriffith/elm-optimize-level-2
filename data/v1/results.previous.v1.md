# Benchmark results

## Elm Core asset overview

    elm.opt.js                                   166.5kb
    elm.opt.min.js                                33.1kb
    elm.opt.min.js.gz                             11.2kb
    elm.opt.transformed.js                       228.6kb
    elm.opt.transformed.min.js                    31.7kb
    elm.opt.transformed.min.js.gz                   11kb

## Elm CSS asset overview

    elm.opt.js                                   218.4kb
    elm.opt.min.js                                43.8kb
    elm.opt.min.js.gz                             14.3kb
    elm.opt.transformed.js                       297.9kb
    elm.opt.transformed.min.js                    42.2kb
    elm.opt.transformed.min.js.gz                 14.1kb

## Html asset overview

    elm.js                                       160.6kb
    elm.opt.js                                   157.6kb
    elm.opt.min.js                                30.2kb
    elm.opt.min.js.gz                             10.3kb
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
    elm.opt.transformed.js                       438.7kb
    elm.opt.transformed.min.js                    66.9kb
    elm.opt.transformed.min.js.gz                 22.1kb

## elm-obj-file asset overview

    elm.opt.js                                   230.2kb
    elm.opt.min.js                                59.5kb
    elm.opt.min.js.gz                             17.4kb
    elm.opt.transformed.js                         320kb
    elm.opt.transformed.min.js                    58.2kb
    elm.opt.transformed.min.js.gz                 17.3kb

## Elm Core

| Name                                              | Transformtions | Browser | Ops/Second  | % Change |
| ------------------------------------------------- | -------------- | ------- | ----------- | -------- |
| sum 300 list of custom types                      |                | safari  | 632,275     |          |
| sum 300 list of custom types                      | final          | safari  | 673,277     | (106%)   |
| sum 300 list of custom types                      |                | firefox | 123,664     |          |
| sum 300 list of custom types                      | final          | firefox | 129,614     | (105%)   |
| sum 300 list of custom types                      |                | chrome  | 524,993     |          |
| sum 300 list of custom types                      | final          | chrome  | 621,466     | (118%)   |
| Update single record                              |                | safari  | 185,020     |          |
| Update single record                              | final          | safari  | 200,997     | (109%)   |
| Update single record                              |                | firefox | 165,853     |          |
| Update single record                              | final          | firefox | 181,213     | (109%)   |
| Update single record                              |                | chrome  | 329,941     |          |
| Update single record                              | final          | chrome  | 341,686     | (104%)   |
| Update single record via inlining creation in elm |                | safari  | 36,903,773  |          |
| Update single record via inlining creation in elm | final          | safari  | 40,267,507  | (109%)   |
| Update single record via inlining creation in elm |                | firefox | 52,283,234  |          |
| Update single record via inlining creation in elm | final          | firefox | 50,650,606  | (97%)    |
| Update single record via inlining creation in elm |                | chrome  | 70,520,754  |          |
| Update single record via inlining creation in elm | final          | chrome  | 70,916,893  | (101%)   |
| Return list literal                               |                | safari  | 5,297,022   |          |
| Return list literal                               | final          | safari  | 5,776,004   | (109%)   |
| Return list literal                               |                | firefox | 4,137,062   |          |
| Return list literal                               | final          | firefox | 5,068,844   | (123%)   |
| Return list literal                               |                | chrome  | 10,646,816  |          |
| Return list literal                               | final          | chrome  | 10,770,650  | (101%)   |
| Dict.fromList                                     |                | safari  | 534,373     |          |
| Dict.fromList                                     | final          | safari  | 595,570     | (111%)   |
| Dict.fromList                                     |                | firefox | 242,513     |          |
| Dict.fromList                                     | final          | firefox | 476,392     | (196%)   |
| Dict.fromList                                     |                | chrome  | 457,628     |          |
| Dict.fromList                                     | final          | chrome  | 723,270     | (158%)   |
| Dict.get                                          |                | safari  | 6,344,171   |          |
| Dict.get                                          | final          | safari  | 7,140,865   | (113%)   |
| Dict.get                                          |                | firefox | 3,817,518   |          |
| Dict.get                                          | final          | firefox | 7,151,023   | (187%)   |
| Dict.get                                          |                | chrome  | 10,847,053  |          |
| Dict.get                                          | final          | chrome  | 10,553,801  | (97%)    |
| Dict.insert                                       |                | safari  | 3,887,048   |          |
| Dict.insert                                       | final          | safari  | 4,220,155   | (109%)   |
| Dict.insert                                       |                | firefox | 1,833,432   |          |
| Dict.insert                                       | final          | firefox | 4,079,166   | (222%)   |
| Dict.insert                                       |                | chrome  | 5,811,008   |          |
| Dict.insert                                       | final          | chrome  | 5,303,273   | (91%)    |
| Dict.toList                                       |                | safari  | 3,069,942   |          |
| Dict.toList                                       | final          | safari  | 3,927,788   | (128%)   |
| Dict.toList                                       |                | firefox | 1,010,034   |          |
| Dict.toList                                       | final          | firefox | 3,230,992   | (320%)   |
| Dict.toList                                       |                | chrome  | 2,392,734   |          |
| Dict.toList                                       | final          | chrome  | 6,352,259   | (265%)   |
| Dict.size                                         |                | safari  | 9,095,513   |          |
| Dict.size                                         | final          | safari  | 13,068,995  | (144%)   |
| Dict.size                                         |                | firefox | 3,513,888   |          |
| Dict.size                                         | final          | firefox | 9,221,115   | (262%)   |
| Dict.size                                         |                | chrome  | 15,151,221  |          |
| Dict.size                                         | final          | chrome  | 12,258,153  | (81%)    |
| Calling a function with a 6 record arg            |                | safari  | 55,285,490  |          |
| Calling a function with a 6 record arg            | final          | safari  | 54,912,037  | (99%)    |
| Calling a function with a 6 record arg            |                | firefox | 50,186,782  |          |
| Calling a function with a 6 record arg            | final          | firefox | 50,357,360  | (100%)   |
| Calling a function with a 6 record arg            |                | chrome  | 110,629,757 |          |
| Calling a function with a 6 record arg            | final          | chrome  | 110,441,425 | (100%)   |
| Calling a function with 6 args                   |                | safari  | 36,097,431  |          |
| Calling a function with 6 args                   | final          | safari  | 54,665,740  | (151%)   |
| Calling a function with 6 args                   |                | firefox | 44,263,702  |          |
| Calling a function with 6 args                   | final          | firefox | 50,269,406  | (114%)   |
| Calling a function with 6 args                   |                | chrome  | 110,629,402 |          |
| Calling a function with 6 args                   | final          | chrome  | 109,036,995 | (99%)    |
| Encode string                                     |                | safari  | 3,882,470   |          |
| Encode string                                     | final          | safari  | 4,015,708   | (103%)   |
| Encode string                                     |                | firefox | 4,864,571   |          |
| Encode string                                     | final          | firefox | 5,482,166   | (113%)   |
| Encode string                                     |                | chrome  | 3,618,515   |          |
| Encode string                                     | final          | chrome  | 3,060,671   | (85%)    |
| Encode Object                                     |                | safari  | 615,113     |          |
| Encode Object                                     | final          | safari  | 694,533     | (113%)   |
| Encode Object                                     |                | firefox | 558,433     |          |
| Encode Object                                     | final          | firefox | 689,501     | (123%)   |
| Encode Object                                     |                | chrome  | 677,747     |          |
| Encode Object                                     | final          | chrome  | 785,184     | (116%)   |
| Equals literal int                                |                | safari  | 54,717,726  |          |
| Equals literal int                                | final          | safari  | 54,083,274  | (99%)    |
| Equals literal int                                |                | firefox | 30,565,517  |          |
| Equals literal int                                | final          | firefox | 71,468,487  | (234%)   |
| Equals literal int                                |                | chrome  | 103,458,508 |          |
| Equals literal int                                | final          | chrome  | 102,192,634 | (99%)    |
| Equals, no literal                                |                | safari  | 29,499,880  |          |
| Equals, no literal                                | final          | safari  | 29,484,150  | (100%)   |
| Equals, no literal                                |                | firefox | 28,769,111  |          |
| Equals, no literal                                | final          | firefox | 56,657,546  | (197%)   |
| Equals, no literal                                |                | chrome  | 103,157,849 |          |
| Equals, no literal                                | final          | chrome  | 102,886,157 | (100%)   |

## Elm CSS

| Name            | Transformtions | Browser | Ops/Second | % Change |
| --------------- | -------------- | ------- | ---------- | -------- |
| A simple button |                | safari  | 41,802     |          |
| A simple button | final          | safari  | 53,167     | (127%)   |
| A simple button |                | firefox | 22,022     |          |
| A simple button | final          | firefox | 36,538     | (166%)   |
| A simple button |                | chrome  | 77,552     |          |
| A simple button | final          | chrome  | 78,562     | (101%)   |

## Html

| Name                              | Transformtions | Browser | Ops/Second | % Change |
| --------------------------------- | -------------- | ------- | ---------- | -------- |
| create a 4 level nested html tree |                | safari  | 34,899     |          |
| create a 4 level nested html tree | final          | safari  | 39,631     | (114%)   |
| create a 4 level nested html tree |                | firefox | 15,909     |          |
| create a 4 level nested html tree | final          | firefox | 22,361     | (141%)   |
| create a 4 level nested html tree |                | chrome  | 28,959     |          |
| create a 4 level nested html tree | final          | chrome  | 72,753     | (251%)   |

## Elm UI

| Name                                | Transformtions | Browser | Ops/Second | % Change |
| ----------------------------------- | -------------- | ------- | ---------- | -------- |
| create a 4 level nested Elm UI tree |                | safari  | 2,371      |          |
| create a 4 level nested Elm UI tree | final          | safari  | 2,831      | (119%)   |
| create a 4 level nested Elm UI tree |                | firefox | 1,110      |          |
| create a 4 level nested Elm UI tree | final          | firefox | 1,890      | (170%)   |
| create a 4 level nested Elm UI tree |                | chrome  | 3,374      |          |
| create a 4 level nested Elm UI tree | final          | chrome  | 4,075      | (121%)   |

## elm-animator

| Name                            | Transformtions | Browser | Ops/Second  | % Change |
| ------------------------------- | -------------- | ------- | ----------- | -------- |
| stepwise - 100 steps            |                | safari  | 41,030,719  |          |
| stepwise - 100 steps            | final          | safari  | 39,907,646  | (97%)    |
| stepwise - 100 steps            |                | firefox | 16,956,256  |          |
| stepwise - 100 steps            | final          | firefox | 29,016,773  | (171%)   |
| stepwise - 100 steps            |                | chrome  | 53,385,508  |          |
| stepwise - 100 steps            | final          | chrome  | 53,482,329  | (100%)   |
| presolved differential equation |                | safari  | 11,205,383  |          |
| presolved differential equation | final          | safari  | 50,069,255  | (447%)   |
| presolved differential equation |                | firefox | 5,227,126   |          |
| presolved differential equation | final          | firefox | 38,939,998  | (745%)   |
| presolved differential equation |                | chrome  | 109,446,958 |          |
| presolved differential equation | final          | chrome  | 102,383,773 | (94%)    |
| elm/random - random float       |                | safari  | 5,837,590   |          |
| elm/random - random float       | final          | safari  | 9,804,193   | (168%)   |
| elm/random - random float       |                | firefox | 3,940,546   |          |
| elm/random - random float       | final          | firefox | 18,294,173  | (464%)   |
| elm/random - random float       |                | chrome  | 20,292,795  |          |
| elm/random - random float       | final          | chrome  | 79,952,185  | (394%)   |
| scaled sine method              |                | safari  | 54,659,473  |          |
| scaled sine method              | final          | safari  | 55,268,321  | (101%)   |
| scaled sine method              |                | firefox | 48,391,539  |          |
| scaled sine method              | final          | firefox | 52,656,347  | (109%)   |
| scaled sine method              |                | chrome  | 110,693,400 |          |
| scaled sine method              | final          | chrome  | 110,590,370 | (100%)   |
| interpolate to position         |                | safari  | 424,776     |          |
| interpolate to position         | final          | safari  | 534,220     | (126%)   |
| interpolate to position         |                | firefox | 208,494     |          |
| interpolate to position         | final          | firefox | 417,110     | (200%)   |
| interpolate to position         |                | chrome  | 644,881     |          |
| interpolate to position         | final          | chrome  | 653,393     | (101%)   |
| capture frames(60fps)           |                | safari  | 1,369       |          |
| capture frames(60fps)           | final          | safari  | 1,750       | (128%)   |
| capture frames(60fps)           |                | firefox | 661         |          |
| capture frames(60fps)           | final          | firefox | 1,346       | (204%)   |
| capture frames(60fps)           |                | chrome  | 1,792       |          |
| capture frames(60fps)           | final          | chrome  | 1,899       | (106%)   |
| capture frames(15fps)           |                | safari  | 5,367       |          |
| capture frames(15fps)           | final          | safari  | 6,920       | (129%)   |
| capture frames(15fps)           |                | firefox | 2,461       |          |
| capture frames(15fps)           | final          | firefox | 4,875       | (198%)   |
| capture frames(15fps)           |                | chrome  | 6,824       |          |
| capture frames(15fps)           | final          | chrome  | 7,386       | (108%)   |
| Standard equality               |                | safari  | 33,587,780  |          |
| Standard equality               | final          | safari  | 39,840,290  | (119%)   |
| Standard equality               |                | firefox | 26,787,868  |          |
| Standard equality               | final          | firefox | 61,579,006  | (230%)   |
| Standard equality               |                | chrome  | 94,414,867  |          |
| Standard equality               | final          | chrome  | 103,362,327 | (109%)   |
| (one - two) < 0 form            |                | safari  | 43,071,520  |          |
| (one - two) < 0 form            | final          | safari  | 55,126,291  | (128%)   |
| (one - two) < 0 form            |                | firefox | 30,722,876  |          |
| (one - two) < 0 form            | final          | firefox | 73,991,834  | (241%)   |
| (one - two) < 0 form            |                | chrome  | 100,519,952 |          |
| (one - two) < 0 form            | final          | chrome  | 102,390,267 | (102%)   |
| Create spline                   |                | safari  | 10,345,042  |          |
| Create spline                   | final          | safari  | 9,988,955   | (97%)    |
| Create spline                   |                | firefox | 10,990,739  |          |
| Create spline                   | final          | firefox | 13,921,961  | (127%)   |
| Create spline                   |                | chrome  | 10,740,438  |          |
| Create spline                   | final          | chrome  | 10,597,406  | (99%)    |
| Find x on spline                |                | safari  | 2,159,381   |          |
| Find x on spline                | final          | safari  | 2,216,936   | (103%)   |
| Find x on spline                |                | firefox | 1,987,640   |          |
| Find x on spline                | final          | firefox | 2,038,949   | (103%)   |
| Find x on spline                |                | chrome  | 1,952,847   |          |
| Find x on spline                | final          | chrome  | 1,980,707   | (101%)   |

## Elm Markdown

| Name                             | Transformtions | Browser | Ops/Second | % Change |
| -------------------------------- | -------------- | ------- | ---------- | -------- |
| just a heading                   |                | safari  | 45,805     |          |
| just a heading                   | final          | safari  | 63,660     | (139%)   |
| just a heading                   |                | firefox | 23,380     |          |
| just a heading                   | final          | firefox | 50,622     | (217%)   |
| just a heading                   |                | chrome  | 52,368     |          |
| just a heading                   | final          | chrome  | 76,803     | (147%)   |
| elm-explorations/markdown readme |                | safari  | 15,304     |          |
| elm-explorations/markdown readme | final          | safari  | 19,942     | (130%)   |
| elm-explorations/markdown readme |                | firefox | 6,773      |          |
| elm-explorations/markdown readme | final          | firefox | 14,846     | (219%)   |
| elm-explorations/markdown readme |                | chrome  | 14,528     |          |
| elm-explorations/markdown readme | final          | chrome  | 22,843     | (157%)   |
| withHeadingsAndLists             |                | safari  | 4,620      |          |
| withHeadingsAndLists             | final          | safari  | 6,045      | (131%)   |
| withHeadingsAndLists             |                | firefox | 2,121      |          |
| withHeadingsAndLists             | final          | firefox | 4,167      | (196%)   |
| withHeadingsAndLists             |                | chrome  | 4,767      |          |
| withHeadingsAndLists             | final          | chrome  | 6,782      | (142%)   |
| withHeadingsAndListsAndHtml      |                | safari  | 2,428      |          |
| withHeadingsAndListsAndHtml      | final          | safari  | 3,196      | (132%)   |
| withHeadingsAndListsAndHtml      |                | firefox | 1,096      |          |
| withHeadingsAndListsAndHtml      | final          | firefox | 2,194      | (200%)   |
| withHeadingsAndListsAndHtml      |                | chrome  | 2,489      |          |
| withHeadingsAndListsAndHtml      | final          | chrome  | 3,572      | (144%)   |

## elm-obj-file

| Name                  | Transformtions | Browser | Ops/Second | % Change |
| --------------------- | -------------- | ------- | ---------- | -------- |
| Decode Triangles      |                | safari  | 617        |          |
| Decode Triangles      | final          | safari  | 655        | (106%)   |
| Decode Triangles      |                | firefox | 424        |          |
| Decode Triangles      | final          | firefox | 696        | (164%)   |
| Decode Triangles      |                | chrome  | 534        |          |
| Decode Triangles      | final          | chrome  | 597        | (112%)   |
| Decode Textured Faces |                | safari  | 510        |          |
| Decode Textured Faces | final          | safari  | 537        | (105%)   |
| Decode Textured Faces |                | firefox | 293        |          |
| Decode Textured Faces | final          | firefox | 528        | (180%)   |
| Decode Textured Faces |                | chrome  | 442        |          |
| Decode Textured Faces | final          | chrome  | 527        | (119%)   |
