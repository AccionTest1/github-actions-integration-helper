/**
 * @description Types the specified mocked function as a jest.MockedFunction.
 * @param fn the mocked function to type as a MockedFunction
 * @returns the typed mocked function
 */
function asMockedFunction<T extends (...args: any[]) => any>(fn: T): jest.MockedFunction<T> {
  return fn as jest.MockedFunction<T>;
}

export { asMockedFunction };