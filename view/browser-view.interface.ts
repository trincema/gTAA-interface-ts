/**
 * The interface for all viewable query operations of TAF tool.
*/
export interface BrowserViewable {
    /**
     * Generic method to get the URL of a browser tab.
     */
    browserUrl();

    /**
     * Generic method to wait for element on the screen and fetch and return its text.
     * @param locator Element locator as string, could be a css locator.
    */
    elementText(locator: string, scroll: boolean, timeout: number);
}