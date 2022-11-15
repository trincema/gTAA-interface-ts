/**
 * The interface for all viewable query operations of TAF tool.
*/
export interface BrowserViewable {
    /**
     * Get the URL of a browser tab.
     */
    browserUrl(): Promise<string>;

    /**
     * Get the current browser name.
    */
    browserName(): Promise<string>;

    /**
     * Wait for element on the screen and fetch and return its text.
     * @param locator Element locator as string, could be a css locator.
    */
    elementText(locator: string, scroll: boolean, timeout: number);

    /**
     * Check if an element is currently visible in the browser.
     * @param locator Element locator as string, could be a css locator.
    */
    elementIsVisible(locator: string): Promise<boolean>;

    /**
     * Get the invisible element status.
     * @param locator Element locator as string, could be a css locator.
    */
    elementIsInvisible(locator: string): Promise<boolean>;

    /**
     * Get the enabled element status.
     * @param locator Element locator as string, could be a css locator.
    */
    elementIsEnabled(locator: string): Promise<boolean>;

    /**
     * Get the clickable element status.
     * @param locator Element locator as string, could be a css locator.
    */
    elementIsClickable(locator: string): Promise<boolean>;

    /**
     * Get the clickable element status by index.
     * @param locator Element locator as string, could be a css locator.
    */
    elementIsClickableByIndex(locator: string, index: number): Promise<boolean>;

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