# Benchmark results

## Elm Markdown asset overview

    elm.opt.js                                   338.2kb
    elm.opt.min.js                                69.8kb
    elm.opt.min.js.gz                             22.3kb
    elm.opt.minus-without-inline-equality.min.js        67kb
    elm.opt.minus-without-inline-equality.min.js.gz      22.1kb
    elm.opt.minus-without-inline-functions.min.js      69.8kb
    elm.opt.minus-without-inline-functions.min.js.gz      22.3kb
    elm.opt.minus-without-inline-number-to-string.min.js        67kb
    elm.opt.minus-without-inline-number-to-string.min.js.gz      22.1kb
    elm.opt.minus-without-passing-unwrapped-functions.min.js      66.5kb
    elm.opt.minus-without-passing-unwrapped-functions.min.js.gz        22kb
    elm.opt.minus-without-variant-shapes.min.js      66.9kb
    elm.opt.minus-without-variant-shapes.min.js.gz      22.1kb
    elm.opt.transformed.js                       447.4kb
    elm.opt.transformed.min.js                    66.9kb
    elm.opt.transformed.min.js.gz                 22.1kb


## Elm Markdown

|Name                                    |Transformtions                |Browser   |Ops/Second    |% Change|
|----------------------------------------|------------------------------|----------|--------------|--------|
| just a heading                          |                              |firefox   |        45,671|         |
| just a heading                          |final                         |firefox   |       101,429|  (222%) |
| just a heading                          |without inline equality       |firefox   |        92,596|  (203%) |
| just a heading                          |without inline functions      |firefox   |        51,754|  (113%) |
| just a heading                          |without inline number-to-string|firefox   |       105,420|  (231%) |
| just a heading                          |without passing unwrapped functions|firefox   |       106,843|  (234%) |
| just a heading                          |without variant shapes        |firefox   |        98,368|  (215%) |
| just a heading                          |                              |chrome    |       104,961|         |
| just a heading                          |final                         |chrome    |       173,401|  (165%) |
| just a heading                          |without inline equality       |chrome    |       162,033|  (154%) |
| just a heading                          |without inline functions      |chrome    |       112,341|  (107%) |
| just a heading                          |without inline number-to-string|chrome    |       173,533|  (165%) |
| just a heading                          |without passing unwrapped functions|chrome    |       166,202|  (158%) |
| just a heading                          |without variant shapes        |chrome    |       169,844|  (162%) |
| elm-explorations/markdown readme        |                              |firefox   |         7,974|         |
| elm-explorations/markdown readme        |final                         |firefox   |        16,830|  (211%) |
| elm-explorations/markdown readme        |without inline equality       |firefox   |        15,031|  (189%) |
| elm-explorations/markdown readme        |without inline functions      |firefox   |         8,864|  (111%) |
| elm-explorations/markdown readme        |without inline number-to-string|firefox   |        17,669|  (222%) |
| elm-explorations/markdown readme        |without passing unwrapped functions|firefox   |        17,478|  (219%) |
| elm-explorations/markdown readme        |without variant shapes        |firefox   |        17,040|  (214%) |
| elm-explorations/markdown readme        |                              |chrome    |        18,353|         |
| elm-explorations/markdown readme        |final                         |chrome    |        31,907|  (174%) |
| elm-explorations/markdown readme        |without inline equality       |chrome    |        31,054|  (169%) |
| elm-explorations/markdown readme        |without inline functions      |chrome    |        20,040|  (109%) |
| elm-explorations/markdown readme        |without inline number-to-string|chrome    |        33,372|  (182%) |
| elm-explorations/markdown readme        |without passing unwrapped functions|chrome    |        31,956|  (174%) |
| elm-explorations/markdown readme        |without variant shapes        |chrome    |        31,880|  (174%) |
| withHeadingsAndLists                    |                              |firefox   |         2,861|         |
| withHeadingsAndLists                    |final                         |firefox   |         5,459|  (191%) |
| withHeadingsAndLists                    |without inline equality       |firefox   |         5,102|  (178%) |
| withHeadingsAndLists                    |without inline functions      |firefox   |         3,134|  (110%) |
| withHeadingsAndLists                    |without inline number-to-string|firefox   |         5,716|  (200%) |
| withHeadingsAndLists                    |without passing unwrapped functions|firefox   |         5,630|  (197%) |
| withHeadingsAndLists                    |without variant shapes        |firefox   |         5,572|  (195%) |
| withHeadingsAndLists                    |                              |chrome    |         6,701|         |
| withHeadingsAndLists                    |final                         |chrome    |        10,665|  (159%) |
| withHeadingsAndLists                    |without inline equality       |chrome    |        10,505|  (157%) |
| withHeadingsAndLists                    |without inline functions      |chrome    |         7,370|  (110%) |
| withHeadingsAndLists                    |without inline number-to-string|chrome    |        11,241|  (168%) |
| withHeadingsAndLists                    |without passing unwrapped functions|chrome    |        10,789|  (161%) |
| withHeadingsAndLists                    |without variant shapes        |chrome    |        10,900|  (163%) |
| withHeadingsAndListsAndHtml             |                              |firefox   |         1,200|         |
| withHeadingsAndListsAndHtml             |final                         |firefox   |         2,533|  (211%) |
| withHeadingsAndListsAndHtml             |without inline equality       |firefox   |         2,013|  (168%) |
| withHeadingsAndListsAndHtml             |without inline functions      |firefox   |         1,365|  (114%) |
| withHeadingsAndListsAndHtml             |without inline number-to-string|firefox   |         2,624|  (219%) |
| withHeadingsAndListsAndHtml             |without passing unwrapped functions|firefox   |         2,383|  (199%) |
| withHeadingsAndListsAndHtml             |without variant shapes        |firefox   |         2,547|  (212%) |
| withHeadingsAndListsAndHtml             |                              |chrome    |         2,988|         |
| withHeadingsAndListsAndHtml             |final                         |chrome    |         4,887|  (164%) |
| withHeadingsAndListsAndHtml             |without inline equality       |chrome    |         4,706|  (157%) |
| withHeadingsAndListsAndHtml             |without inline functions      |chrome    |         3,342|  (112%) |
| withHeadingsAndListsAndHtml             |without inline number-to-string|chrome    |         5,091|  (170%) |
| withHeadingsAndListsAndHtml             |without passing unwrapped functions|chrome    |         4,879|  (163%) |
| withHeadingsAndListsAndHtml             |without variant shapes        |chrome    |         4,896|  (164%) |



