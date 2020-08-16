# Benchmark results

## elm-animator asset overview

    elm.opt.js                                   239.2kb
    elm.opt.min.js                                45.3kb
    elm.opt.min.js.gz                             15.3kb
    elm.opt.minus-without-inline-equality.min.js      43.7kb
    elm.opt.minus-without-inline-equality.min.js.gz      15.2kb
    elm.opt.minus-without-inline-functions.min.js      45.3kb
    elm.opt.minus-without-inline-functions.min.js.gz      15.3kb
    elm.opt.minus-without-inline-list-literals.min.js      43.7kb
    elm.opt.minus-without-inline-list-literals.min.js.gz      15.2kb
    elm.opt.minus-without-inline-number-to-string.min.js      43.7kb
    elm.opt.minus-without-inline-number-to-string.min.js.gz      15.2kb
    elm.opt.minus-without-object-update.min.js      43.7kb
    elm.opt.minus-without-object-update.min.js.gz      15.2kb
    elm.opt.minus-without-passing-unwrapped-functions.min.js      43.4kb
    elm.opt.minus-without-passing-unwrapped-functions.min.js.gz      15.1kb
    elm.opt.minus-without-variant-shapes.min.js      43.7kb
    elm.opt.minus-without-variant-shapes.min.js.gz      15.2kb
    elm.opt.transformed.js                       329.4kb
    elm.opt.transformed.min.js                    43.7kb
    elm.opt.transformed.min.js.gz                 15.2kb


