/**
 * The interface for all waitable states of the TAF tool.
*/
export interface BrowserWaits {
    /**
     * Generic method to wait for an element to exist in SUT.
     * @param locator Element locator as string, could be a css locator.
     * @param timeout Timeout to wait for element to be present in SUT, default being 1 minute.
     */
    untilElementExists(locator: string, timeout: number);

    /**
     * Generic method to wait for an element to be visible in SUT.
     * @param locator Element locator as string, could be a css locator.
     * @param timeout Timeout to wait for element to be visible, default being 1 minute.
     */
    untilElementIsVisible(locator: string, timeout: number);
 
    /**
     * Generic method to wait until a given element is no longer visible on the screen.
     * @param locator Element locator as string, could be a css locator.
     * @param timeout The timeout in seconds until the wait fails.
    */
    untilElementIsInvisible(locator: string, timeout: number);
 
    /**
     * Generic method to wait for an element to be clickable in SUT.
     * @param locator Element locator as string, could be a css locator.
     * @param timeout Timeout to wait for element to be clickable, default being 1 minute.
    */
    untilElementIsClickable(locator: string, timeout: number);
 
    /**
     * 
    */
    elementCount(locator: string, count: number): Promise<void>;
}
