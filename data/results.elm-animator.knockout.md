# Benchmark results

## elm-animator asset overview

    elm.opt.js                                   239.2kb
    elm.opt.min.js                                45.3kb
    elm.opt.min.js.gz                             15.3kb
    elm.opt.minus-without-arrowize-functions.min.js      43.6kb
    elm.opt.minus-without-arrowize-functions.min.js.gz      15.1kb
    elm.opt.minus-without-inline-equality.min.js      40.4kb
    elm.opt.minus-without-inline-equality.min.js.gz        15kb
    elm.opt.minus-without-inline-functions.min.js      41.8kb
    elm.opt.minus-without-inline-functions.min.js.gz      15.2kb
    elm.opt.minus-without-inline-number-to-string.min.js      40.4kb
    elm.opt.minus-without-inline-number-to-string.min.js.gz        15kb
    elm.opt.minus-without-object-update.min.js      40.5kb
    elm.opt.minus-without-object-update.min.js.gz      15.1kb
    elm.opt.minus-without-passing-unwrapped-functions.min.js      40.1kb
    elm.opt.minus-without-passing-unwrapped-functions.min.js.gz        15kb
    elm.opt.minus-without-variant-shapes.min.js      40.4kb
    elm.opt.minus-without-variant-shapes.min.js.gz        15kb
    elm.opt.transformed.js                       312.4kb
    elm.opt.transformed.min.js                    40.4kb
    elm.opt.transformed.min.js.gz                   15kb


