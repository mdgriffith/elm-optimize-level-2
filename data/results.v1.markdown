# Benchmark results

## Elm Core asset overview

    elm.js                                       161.2kb
    elm.opt.js                                   201.4kb
    elm.opt.min.js                                30.5kb
    elm.opt.min.js.gz                             10.7kb
    elm.opt.prepack.js                           146.7kb
    elm.opt.prepack.min.js                        30.6kb
    elm.opt.prepack.min.js.gz                       12kb
    elm.opt.transformed.js                       208.9kb
    elm.opt.transformed.min.js                    26.7kb
    elm.opt.transformed.min.js.gz                 10.5kb

## Html asset overview

    elm.js                                       160.9kb
    elm.opt.js                                   200.9kb
    elm.opt.min.js                                30.1kb
    elm.opt.min.js.gz                             10.6kb
    elm.opt.prepack.js                           134.9kb
    elm.opt.prepack.min.js                        26.8kb
    elm.opt.prepack.min.js.gz                     10.5kb
    elm.opt.transformed.js                       208.4kb
    elm.opt.transformed.min.js                    26.5kb
    elm.opt.transformed.min.js.gz                 10.4kb

## Elm UI asset overview

    elm.js                                         365kb
    elm.opt.js                                   428.1kb
    elm.opt.transformed.js                       435.2kb

## Elm UI 2 asset overview

    elm.js                                       193.8kb
    elm.opt.js                                     237kb
    elm.opt.transformed.js                       245.7kb

## Elm Markdown asset overview

    elm.js                                       363.9kb
    elm.opt.js                                   411.4kb
    elm.opt.min.js                                69.6kb
    elm.opt.min.js.gz                             23.3kb
    elm.opt.prepack.js                           399.3kb
    elm.opt.prepack.min.js                        78.2kb
    elm.opt.prepack.min.js.gz                     27.3kb
    elm.opt.transformed.js                         423kb
    elm.opt.transformed.min.js                    62.1kb
    elm.opt.transformed.min.js.gz                 22.5kb


## Elm Core

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| sum 300 list of custom types            |                              |firefox   |       154,624|         |
| sum 300 list of custom types            |final                         |firefox   |       392,298|  (254%) |
| sum 300 list of custom types            |arrowize functions            |firefox   |       154,022|  (100%) |
| sum 300 list of custom types            |inline equality               |firefox   |       153,199|   (99%) |
| sum 300 list of custom types            |inline functions              |firefox   |       155,520|  (101%) |
| sum 300 list of custom types            |inline number-to-string       |firefox   |       151,980|   (98%) |
| sum 300 list of custom types            |object update                 |firefox   |       149,602|   (97%) |
| sum 300 list of custom types            |pass unwrapped functions      |firefox   |       151,225|   (98%) |
| sum 300 list of custom types            |variant shapes                |firefox   |       158,227|  (102%) |
| sum 300 list of custom types            |                              |chrome    |     1,222,548|         |
| sum 300 list of custom types            |final                         |chrome    |     1,655,126|  (135%) |
| sum 300 list of custom types            |arrowize functions            |chrome    |     1,215,390|   (99%) |
| sum 300 list of custom types            |inline equality               |chrome    |     1,184,873|   (97%) |
| sum 300 list of custom types            |inline functions              |chrome    |     1,204,458|   (99%) |
| sum 300 list of custom types            |inline number-to-string       |chrome    |     1,213,341|   (99%) |
| sum 300 list of custom types            |object update                 |chrome    |     1,216,359|   (99%) |
| sum 300 list of custom types            |pass unwrapped functions      |chrome    |     1,204,987|   (99%) |
| sum 300 list of custom types            |variant shapes                |chrome    |     1,665,073|  (136%) |


