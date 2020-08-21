# Benchmark results

## elm-obj-file asset overview

    elm.opt.js                                   230.1kb
    elm.opt.min.js                                59.5kb
    elm.opt.min.js.gz                             17.4kb
    elm.opt.transformed.js                       319.9kb
    elm.opt.transformed.min.js                    58.2kb
    elm.opt.transformed.min.js.gz                 17.3kb


## elm-obj-file

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| decode                                  |                              |safari    |           638|         |
| decode                                  |                              |safari    |           526|   (82%) |
| decode                                  |final                         |safari    |           540|   (85%) |
| decode                                  |final                         |safari    |           658|  (103%) |