## elm-animator

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| stepwise - 100 steps                    |                              |firefox   |    22,856,051|         |
| stepwise - 100 steps                    |final                         |firefox   |    39,008,614|  (171%) |
| stepwise - 100 steps                    |without arrowize functions    |firefox   |    39,364,990|  (172%) |
| stepwise - 100 steps                    |without inline equality       |firefox   |    39,053,517|  (171%) |
| stepwise - 100 steps                    |without inline functions      |firefox   |    22,808,542|  (100%) |
| stepwise - 100 steps                    |without inline number-to-string|firefox   |    38,092,833|  (167%) |
| stepwise - 100 steps                    |without object update         |firefox   |    39,713,476|  (174%) |
| stepwise - 100 steps                    |without passing unwrapped functions|firefox   |    40,616,101|  (178%) |
| stepwise - 100 steps                    |without variant shapes        |firefox   |    39,037,749|  (171%) |
| stepwise - 100 steps                    |                              |chrome    |    79,623,094|         |
| stepwise - 100 steps                    |final                         |chrome    |    83,343,571|  (105%) |
| stepwise - 100 steps                    |without arrowize functions    |chrome    |    78,686,375|   (99%) |
| stepwise - 100 steps                    |without inline equality       |chrome    |    80,716,370|  (101%) |
| stepwise - 100 steps                    |without inline functions      |chrome    |    81,641,226|  (103%) |
| stepwise - 100 steps                    |without inline number-to-string|chrome    |    83,011,988|  (104%) |
| stepwise - 100 steps                    |without object update         |chrome    |    82,214,285|  (103%) |
| stepwise - 100 steps                    |without passing unwrapped functions|chrome    |    82,487,840|  (104%) |
| stepwise - 100 steps                    |without variant shapes        |chrome    |    84,639,332|  (106%) |
| presolved differential equation         |                              |firefox   |     6,405,324|         |
| presolved differential equation         |final                         |firefox   |    55,904,710|  (873%) |
| presolved differential equation         |without arrowize functions    |firefox   |    58,105,305|  (907%) |
| presolved differential equation         |without inline equality       |firefox   |    56,859,814|  (888%) |
| presolved differential equation         |without inline functions      |firefox   |     6,159,837|   (96%) |
| presolved differential equation         |without inline number-to-string|firefox   |    58,854,054|  (919%) |
| presolved differential equation         |without object update         |firefox   |    55,744,225|  (870%) |
| presolved differential equation         |without passing unwrapped functions|firefox   |    57,304,158|  (895%) |
| presolved differential equation         |without variant shapes        |firefox   |    57,422,114|  (896%) |
| presolved differential equation         |                              |chrome    |   165,273,764|         |
| presolved differential equation         |final                         |chrome    |   167,544,506|  (101%) |
| presolved differential equation         |without arrowize functions    |chrome    |   166,427,288|  (101%) |
| presolved differential equation         |without inline equality       |chrome    |   161,836,385|   (98%) |
| presolved differential equation         |without inline functions      |chrome    |   162,371,144|   (98%) |
| presolved differential equation         |without inline number-to-string|chrome    |   166,093,929|  (100%) |
| presolved differential equation         |without object update         |chrome    |   163,323,822|   (99%) |
| presolved differential equation         |without passing unwrapped functions|chrome    |   165,560,425|  (100%) |
| presolved differential equation         |without variant shapes        |chrome    |   167,781,576|  (102%) |
| elm/random - random float               |                              |firefox   |     5,273,617|         |
| elm/random - random float               |final                         |firefox   |    20,535,404|  (389%) |
| elm/random - random float               |without arrowize functions    |firefox   |    21,012,774|  (398%) |
| elm/random - random float               |without inline equality       |firefox   |    19,802,054|  (375%) |
| elm/random - random float               |without inline functions      |firefox   |     5,141,848|   (98%) |
| elm/random - random float               |without inline number-to-string|firefox   |    20,727,098|  (393%) |
| elm/random - random float               |without object update         |firefox   |    20,872,658|  (396%) |
| elm/random - random float               |without passing unwrapped functions|firefox   |    21,198,680|  (402%) |
| elm/random - random float               |without variant shapes        |firefox   |    20,784,984|  (394%) |
| elm/random - random float               |                              |chrome    |    30,331,886|         |
| elm/random - random float               |final                         |chrome    |   135,386,372|  (446%) |
| elm/random - random float               |without arrowize functions    |chrome    |   141,539,178|  (467%) |
| elm/random - random float               |without inline equality       |chrome    |   131,073,596|  (432%) |
| elm/random - random float               |without inline functions      |chrome    |    30,306,500|  (100%) |
| elm/random - random float               |without inline number-to-string|chrome    |   140,291,614|  (463%) |
| elm/random - random float               |without object update         |chrome    |   133,465,093|  (440%) |
| elm/random - random float               |without passing unwrapped functions|chrome    |   134,457,027|  (443%) |
| elm/random - random float               |without variant shapes        |chrome    |   134,455,421|  (443%) |
| scaled sine method                      |                              |firefox   |    76,705,184|         |
| scaled sine method                      |final                         |firefox   |    78,884,858|  (103%) |
| scaled sine method                      |without arrowize functions    |firefox   |    78,579,148|  (102%) |
| scaled sine method                      |without inline equality       |firefox   |    79,777,897|  (104%) |
| scaled sine method                      |without inline functions      |firefox   |    81,552,964|  (106%) |
| scaled sine method                      |without inline number-to-string|firefox   |    81,461,886|  (106%) |
| scaled sine method                      |without object update         |firefox   |    79,355,449|  (103%) |
| scaled sine method                      |without passing unwrapped functions|firefox   |    80,007,508|  (104%) |
| scaled sine method                      |without variant shapes        |firefox   |    79,672,091|  (104%) |
| scaled sine method                      |                              |chrome    |   166,904,406|         |
| scaled sine method                      |final                         |chrome    |   167,808,963|  (101%) |
| scaled sine method                      |without arrowize functions    |chrome    |   167,851,064|  (101%) |
| scaled sine method                      |without inline equality       |chrome    |   164,361,091|   (98%) |
| scaled sine method                      |without inline functions      |chrome    |   164,485,724|   (99%) |
| scaled sine method                      |without inline number-to-string|chrome    |   169,526,331|  (102%) |
| scaled sine method                      |without object update         |chrome    |   165,640,131|   (99%) |
| scaled sine method                      |without passing unwrapped functions|chrome    |   168,508,127|  (101%) |
| scaled sine method                      |without variant shapes        |chrome    |   168,284,072|  (101%) |
| interpolate to position                 |                              |firefox   |       439,176|         |
| interpolate to position                 |final                         |firefox   |       790,666|  (180%) |
| interpolate to position                 |without arrowize functions    |firefox   |       774,432|  (176%) |
| interpolate to position                 |without inline equality       |firefox   |       757,181|  (172%) |
| interpolate to position                 |without inline functions      |firefox   |       425,048|   (97%) |
| interpolate to position                 |without inline number-to-string|firefox   |       770,073|  (175%) |
| interpolate to position                 |without object update         |firefox   |       825,705|  (188%) |
| interpolate to position                 |without passing unwrapped functions|firefox   |       789,070|  (180%) |
| interpolate to position                 |without variant shapes        |firefox   |       787,143|  (179%) |
| interpolate to position                 |                              |chrome    |     1,078,911|         |
| interpolate to position                 |final                         |chrome    |     1,210,005|  (112%) |
| interpolate to position                 |without arrowize functions    |chrome    |     1,200,446|  (111%) |
| interpolate to position                 |without inline equality       |chrome    |     1,159,306|  (107%) |
| interpolate to position                 |without inline functions      |chrome    |     1,108,685|  (103%) |
| interpolate to position                 |without inline number-to-string|chrome    |     1,210,723|  (112%) |
| interpolate to position                 |without object update         |chrome    |     1,198,253|  (111%) |
| interpolate to position                 |without passing unwrapped functions|chrome    |     1,203,706|  (112%) |
| interpolate to position                 |without variant shapes        |chrome    |     1,205,001|  (112%) |
| capture frames(60fps)                   |                              |firefox   |         1,307|         |
| capture frames(60fps)                   |final                         |firefox   |         2,142|  (164%) |
| capture frames(60fps)                   |without arrowize functions    |firefox   |         2,127|  (163%) |
| capture frames(60fps)                   |without inline equality       |firefox   |         2,069|  (158%) |
| capture frames(60fps)                   |without inline functions      |firefox   |         1,194|   (91%) |
| capture frames(60fps)                   |without inline number-to-string|firefox   |         2,118|  (162%) |
| capture frames(60fps)                   |without object update         |firefox   |         2,313|  (177%) |
| capture frames(60fps)                   |without passing unwrapped functions|firefox   |         2,112|  (162%) |
| capture frames(60fps)                   |without variant shapes        |firefox   |         2,108|  (161%) |
| capture frames(60fps)                   |                              |chrome    |         2,902|         |
| capture frames(60fps)                   |final                         |chrome    |         4,292|  (148%) |
| capture frames(60fps)                   |without arrowize functions    |chrome    |         4,283|  (148%) |
| capture frames(60fps)                   |without inline equality       |chrome    |         4,128|  (142%) |
| capture frames(60fps)                   |without inline functions      |chrome    |         3,820|  (132%) |
| capture frames(60fps)                   |without inline number-to-string|chrome    |         4,283|  (148%) |
| capture frames(60fps)                   |without object update         |chrome    |         3,209|  (111%) |
| capture frames(60fps)                   |without passing unwrapped functions|chrome    |         4,271|  (147%) |
| capture frames(60fps)                   |without variant shapes        |chrome    |         4,245|  (146%) |
| capture frames(15fps)                   |                              |firefox   |         5,049|         |
| capture frames(15fps)                   |final                         |firefox   |         8,429|  (167%) |
| capture frames(15fps)                   |without arrowize functions    |firefox   |         8,433|  (167%) |
| capture frames(15fps)                   |without inline equality       |firefox   |         8,182|  (162%) |
| capture frames(15fps)                   |without inline functions      |firefox   |         4,723|   (94%) |
| capture frames(15fps)                   |without inline number-to-string|firefox   |         8,335|  (165%) |
| capture frames(15fps)                   |without object update         |firefox   |         9,644|  (191%) |
| capture frames(15fps)                   |without passing unwrapped functions|firefox   |         8,373|  (166%) |
| capture frames(15fps)                   |without variant shapes        |firefox   |         8,243|  (163%) |
| capture frames(15fps)                   |                              |chrome    |        11,510|         |
| capture frames(15fps)                   |final                         |chrome    |        17,044|  (148%) |
| capture frames(15fps)                   |without arrowize functions    |chrome    |        16,989|  (148%) |
| capture frames(15fps)                   |without inline equality       |chrome    |        16,202|  (141%) |
| capture frames(15fps)                   |without inline functions      |chrome    |        15,143|  (132%) |
| capture frames(15fps)                   |without inline number-to-string|chrome    |        17,019|  (148%) |
| capture frames(15fps)                   |without object update         |chrome    |        12,682|  (110%) |
| capture frames(15fps)                   |without passing unwrapped functions|chrome    |        16,909|  (147%) |
| capture frames(15fps)                   |without variant shapes        |chrome    |        16,785|  (146%) |
| Standard                                |                              |firefox   |    37,911,933|         |
| Standard                                |final                         |firefox   |    86,129,589|  (227%) |
| Standard                                |without arrowize functions    |firefox   |    86,732,337|  (229%) |
| Standard                                |without inline equality       |firefox   |    88,121,861|  (232%) |
| Standard                                |without inline functions      |firefox   |    36,778,304|   (97%) |
| Standard                                |without inline number-to-string|firefox   |    88,470,924|  (233%) |
| Standard                                |without object update         |firefox   |    89,799,841|  (237%) |
| Standard                                |without passing unwrapped functions|firefox   |    87,975,729|  (232%) |
| Standard                                |without variant shapes        |firefox   |    86,022,259|  (227%) |
| Standard                                |                              |chrome    |   162,435,371|         |
| Standard                                |final                         |chrome    |   168,299,857|  (104%) |
| Standard                                |without arrowize functions    |chrome    |   166,267,175|  (102%) |
| Standard                                |without inline equality       |chrome    |   156,253,909|   (96%) |
| Standard                                |without inline functions      |chrome    |   163,681,469|  (101%) |
| Standard                                |without inline number-to-string|chrome    |   162,328,959|  (100%) |
| Standard                                |without object update         |chrome    |   161,866,455|  (100%) |
| Standard                                |without passing unwrapped functions|chrome    |   163,815,004|  (101%) |
| Standard                                |without variant shapes        |chrome    |   164,850,963|  (101%) |
| (one - two) < 0 form                    |                              |firefox   |    39,230,505|         |
| (one - two) < 0 form                    |final                         |firefox   |    98,997,053|  (252%) |
| (one - two) < 0 form                    |without arrowize functions    |firefox   |   101,884,988|  (260%) |
| (one - two) < 0 form                    |without inline equality       |firefox   |   101,280,890|  (258%) |
| (one - two) < 0 form                    |without inline functions      |firefox   |    39,554,438|  (101%) |
| (one - two) < 0 form                    |without inline number-to-string|firefox   |    99,835,201|  (254%) |
| (one - two) < 0 form                    |without object update         |firefox   |   105,160,181|  (268%) |
| (one - two) < 0 form                    |without passing unwrapped functions|firefox   |   103,614,480|  (264%) |
| (one - two) < 0 form                    |without variant shapes        |firefox   |   101,330,361|  (258%) |
| (one - two) < 0 form                    |                              |chrome    |   162,921,346|         |
| (one - two) < 0 form                    |final                         |chrome    |   167,462,591|  (103%) |
| (one - two) < 0 form                    |without arrowize functions    |chrome    |   166,660,552|  (102%) |
| (one - two) < 0 form                    |without inline equality       |chrome    |   159,310,836|   (98%) |
| (one - two) < 0 form                    |without inline functions      |chrome    |   161,906,392|   (99%) |
| (one - two) < 0 form                    |without inline number-to-string|chrome    |   165,785,040|  (102%) |
| (one - two) < 0 form                    |without object update         |chrome    |   160,531,764|   (99%) |
| (one - two) < 0 form                    |without passing unwrapped functions|chrome    |   165,414,068|  (102%) |
| (one - two) < 0 form                    |without variant shapes        |chrome    |   164,387,933|  (101%) |
| Create spline                           |                              |firefox   |    13,886,356|         |
| Create spline                           |final                         |firefox   |    16,529,442|  (119%) |
| Create spline                           |without arrowize functions    |firefox   |    15,137,529|  (109%) |
| Create spline                           |without inline equality       |firefox   |    15,017,032|  (108%) |
| Create spline                           |without inline functions      |firefox   |    13,963,102|  (101%) |
| Create spline                           |without inline number-to-string|firefox   |    14,962,341|  (108%) |
| Create spline                           |without object update         |firefox   |    16,807,477|  (121%) |
| Create spline                           |without passing unwrapped functions|firefox   |    16,739,550|  (121%) |
| Create spline                           |without variant shapes        |firefox   |    15,746,778|  (113%) |
| Create spline                           |                              |chrome    |    13,872,283|         |
| Create spline                           |final                         |chrome    |    14,386,437|  (104%) |
| Create spline                           |without arrowize functions    |chrome    |    14,549,113|  (105%) |
| Create spline                           |without inline equality       |chrome    |    13,826,032|  (100%) |
| Create spline                           |without inline functions      |chrome    |    14,210,584|  (102%) |
| Create spline                           |without inline number-to-string|chrome    |    14,515,837|  (105%) |
| Create spline                           |without object update         |chrome    |    14,134,845|  (102%) |
| Create spline                           |without passing unwrapped functions|chrome    |    14,469,618|  (104%) |
| Create spline                           |without variant shapes        |chrome    |    14,351,336|  (103%) |
| Find x on spline                        |                              |firefox   |     2,653,114|         |
| Find x on spline                        |final                         |firefox   |     2,664,027|  (100%) |
| Find x on spline                        |without arrowize functions    |firefox   |     2,640,616|  (100%) |
| Find x on spline                        |without inline equality       |firefox   |     2,651,591|  (100%) |
| Find x on spline                        |without inline functions      |firefox   |     2,620,741|   (99%) |
| Find x on spline                        |without inline number-to-string|firefox   |     2,616,729|   (99%) |
| Find x on spline                        |without object update         |firefox   |     2,688,139|  (101%) |
| Find x on spline                        |without passing unwrapped functions|firefox   |     2,631,677|   (99%) |
| Find x on spline                        |without variant shapes        |firefox   |     2,709,326|  (102%) |
| Find x on spline                        |                              |chrome    |     3,352,116|         |
| Find x on spline                        |final                         |chrome    |     3,390,888|  (101%) |
| Find x on spline                        |without arrowize functions    |chrome    |     3,076,470|   (92%) |
| Find x on spline                        |without inline equality       |chrome    |     3,301,888|   (99%) |
| Find x on spline                        |without inline functions      |chrome    |     2,825,402|   (84%) |
| Find x on spline                        |without inline number-to-string|chrome    |     3,447,042|  (103%) |
| Find x on spline                        |without object update         |chrome    |     3,392,876|  (101%) |
| Find x on spline                        |without passing unwrapped functions|chrome    |     3,415,137|  (102%) |
| Find x on spline                        |without variant shapes        |chrome    |     3,440,538|  (103%) |