## Html

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| create a 4 level nested html tree       |                              |firefox   |        19,647|         |
| create a 4 level nested html tree       |final                         |firefox   |        23,563|  (120%) |
| create a 4 level nested html tree       |arrowize functions            |firefox   |        18,330|   (93%) |
| create a 4 level nested html tree       |inline equality               |firefox   |        18,837|   (96%) |
| create a 4 level nested html tree       |inline functions              |firefox   |        25,604|  (130%) |
| create a 4 level nested html tree       |inline number-to-string       |firefox   |        18,807|   (96%) |
| create a 4 level nested html tree       |object update                 |firefox   |        19,105|   (97%) |
| create a 4 level nested html tree       |pass unwrapped functions      |firefox   |        18,899|   (96%) |
| create a 4 level nested html tree       |variant shapes                |firefox   |        18,551|   (94%) |
| create a 4 level nested html tree       |                              |chrome    |        49,016|         |
| create a 4 level nested html tree       |final                         |chrome    |       107,609|  (220%) |
| create a 4 level nested html tree       |arrowize functions            |chrome    |        49,185|  (100%) |
| create a 4 level nested html tree       |inline equality               |chrome    |        48,391|   (99%) |
| create a 4 level nested html tree       |inline functions              |chrome    |       107,558|  (219%) |
| create a 4 level nested html tree       |inline number-to-string       |chrome    |        48,756|   (99%) |
| create a 4 level nested html tree       |object update                 |chrome    |        48,031|   (98%) |
| create a 4 level nested html tree       |pass unwrapped functions      |chrome    |        50,262|  (103%) |
| create a 4 level nested html tree       |variant shapes                |chrome    |        47,390|   (97%) |


## Elm UI

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| create a 4 level nested Elm UI tree     |                              |firefox   |         2,056|         |
| create a 4 level nested Elm UI tree     |final                         |firefox   |         3,073|  (149%) |
| create a 4 level nested Elm UI tree     |arrowize functions            |firefox   |         2,063|  (100%) |
| create a 4 level nested Elm UI tree     |inline equality               |firefox   |         2,070|  (101%) |
| create a 4 level nested Elm UI tree     |inline functions              |firefox   |         2,874|  (140%) |
| create a 4 level nested Elm UI tree     |inline number-to-string       |firefox   |         2,009|   (98%) |
| create a 4 level nested Elm UI tree     |object update                 |firefox   |         2,021|   (98%) |
| create a 4 level nested Elm UI tree     |pass unwrapped functions      |firefox   |         2,040|   (99%) |
| create a 4 level nested Elm UI tree     |variant shapes                |firefox   |         2,088|  (102%) |
| create a 4 level nested Elm UI tree     |                              |chrome    |         5,635|         |
| create a 4 level nested Elm UI tree     |final                         |chrome    |         6,602|  (117%) |
| create a 4 level nested Elm UI tree     |arrowize functions            |chrome    |         5,712|  (101%) |
| create a 4 level nested Elm UI tree     |inline equality               |chrome    |         5,623|  (100%) |
| create a 4 level nested Elm UI tree     |inline functions              |chrome    |         6,519|  (116%) |
| create a 4 level nested Elm UI tree     |inline number-to-string       |chrome    |         5,670|  (101%) |
| create a 4 level nested Elm UI tree     |object update                 |chrome    |         5,627|  (100%) |
| create a 4 level nested Elm UI tree     |pass unwrapped functions      |chrome    |         5,644|  (100%) |
| create a 4 level nested Elm UI tree     |variant shapes                |chrome    |         5,712|  (101%) |


