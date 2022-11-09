/**
 * The interface with all doable actions of the TAF Tool.
*/
export interface BrowserActions {
    /**
     * Navigate the current browser tab to the given url.
     * @param url The url to navigate to.
    */
    navigate(url: string): Promise<void>;
    /**
     * Refresh the current page.
    */
    refreshPage(): Promise<void>;
    /**
     * Navigate back on the current browser.
    */
    goBack(): Promise<void>;
    /**
     * Generic click element method, which also includes a waiting mechanism to make sure the element
     * exists on the page, enabled and clickable.
     * @param locator Element locator as string, could be a css locator.
     * @param scroll Flag to scroll or not to scroll to the element before click, default to false.
     * @param timeout Timeout to wait for element to be interactable, default being 1 minute.
    */
    click(locator: string, clickable: boolean, scroll: boolean, timeout: number): Promise<void>;
    /**
     * Click specific element from a list of elements all identified by the same given locator.
     *
    */
    clickElement(locator: string, index: number, clickable: boolean, timeout: number): Promise<void>;
    /**
     * Set a value for an element of type <input>.
     * @param locator The locator of the HTML input element.
     * @param value The value to be inputed in the element.
     * @param timeout Timeout to wait for element to be interactable, default being 1 minute.
    */
    inputValue(locator: string, value: string, timeout: number): Promise<void>;
    /**
     * Scroll to element identified by the given locator.
     * @param locator The locator of the HTML input element.
    */
    scrollToElement(locator: string): Promise<void>;
    /**
     * Scroll to a specific element from a list of elements identified all identified by the same given locator.
     * @param locator The locator of the HTML input element.
     * @param index The index of the element to scroll to.
    */
    scrollToElementByIndex(locator: string, index: number): Promise<void>;
    /**
     * Pause the current execution a given number of seconds.
     * @param seconds The given number of seconds to pause the current execution.
    */
    sleep(seconds: number): Promise<void>;
}
