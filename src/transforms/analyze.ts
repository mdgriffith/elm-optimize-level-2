/*

We can ask the v8 engine the following:
  - is a given function optimized?
  - What is the memory representation of a given javascript object

This package helps make this a bit more convenient: https://www.npmjs.com/package/v8-natives#variableobject-information-commands

Though we also need to start chrome with a --allow-natives-syntax flag.


If we need to access more calls, here's the full list from v8: https://github.com/v8/v8/blob/master/src/runtime/runtime.h


This transformer does a few things.



    1. Replaces elm-explorations/benchmark's kernel code: https://github.com/elm-explorations/benchmark/blob/master/src/Elm/Kernel/Benchmark.js
        With one that periodically asks for the optimization status of the function being run.

        This does mean that the benchmarks are likely no longer representatitive!

        And the results should be thrown out.

        Generally this means we'll probablay either run in "benchmark mode" or in "analysis mode".

    2. Replaces the implementation of the functions in `testcases/benchmark-utilities/Debug.V8`

        - `Debug.V8.representation` 
            -> Inspects and reports memory representation characteristics of the value passed to it.
        

        
*/

import ts from 'typescript';
import {ast, create} from './utils/create';

const BENCHMARK_SAMPLE_FN = '_Benchmark_sample';
const benchmarkSampleWithAnalysis = `_Benchmark_sample = F2(function(n, fn) {
    return __Scheduler_binding(function(callback) {
        var start = _Benchmark_getTimestamp();

        try {
            for (var i = 0; i < n; i++) {
                fn();
            }
        } catch (error) {
            if (error instanceof RangeError) {
                callback(__Scheduler_fail(__BL_StackOverflow));
            } else {
                callback(__Scheduler_fail(__BL_UnknownError(error.message)));
            }
            return;
        }
        if (v8.isNative()) {
            var fn_name = v8.functionGetName(fn);
            console.log(fn_name + ' opt status: ', v8.getOptimizationStatus(fn));

            // v8.helpers.testOptimization(fn);
            // console.log(fn_name + ' opt status: ', v8.getOptimizationStatus(fn));
            
        } else {
            console.log('You need to start Chrome with the --js-flags="--allow-natives-syntax"')
        }

        var end = _Benchmark_getTimestamp();

        callback(__Scheduler_succeed(end - start));
    });
})`;


/*

This is the function in `elm-benchmark`

    // sample : Int -> Operation -> Task Error Float
    var _Benchmark_sample = F2(function(n, fn) {
        return __Scheduler_binding(function(callback) {
            var start = _Benchmark_getTimestamp();

            try {
                for (var i = 0; i < n; i++) {
                    fn();
                }
            } catch (error) {
            if (error instanceof RangeError) {
                callback(__Scheduler_fail(__BL_StackOverflow));
            } else {
                callback(__Scheduler_fail(__BL_UnknownError(error.message)));
            }
            return;
            }

            var end = _Benchmark_getTimestamp();

            callback(__Scheduler_succeed(end - start));
        });
    });

We want to replace it with



*/
export const benchmarkFunctionAnalyzer = (): ts.TransformerFactory<ts.SourceFile> => context => {
    return sourceFile => {
        const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
            if (ts.isVariableDeclaration(node)) {
                if (
                    ts.isIdentifier(node.name) &&
                    node.name.text == BENCHMARK_SAMPLE_FN
                ) {
                    return create(BENCHMARK_SAMPLE_FN, ast(benchmarkSampleWithAnalysis));
                }
            }
            return ts.visitEachChild(node, visitor, context);
        };
        return ts.visitNode(sourceFile, visitor);
    };
};
  
/*

The stubbed version of the functions are:

    var $author$project$Debug$V8$report = function (_v0) {
        return $elm$json$Json$Encode$null;
    };

    var $author$project$Debug$V8$analyze = F2(function (tag, value) {
            return value;
        });



*/


const DEBUG_ANALYZE_FN = '$author$project$Debug$V8$analyze';
const new_analyze = `$author$project$Debug$V8$analyze = F2(function (tag, value) {
    if (v8.isNative()) {
        var analysis = {
            v8.hasFastProperties: hasFastProperties(value),
            v8.hasFastSmiElements: hasFastSmiElements(value),
            v8.hasFastObjectElements: hasFastObjectElements(value),
            v8.hasFastDoubleElements: hasFastDoubleElements(value),
            v8.hasDictionaryElements: hasDictionaryElements(value),
            v8.hasFastHoleyElements: hasFastHoleyElements(value),
            v8.isValidSmi: isValidSmi(value),
            v8.isSmi: isSmi(value),
            v8.hasFastSmiOrObjectElements: hasFastSmiOrObjectElements(value),
            v8.hasSloppyArgumentsElements: hasSloppyArgumentsElements(value)
        }
        console.log(tag, v8.getOptimizationStatus(fn));
    }
    return value;
})`;


const DEBUG_REPORT_FN = '$author$project$Debug$V8$report';
const reportAnalysis = `$author$project$Debug$V8$report = function (_v0) {
    return $elm$json$Json$Encode$null;
}`;


export const v8MemoryRepresentation = (): ts.TransformerFactory<ts.SourceFile> => context => {
    return sourceFile => {
        const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
            if (ts.isVariableDeclaration(node)) {
                if (
                    ts.isIdentifier(node.name) &&
                    node.name.text == DEBUG_ANALYZE_FN
                ) {
                    return create(DEBUG_ANALYZE_FN, ast(new_analyze));
                } else if (
                    ts.isIdentifier(node.name) &&
                    node.name.text == DEBUG_REPORT_FN
                ) {
                    return create(DEBUG_REPORT_FN, ast(reportAnalysis));
                }
            }
            return ts.visitEachChild(node, visitor, context);
        };
        return ts.visitNode(sourceFile, visitor);
    };
};