## Elm UI 2

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| create a 4 level nested Elm UI tree     |                              |firefox   |         3,487|         |
| create a 4 level nested Elm UI tree     |final                         |firefox   |         4,855|  (139%) |
| create a 4 level nested Elm UI tree     |arrowize functions            |firefox   |         3,147|   (90%) |
| create a 4 level nested Elm UI tree     |inline equality               |firefox   |         3,487|  (100%) |
| create a 4 level nested Elm UI tree     |inline functions              |firefox   |         4,465|  (128%) |
| create a 4 level nested Elm UI tree     |inline number-to-string       |firefox   |         3,485|  (100%) |
| create a 4 level nested Elm UI tree     |object update                 |firefox   |         3,472|  (100%) |
| create a 4 level nested Elm UI tree     |pass unwrapped functions      |firefox   |         3,479|  (100%) |
| create a 4 level nested Elm UI tree     |variant shapes                |firefox   |         3,449|   (99%) |
| create a 4 level nested Elm UI tree     |                              |chrome    |         7,006|         |
| create a 4 level nested Elm UI tree     |final                         |chrome    |         8,815|  (126%) |
| create a 4 level nested Elm UI tree     |arrowize functions            |chrome    |         6,783|   (97%) |
| create a 4 level nested Elm UI tree     |inline equality               |chrome    |         6,559|   (94%) |
| create a 4 level nested Elm UI tree     |inline functions              |chrome    |         8,292|  (118%) |
| create a 4 level nested Elm UI tree     |inline number-to-string       |chrome    |         6,772|   (97%) |
| create a 4 level nested Elm UI tree     |object update                 |chrome    |         6,826|   (97%) |
| create a 4 level nested Elm UI tree     |pass unwrapped functions      |chrome    |         6,773|   (97%) |
| create a 4 level nested Elm UI tree     |variant shapes                |chrome    |         6,967|   (99%) |


