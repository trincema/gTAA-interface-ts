/**
 * The interface for all waitable states of the TAF tool.
*/
export interface BrowserWaits {
    /**
     * Wait for element to be visible. The wait will not give an error if the element is not visible
     * in the given amount if time.
     * @param locator Element locator as string, could be a css locator.
     * @param timeout Timeout to wait for element to be visible in SUT.
    */
    forElementToBeVisible(locator: string, timeout: number): Promise<boolean>;
    /**
     * Generic method to wait for an element to exist in SUT.
     * @param locator Element locator as string, could be a css locator.
     * @param timeout Timeout to wait for element to be present in SUT, default being 1 minute.
     */
    untilElementExists(locator: string, timeout: number): Promise<void>;
    /**
     * Wait until an element is visible in SUT.
     * @param locator Element locator as string, could be a css locator.
     * @param timeout Timeout to wait for element to be visible, default being 1 minute.
     */
    untilElementIsVisible(locator: string, timeout: number): Promise<void>;
    /**
     * Wait until a given element is no longer visible on the screen in SUT.
     * @param locator Element locator as string, could be a css locator.
     * @param timeout The timeout in seconds until the wait fails.
    */
    untilElementIsInvisible(locator: string, timeout: number): Promise<void>;
    /**
     * Wait for an element to be clickable in SUT.
     * @param locator Element locator as string, could be a css locator.
     * @param timeout Timeout to wait for element to be clickable, default being 1 minute.
    */
    untilElementIsClickable(locator: string, timeout: number): Promise<void>;
    /**
     * Wait until a certain number of elements appear on screen in SUT.
     * @param locator Element locator as string, could be a css locator.
     * @param count Expected number of elements to be visible identified by the same locator.
    */
    elementCount(locator: string, count: number): Promise<void>;
}
