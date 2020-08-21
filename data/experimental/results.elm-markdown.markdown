# Benchmark results

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


## Elm Markdown

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| just a heading                          |                              |firefox   |        43,870|         |
| just a heading                          |final                         |firefox   |       103,478|  (236%) |
| just a heading                          |arrowize functions            |firefox   |        46,007|  (105%) |
| just a heading                          |inline equality               |firefox   |        51,313|  (117%) |
| just a heading                          |inline functions              |firefox   |        91,333|  (208%) |
| just a heading                          |inline number-to-string       |firefox   |        46,505|  (106%) |
| just a heading                          |object update                 |firefox   |        43,758|  (100%) |
| just a heading                          |pass unwrapped functions      |firefox   |        45,676|  (104%) |
| just a heading                          |variant shapes                |firefox   |        47,609|  (109%) |
| just a heading                          |                              |chrome    |       101,174|         |
| just a heading                          |final                         |chrome    |       172,899|  (171%) |
| just a heading                          |arrowize functions            |chrome    |       107,986|  (107%) |
| just a heading                          |inline equality               |chrome    |       112,619|  (111%) |
| just a heading                          |inline functions              |chrome    |       165,497|  (164%) |
| just a heading                          |inline number-to-string       |chrome    |       104,238|  (103%) |
| just a heading                          |object update                 |chrome    |        97,037|   (96%) |
| just a heading                          |pass unwrapped functions      |chrome    |       103,326|  (102%) |
| just a heading                          |variant shapes                |chrome    |       106,678|  (105%) |
| elm-explorations/markdown readme        |                              |firefox   |         7,608|         |
| elm-explorations/markdown readme        |final                         |firefox   |        16,737|  (220%) |
| elm-explorations/markdown readme        |arrowize functions            |firefox   |         7,903|  (104%) |
| elm-explorations/markdown readme        |inline equality               |firefox   |         8,897|  (117%) |
| elm-explorations/markdown readme        |inline functions              |firefox   |        14,814|  (195%) |
| elm-explorations/markdown readme        |inline number-to-string       |firefox   |         8,023|  (105%) |
| elm-explorations/markdown readme        |object update                 |firefox   |         7,389|   (97%) |
| elm-explorations/markdown readme        |pass unwrapped functions      |firefox   |         8,179|  (108%) |
| elm-explorations/markdown readme        |variant shapes                |firefox   |         8,270|  (109%) |
| elm-explorations/markdown readme        |                              |chrome    |        18,249|         |
| elm-explorations/markdown readme        |final                         |chrome    |        33,429|  (183%) |
| elm-explorations/markdown readme        |arrowize functions            |chrome    |        18,927|  (104%) |
| elm-explorations/markdown readme        |inline equality               |chrome    |        19,751|  (108%) |
| elm-explorations/markdown readme        |inline functions              |chrome    |        31,147|  (171%) |
| elm-explorations/markdown readme        |inline number-to-string       |chrome    |        18,530|  (102%) |
| elm-explorations/markdown readme        |object update                 |chrome    |        16,849|   (92%) |
| elm-explorations/markdown readme        |pass unwrapped functions      |chrome    |        18,553|  (102%) |
| elm-explorations/markdown readme        |variant shapes                |chrome    |        18,488|  (101%) |
| withHeadingsAndLists                    |                              |firefox   |         2,767|         |
| withHeadingsAndLists                    |final                         |firefox   |         5,606|  (203%) |
| withHeadingsAndLists                    |arrowize functions            |firefox   |         2,810|  (102%) |
| withHeadingsAndLists                    |inline equality               |firefox   |         3,175|  (115%) |
| withHeadingsAndLists                    |inline functions              |firefox   |         5,017|  (181%) |
| withHeadingsAndLists                    |inline number-to-string       |firefox   |         2,927|  (106%) |
| withHeadingsAndLists                    |object update                 |firefox   |         2,692|   (97%) |
| withHeadingsAndLists                    |pass unwrapped functions      |firefox   |         2,897|  (105%) |
| withHeadingsAndLists                    |variant shapes                |firefox   |         2,970|  (107%) |
| withHeadingsAndLists                    |                              |chrome    |         6,840|         |
| withHeadingsAndLists                    |final                         |chrome    |        11,568|  (169%) |
| withHeadingsAndLists                    |arrowize functions            |chrome    |         7,129|  (104%) |
| withHeadingsAndLists                    |inline equality               |chrome    |         7,375|  (108%) |
| withHeadingsAndLists                    |inline functions              |chrome    |        10,689|  (156%) |
| withHeadingsAndLists                    |inline number-to-string       |chrome    |         6,993|  (102%) |
| withHeadingsAndLists                    |object update                 |chrome    |         6,336|   (93%) |
| withHeadingsAndLists                    |pass unwrapped functions      |chrome    |         7,058|  (103%) |
| withHeadingsAndLists                    |variant shapes                |chrome    |         6,890|  (101%) |
| withHeadingsAndListsAndHtml             |                              |firefox   |         1,162|         |
| withHeadingsAndListsAndHtml             |final                         |firefox   |         2,375|  (204%) |
| withHeadingsAndListsAndHtml             |arrowize functions            |firefox   |         1,196|  (103%) |
| withHeadingsAndListsAndHtml             |inline equality               |firefox   |         1,380|  (119%) |
| withHeadingsAndListsAndHtml             |inline functions              |firefox   |         1,970|  (170%) |
| withHeadingsAndListsAndHtml             |inline number-to-string       |firefox   |         1,235|  (106%) |
| withHeadingsAndListsAndHtml             |object update                 |firefox   |         1,120|   (96%) |
| withHeadingsAndListsAndHtml             |pass unwrapped functions      |firefox   |         1,220|  (105%) |
| withHeadingsAndListsAndHtml             |variant shapes                |firefox   |         1,247|  (107%) |
| withHeadingsAndListsAndHtml             |                              |chrome    |         3,030|         |
| withHeadingsAndListsAndHtml             |final                         |chrome    |         5,160|  (170%) |
| withHeadingsAndListsAndHtml             |arrowize functions            |chrome    |         3,170|  (105%) |
| withHeadingsAndListsAndHtml             |inline equality               |chrome    |         3,269|  (108%) |
| withHeadingsAndListsAndHtml             |inline functions              |chrome    |         4,745|  (157%) |
| withHeadingsAndListsAndHtml             |inline number-to-string       |chrome    |         3,108|  (103%) |
| withHeadingsAndListsAndHtml             |object update                 |chrome    |         2,863|   (94%) |
| withHeadingsAndListsAndHtml             |pass unwrapped functions      |chrome    |         3,114|  (103%) |
| withHeadingsAndListsAndHtml             |variant shapes                |chrome    |         3,055|  (101%) |



