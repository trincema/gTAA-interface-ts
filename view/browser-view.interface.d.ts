/**
 * The interface for all viewable query operations of TAF tool.
*/
export interface BrowserViewable {
    /**
     * Get the URL of a browser tab.
     */
    browserUrl(): Promise<string>;
    /**
     * Wait for element on the screen and fetch and return its text.
     * @param locator Element locator as string, could be a CSS locator.
    */
    elementText(locator: string, scroll: boolean, timeout: number): Promise<string>;
    /**
     * Check if an element is currently displayed in the browser.
     * @param locator Element locator as string, could be a CSS selector.
    */
    elementIsVisible(locator: string): Promise<boolean>;
}
