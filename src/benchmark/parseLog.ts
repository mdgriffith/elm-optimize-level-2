import * as fs from 'fs';

export function summarize(path: string) {
    const content = fs.readFileSync(path)

    const formatted = []
    const sections = content.toString().split("--- Optimized code ---")

    for (const section of sections) {
        const subsections = section.split("\n\n")
        if (subsections.length > 0){
            let sectionFormatted = []
            sectionFormatted.push(subsections[0])
            subsections.shift()
            for (const sub of subsections){
                if (sub.startsWith("Inlined functions")){
                    sectionFormatted.push(sub)
                } else if (sub.startsWith("RelocInfo")) {
                    const deopts = (sub.match(/deoptimization bailout/g)||[]).length

                    sectionFormatted.push(`${deopts} deoptimizations`)

                }
            }
            formatted.push(sectionFormatted.join("\n\n"))
        }

    }

    return formatted.join("\n\n------------\n\n--- Optimized code ---")

}