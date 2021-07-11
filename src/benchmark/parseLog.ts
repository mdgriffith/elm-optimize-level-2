import * as fs from 'fs';

export function summarize(path: string) {
    const content = fs.readFileSync(path)

    const formatted = []
    const sections = content.toString().split("--- Raw source ---")

    for (const section of sections) {
        const subsections = section.split("\n\n")
        if (subsections.length > 0){
            let sectionFormatted = []
            sectionFormatted.push(subsections[0])
            subsections.shift()
            for (const subsection of subsections){
                const sub = subsection.trim()
                if (sub.startsWith("Inlined functions")){
                    sectionFormatted.push(sub)
                } else if (sub.startsWith("RelocInfo")) {
                    const deopts = (sub.match(/deoptimization bailout/g)||[]).length

                    sectionFormatted.push(`${deopts} deoptimizations`)

                } else if (sub.startsWith("--- Optimized code ---")){
                    sectionFormatted.push(sub)
                }
            }
            formatted.push(sectionFormatted.join("\n\n"))
        }

    }

    return formatted.join("\n\n------------\n\n--- Raw source ---")

}