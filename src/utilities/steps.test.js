import { apiTestData, processedApiTestData } from '../constants/api';
import { processSteps } from './steps';

describe("Map and Sort function", () => {
    test("It should select and sort the API results", () => {
        expect(processSteps(apiTestData)).toEqual(processedApiTestData);
    });
});