## elm-animator

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| stepwise - 100 steps                    |                              |firefox   |    20,982,322|         |
| stepwise - 100 steps                    |final                         |firefox   |    39,973,900|  (191%) |
| stepwise - 100 steps                    |without inline equality       |firefox   |    40,876,551|  (195%) |
| stepwise - 100 steps                    |without inline functions      |firefox   |    22,281,077|  (106%) |
| stepwise - 100 steps                    |without inline list literals  |firefox   |    40,129,503|  (191%) |
| stepwise - 100 steps                    |without inline number-to-string|firefox   |    40,535,123|  (193%) |
| stepwise - 100 steps                    |without object update         |firefox   |    40,286,397|  (192%) |
| stepwise - 100 steps                    |without passing unwrapped functions|firefox   |    41,392,406|  (197%) |
| stepwise - 100 steps                    |without variant shapes        |firefox   |    38,919,322|  (185%) |
| stepwise - 100 steps                    |                              |chrome    |    80,001,144|         |
| stepwise - 100 steps                    |final                         |chrome    |    78,166,436|   (98%) |
| stepwise - 100 steps                    |without inline equality       |chrome    |    78,018,757|   (98%) |
| stepwise - 100 steps                    |without inline functions      |chrome    |    78,237,509|   (98%) |
| stepwise - 100 steps                    |without inline list literals  |chrome    |    77,658,434|   (97%) |
| stepwise - 100 steps                    |without inline number-to-string|chrome    |    78,771,199|   (98%) |
| stepwise - 100 steps                    |without object update         |chrome    |    77,011,590|   (96%) |
| stepwise - 100 steps                    |without passing unwrapped functions|chrome    |    78,313,302|   (98%) |
| stepwise - 100 steps                    |without variant shapes        |chrome    |    79,058,977|   (99%) |
| presolved differential equation         |                              |firefox   |     6,152,885|         |
| presolved differential equation         |final                         |firefox   |    55,221,679|  (897%) |
| presolved differential equation         |without inline equality       |firefox   |    57,165,895|  (929%) |
| presolved differential equation         |without inline functions      |firefox   |     6,566,303|  (107%) |
| presolved differential equation         |without inline list literals  |firefox   |    56,365,757|  (916%) |
| presolved differential equation         |without inline number-to-string|firefox   |    59,552,070|  (968%) |
| presolved differential equation         |without object update         |firefox   |    57,644,223|  (937%) |
| presolved differential equation         |without passing unwrapped functions|firefox   |    55,645,695|  (904%) |
| presolved differential equation         |without variant shapes        |firefox   |    59,084,281|  (960%) |
| presolved differential equation         |                              |chrome    |   166,401,126|         |
| presolved differential equation         |final                         |chrome    |   166,808,349|  (100%) |
| presolved differential equation         |without inline equality       |chrome    |   166,915,240|  (100%) |
| presolved differential equation         |without inline functions      |chrome    |   168,218,262|  (101%) |
| presolved differential equation         |without inline list literals  |chrome    |   167,978,361|  (101%) |
| presolved differential equation         |without inline number-to-string|chrome    |   167,988,000|  (101%) |
| presolved differential equation         |without object update         |chrome    |   164,291,053|   (99%) |
| presolved differential equation         |without passing unwrapped functions|chrome    |   166,365,515|  (100%) |
| presolved differential equation         |without variant shapes        |chrome    |   158,618,311|   (95%) |
| elm/random - random float               |                              |firefox   |     5,129,252|         |
| elm/random - random float               |final                         |firefox   |    20,572,624|  (401%) |
| elm/random - random float               |without inline equality       |firefox   |    21,066,878|  (411%) |
| elm/random - random float               |without inline functions      |firefox   |     5,046,963|   (98%) |
| elm/random - random float               |without inline list literals  |firefox   |    20,703,617|  (404%) |
| elm/random - random float               |without inline number-to-string|firefox   |    20,870,168|  (407%) |
| elm/random - random float               |without object update         |firefox   |    21,173,676|  (413%) |
| elm/random - random float               |without passing unwrapped functions|firefox   |    21,517,995|  (420%) |
| elm/random - random float               |without variant shapes        |firefox   |    21,388,542|  (417%) |
| elm/random - random float               |                              |chrome    |    31,136,429|         |
| elm/random - random float               |final                         |chrome    |   134,797,434|  (433%) |
| elm/random - random float               |without inline equality       |chrome    |   133,827,691|  (430%) |
| elm/random - random float               |without inline functions      |chrome    |    31,041,663|  (100%) |
| elm/random - random float               |without inline list literals  |chrome    |   140,323,700|  (451%) |
| elm/random - random float               |without inline number-to-string|chrome    |   136,482,589|  (438%) |
| elm/random - random float               |without object update         |chrome    |   131,865,082|  (424%) |
| elm/random - random float               |without passing unwrapped functions|chrome    |   134,655,346|  (432%) |
| elm/random - random float               |without variant shapes        |chrome    |   132,673,135|  (426%) |
| scaled sine method                      |                              |firefox   |    76,359,976|         |
| scaled sine method                      |final                         |firefox   |    81,348,440|  (107%) |
| scaled sine method                      |without inline equality       |firefox   |    80,133,700|  (105%) |
| scaled sine method                      |without inline functions      |firefox   |    80,775,817|  (106%) |
| scaled sine method                      |without inline list literals  |firefox   |    81,105,603|  (106%) |
| scaled sine method                      |without inline number-to-string|firefox   |    80,998,585|  (106%) |
| scaled sine method                      |without object update         |firefox   |    79,112,580|  (104%) |
| scaled sine method                      |without passing unwrapped functions|firefox   |    79,349,577|  (104%) |
| scaled sine method                      |without variant shapes        |firefox   |    80,764,418|  (106%) |
| scaled sine method                      |                              |chrome    |   164,342,266|         |
| scaled sine method                      |final                         |chrome    |   167,635,005|  (102%) |
| scaled sine method                      |without inline equality       |chrome    |   166,940,523|  (102%) |
| scaled sine method                      |without inline functions      |chrome    |   167,148,814|  (102%) |
| scaled sine method                      |without inline list literals  |chrome    |   168,825,785|  (103%) |
| scaled sine method                      |without inline number-to-string|chrome    |   166,988,502|  (102%) |
| scaled sine method                      |without object update         |chrome    |   166,113,513|  (101%) |
| scaled sine method                      |without passing unwrapped functions|chrome    |   168,968,819|  (103%) |
| scaled sine method                      |without variant shapes        |chrome    |   158,758,435|   (97%) |
| interpolate to position                 |                              |firefox   |       417,363|         |
| interpolate to position                 |final                         |firefox   |       826,809|  (198%) |
| interpolate to position                 |without inline equality       |firefox   |       839,210|  (201%) |
| interpolate to position                 |without inline functions      |firefox   |       450,287|  (108%) |
| interpolate to position                 |without inline list literals  |firefox   |       747,360|  (179%) |
| interpolate to position                 |without inline number-to-string|firefox   |       833,135|  (200%) |
| interpolate to position                 |without object update         |firefox   |       792,540|  (190%) |
| interpolate to position                 |without passing unwrapped functions|firefox   |       780,283|  (187%) |
| interpolate to position                 |without variant shapes        |firefox   |       756,940|  (181%) |
| interpolate to position                 |                              |chrome    |     1,099,672|         |
| interpolate to position                 |final                         |chrome    |     1,224,603|  (111%) |
| interpolate to position                 |without inline equality       |chrome    |     1,202,216|  (109%) |
| interpolate to position                 |without inline functions      |chrome    |     1,094,441|  (100%) |
| interpolate to position                 |without inline list literals  |chrome    |     1,229,074|  (112%) |
| interpolate to position                 |without inline number-to-string|chrome    |     1,222,847|  (111%) |
| interpolate to position                 |without object update         |chrome    |     1,173,524|  (107%) |
| interpolate to position                 |without passing unwrapped functions|chrome    |     1,186,391|  (108%) |
| interpolate to position                 |without variant shapes        |chrome    |     1,200,364|  (109%) |
| capture frames(60fps)                   |                              |firefox   |         1,282|         |
| capture frames(60fps)                   |final                         |firefox   |         2,373|  (185%) |
| capture frames(60fps)                   |without inline equality       |firefox   |         2,429|  (189%) |
| capture frames(60fps)                   |without inline functions      |firefox   |         1,335|  (104%) |
| capture frames(60fps)                   |without inline list literals  |firefox   |         2,386|  (186%) |
| capture frames(60fps)                   |without inline number-to-string|firefox   |         2,382|  (186%) |
| capture frames(60fps)                   |without object update         |firefox   |         2,394|  (187%) |
| capture frames(60fps)                   |without passing unwrapped functions|firefox   |         2,380|  (186%) |
| capture frames(60fps)                   |without variant shapes        |firefox   |         2,291|  (179%) |
| capture frames(60fps)                   |                              |chrome    |         2,957|         |
| capture frames(60fps)                   |final                         |chrome    |         3,279|  (111%) |
| capture frames(60fps)                   |without inline equality       |chrome    |         3,216|  (109%) |
| capture frames(60fps)                   |without inline functions      |chrome    |         2,952|  (100%) |
| capture frames(60fps)                   |without inline list literals  |chrome    |         3,301|  (112%) |
| capture frames(60fps)                   |without inline number-to-string|chrome    |         3,286|  (111%) |
| capture frames(60fps)                   |without object update         |chrome    |         3,202|  (108%) |
| capture frames(60fps)                   |without passing unwrapped functions|chrome    |         3,285|  (111%) |
| capture frames(60fps)                   |without variant shapes        |chrome    |         3,242|  (110%) |
| capture frames(15fps)                   |                              |firefox   |         4,968|         |
| capture frames(15fps)                   |final                         |firefox   |         9,374|  (189%) |
| capture frames(15fps)                   |without inline equality       |firefox   |         9,528|  (192%) |
| capture frames(15fps)                   |without inline functions      |firefox   |         5,185|  (104%) |
| capture frames(15fps)                   |without inline list literals  |firefox   |         9,307|  (187%) |
| capture frames(15fps)                   |without inline number-to-string|firefox   |         9,514|  (192%) |
| capture frames(15fps)                   |without object update         |firefox   |         9,294|  (187%) |
| capture frames(15fps)                   |without passing unwrapped functions|firefox   |         9,237|  (186%) |
| capture frames(15fps)                   |without variant shapes        |firefox   |         8,966|  (180%) |
| capture frames(15fps)                   |                              |chrome    |        11,697|         |
| capture frames(15fps)                   |final                         |chrome    |        12,942|  (111%) |
| capture frames(15fps)                   |without inline equality       |chrome    |        12,727|  (109%) |
| capture frames(15fps)                   |without inline functions      |chrome    |        11,657|  (100%) |
| capture frames(15fps)                   |without inline list literals  |chrome    |        13,064|  (112%) |
| capture frames(15fps)                   |without inline number-to-string|chrome    |        13,002|  (111%) |
| capture frames(15fps)                   |without object update         |chrome    |        12,780|  (109%) |
| capture frames(15fps)                   |without passing unwrapped functions|chrome    |        13,000|  (111%) |
| capture frames(15fps)                   |without variant shapes        |chrome    |        12,867|  (110%) |
| Standard                                |                              |firefox   |    34,559,103|         |
| Standard                                |final                         |firefox   |    88,936,610|  (257%) |
| Standard                                |without inline equality       |firefox   |    87,061,652|  (252%) |
| Standard                                |without inline functions      |firefox   |    37,486,227|  (108%) |
| Standard                                |without inline list literals  |firefox   |    85,626,370|  (248%) |
| Standard                                |without inline number-to-string|firefox   |    88,514,958|  (256%) |
| Standard                                |without object update         |firefox   |    89,911,378|  (260%) |
| Standard                                |without passing unwrapped functions|firefox   |    87,021,216|  (252%) |
| Standard                                |without variant shapes        |firefox   |    85,615,369|  (248%) |
| Standard                                |                              |chrome    |   163,795,419|         |
| Standard                                |final                         |chrome    |   166,522,655|  (102%) |
| Standard                                |without inline equality       |chrome    |   163,914,822|  (100%) |
| Standard                                |without inline functions      |chrome    |   166,303,573|  (102%) |
| Standard                                |without inline list literals  |chrome    |   166,344,047|  (102%) |
| Standard                                |without inline number-to-string|chrome    |   168,344,359|  (103%) |
| Standard                                |without object update         |chrome    |   162,398,400|   (99%) |
| Standard                                |without passing unwrapped functions|chrome    |   165,854,459|  (101%) |
| Standard                                |without variant shapes        |chrome    |   155,038,508|   (95%) |
| (one - two) < 0 form                    |                              |firefox   |    37,602,213|         |
| (one - two) < 0 form                    |final                         |firefox   |   101,992,299|  (271%) |
| (one - two) < 0 form                    |without inline equality       |firefox   |    98,118,437|  (261%) |
| (one - two) < 0 form                    |without inline functions      |firefox   |    38,834,737|  (103%) |
| (one - two) < 0 form                    |without inline list literals  |firefox   |    98,957,346|  (263%) |
| (one - two) < 0 form                    |without inline number-to-string|firefox   |   100,920,855|  (268%) |
| (one - two) < 0 form                    |without object update         |firefox   |   102,444,872|  (272%) |
| (one - two) < 0 form                    |without passing unwrapped functions|firefox   |    92,986,465|  (247%) |
| (one - two) < 0 form                    |without variant shapes        |firefox   |   100,791,688|  (268%) |
| (one - two) < 0 form                    |                              |chrome    |   162,195,530|         |
| (one - two) < 0 form                    |final                         |chrome    |   165,467,083|  (102%) |
| (one - two) < 0 form                    |without inline equality       |chrome    |   161,281,489|   (99%) |
| (one - two) < 0 form                    |without inline functions      |chrome    |   166,982,912|  (103%) |
| (one - two) < 0 form                    |without inline list literals  |chrome    |   165,087,538|  (102%) |
| (one - two) < 0 form                    |without inline number-to-string|chrome    |   164,282,929|  (101%) |
| (one - two) < 0 form                    |without object update         |chrome    |   161,957,406|  (100%) |
| (one - two) < 0 form                    |without passing unwrapped functions|chrome    |   164,816,693|  (102%) |
| (one - two) < 0 form                    |without variant shapes        |chrome    |   154,511,326|   (95%) |
| Create spline                           |                              |firefox   |    14,370,178|         |
| Create spline                           |final                         |firefox   |    15,127,455|  (105%) |
| Create spline                           |without inline equality       |firefox   |    15,545,717|  (108%) |
| Create spline                           |without inline functions      |firefox   |    13,880,347|   (97%) |
| Create spline                           |without inline list literals  |firefox   |    15,646,213|  (109%) |
| Create spline                           |without inline number-to-string|firefox   |    16,643,748|  (116%) |
| Create spline                           |without object update         |firefox   |    16,885,084|  (118%) |
| Create spline                           |without passing unwrapped functions|firefox   |    15,164,560|  (106%) |
| Create spline                           |without variant shapes        |firefox   |    16,671,761|  (116%) |
| Create spline                           |                              |chrome    |    14,328,686|         |
| Create spline                           |final                         |chrome    |    14,341,751|  (100%) |
| Create spline                           |without inline equality       |chrome    |    14,218,044|   (99%) |
| Create spline                           |without inline functions      |chrome    |    14,378,230|  (100%) |
| Create spline                           |without inline list literals  |chrome    |    14,443,668|  (101%) |
| Create spline                           |without inline number-to-string|chrome    |    14,513,628|  (101%) |
| Create spline                           |without object update         |chrome    |    14,216,960|   (99%) |
| Create spline                           |without passing unwrapped functions|chrome    |    14,441,111|  (101%) |
| Create spline                           |without variant shapes        |chrome    |    14,156,167|   (99%) |
| Find x on spline                        |                              |firefox   |     2,581,415|         |
| Find x on spline                        |final                         |firefox   |     2,682,571|  (104%) |
| Find x on spline                        |without inline equality       |firefox   |     2,662,896|  (103%) |
| Find x on spline                        |without inline functions      |firefox   |     2,668,353|  (103%) |
| Find x on spline                        |without inline list literals  |firefox   |     2,638,257|  (102%) |
| Find x on spline                        |without inline number-to-string|firefox   |     2,668,039|  (103%) |
| Find x on spline                        |without object update         |firefox   |     2,675,656|  (104%) |
| Find x on spline                        |without passing unwrapped functions|firefox   |     2,660,191|  (103%) |
| Find x on spline                        |without variant shapes        |firefox   |     2,578,107|  (100%) |
| Find x on spline                        |                              |chrome    |     3,363,817|         |
| Find x on spline                        |final                         |chrome    |     3,406,972|  (101%) |
| Find x on spline                        |without inline equality       |chrome    |     3,372,316|  (100%) |
| Find x on spline                        |without inline functions      |chrome    |     3,428,300|  (102%) |
| Find x on spline                        |without inline list literals  |chrome    |     3,410,930|  (101%) |
| Find x on spline                        |without inline number-to-string|chrome    |     3,434,254|  (102%) |
| Find x on spline                        |without object update         |chrome    |     3,361,524|  (100%) |
| Find x on spline                        |without passing unwrapped functions|chrome    |     3,433,540|  (102%) |
| Find x on spline                        |without variant shapes        |chrome    |     3,417,655|  (102%) |



