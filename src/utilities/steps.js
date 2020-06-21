const sortAscendingStepNumber = (a, b) => (a.number < b.number ? -1 : 1);

export const processSteps = (rawSteps) => {

    //first map the steps determining the latest effective date
    const steps = rawSteps.map(rawStep => {
        const effectiveStep = rawStep.versionContent.reduce((acc, step) =>
            !acc || step.effectiveDate > acc.effectiveDate ? step : acc
        );

        return {
            id: rawStep.id,
            number: parseInt(rawStep.stepNumber, 10),
            name: effectiveStep.title,
            description: effectiveStep.body,
        };
    })

    //sort by ascending step number and return the sorted array
    return steps.sort(sortAscendingStepNumber);
}