## Elm Markdown

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| just a heading                          |                              |firefox   |        48,762|         |
| just a heading                          |final                         |firefox   |       104,785|  (215%) |
| just a heading                          |arrowize functions            |firefox   |        46,408|   (95%) |
| just a heading                          |inline equality               |firefox   |        50,204|  (103%) |
| just a heading                          |inline functions              |firefox   |        91,107|  (187%) |
| just a heading                          |inline number-to-string       |firefox   |        48,897|  (100%) |
| just a heading                          |object update                 |firefox   |        48,226|   (99%) |
| just a heading                          |pass unwrapped functions      |firefox   |        46,520|   (95%) |
| just a heading                          |variant shapes                |firefox   |        48,104|   (99%) |
| just a heading                          |                              |chrome    |       107,451|         |
| just a heading                          |final                         |chrome    |       175,552|  (163%) |
| just a heading                          |arrowize functions            |chrome    |       106,043|   (99%) |
| just a heading                          |inline equality               |chrome    |       110,732|  (103%) |
| just a heading                          |inline functions              |chrome    |       166,605|  (155%) |
| just a heading                          |inline number-to-string       |chrome    |       107,282|  (100%) |
| just a heading                          |object update                 |chrome    |       107,544|  (100%) |
| just a heading                          |pass unwrapped functions      |chrome    |       107,931|  (100%) |
| just a heading                          |variant shapes                |chrome    |       109,489|  (102%) |
| elm-explorations/markdown readme        |                              |firefox   |        13,372|         |
| elm-explorations/markdown readme        |final                         |firefox   |        28,805|  (215%) |
| elm-explorations/markdown readme        |arrowize functions            |firefox   |        13,140|   (98%) |
| elm-explorations/markdown readme        |inline equality               |firefox   |        14,099|  (105%) |
| elm-explorations/markdown readme        |inline functions              |firefox   |        23,954|  (179%) |
| elm-explorations/markdown readme        |inline number-to-string       |firefox   |        13,123|   (98%) |
| elm-explorations/markdown readme        |object update                 |firefox   |        13,118|   (98%) |
| elm-explorations/markdown readme        |pass unwrapped functions      |firefox   |        13,006|   (97%) |
| elm-explorations/markdown readme        |variant shapes                |firefox   |        13,298|   (99%) |
| elm-explorations/markdown readme        |                              |chrome    |        29,090|         |
| elm-explorations/markdown readme        |final                         |chrome    |        50,502|  (174%) |
| elm-explorations/markdown readme        |arrowize functions            |chrome    |        29,418|  (101%) |
| elm-explorations/markdown readme        |inline equality               |chrome    |        30,657|  (105%) |
| elm-explorations/markdown readme        |inline functions              |chrome    |        45,569|  (157%) |
| elm-explorations/markdown readme        |inline number-to-string       |chrome    |        29,112|  (100%) |
| elm-explorations/markdown readme        |object update                 |chrome    |        29,118|  (100%) |
| elm-explorations/markdown readme        |pass unwrapped functions      |chrome    |        29,150|  (100%) |
| elm-explorations/markdown readme        |variant shapes                |chrome    |        30,159|  (104%) |
| withHeadingsAndLists                    |                              |firefox   |         3,906|         |
| withHeadingsAndLists                    |final                         |firefox   |         7,617|  (195%) |
| withHeadingsAndLists                    |arrowize functions            |firefox   |         3,829|   (98%) |
| withHeadingsAndLists                    |inline equality               |firefox   |         4,059|  (104%) |
| withHeadingsAndLists                    |inline functions              |firefox   |         6,930|  (177%) |
| withHeadingsAndLists                    |inline number-to-string       |firefox   |         3,864|   (99%) |
| withHeadingsAndLists                    |object update                 |firefox   |         3,956|  (101%) |
| withHeadingsAndLists                    |pass unwrapped functions      |firefox   |         3,778|   (97%) |
| withHeadingsAndLists                    |variant shapes                |firefox   |         3,982|  (102%) |
| withHeadingsAndLists                    |                              |chrome    |         9,163|         |
| withHeadingsAndLists                    |final                         |chrome    |        14,710|  (161%) |
| withHeadingsAndLists                    |arrowize functions            |chrome    |         9,092|   (99%) |
| withHeadingsAndLists                    |inline equality               |chrome    |         9,431|  (103%) |
| withHeadingsAndLists                    |inline functions              |chrome    |        13,237|  (144%) |
| withHeadingsAndLists                    |inline number-to-string       |chrome    |         9,203|  (100%) |
| withHeadingsAndLists                    |object update                 |chrome    |         9,295|  (101%) |
| withHeadingsAndLists                    |pass unwrapped functions      |chrome    |         9,190|  (100%) |
| withHeadingsAndLists                    |variant shapes                |chrome    |         9,281|  (101%) |
| withHeadingsAndListsAndHtml             |                              |firefox   |         1,797|         |
| withHeadingsAndListsAndHtml             |final                         |firefox   |         3,586|  (200%) |
| withHeadingsAndListsAndHtml             |arrowize functions            |firefox   |         1,733|   (96%) |
| withHeadingsAndListsAndHtml             |inline equality               |firefox   |         1,970|  (110%) |
| withHeadingsAndListsAndHtml             |inline functions              |firefox   |         2,756|  (153%) |
| withHeadingsAndListsAndHtml             |inline number-to-string       |firefox   |         1,800|  (100%) |
| withHeadingsAndListsAndHtml             |object update                 |firefox   |         1,784|   (99%) |
| withHeadingsAndListsAndHtml             |pass unwrapped functions      |firefox   |         1,780|   (99%) |
| withHeadingsAndListsAndHtml             |variant shapes                |firefox   |         1,797|  (100%) |
| withHeadingsAndListsAndHtml             |                              |chrome    |         4,404|         |
| withHeadingsAndListsAndHtml             |final                         |chrome    |         7,102|  (161%) |
| withHeadingsAndListsAndHtml             |arrowize functions            |chrome    |         4,419|  (100%) |
| withHeadingsAndListsAndHtml             |inline equality               |chrome    |         4,616|  (105%) |
| withHeadingsAndListsAndHtml             |inline functions              |chrome    |         6,454|  (147%) |
| withHeadingsAndListsAndHtml             |inline number-to-string       |chrome    |         4,435|  (101%) |
| withHeadingsAndListsAndHtml             |object update                 |chrome    |         4,440|  (101%) |
| withHeadingsAndListsAndHtml             |pass unwrapped functions      |chrome    |         4,450|  (101%) |
| withHeadingsAndListsAndHtml             |variant shapes                |chrome    |         4,513|  (102%) |



