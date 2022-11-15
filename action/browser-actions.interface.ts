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
     * Appending the given string to the input element identified by the given locator.
     * This is helpful for dynamic input fields which have processing on them,
     * since it can cause the content to not be entered properly.
     * @param locator The locator of the HTML input element.
     * @param value The value to be inputed in the element.
     * @param timeout Timeout to wait for element to be interactable, default being 1 minute.
    */
    appendToInput(locator: string, value: string, timeout: number): Promise<void>;

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
     * Make GET request and return the given Object type as response.
     * @param url The url to which the POST request is to be made.
     * @param payload The data to be sent to the server.
     * @param log External log object to log any errors to the caller.
    */
    getRequest<Type>(url: string, log: any): Promise<any>;

    /**
     * Make POST request and return the given Object type as response.
     * @param url The url to which the POST request is to be made.
     * @param payload The data to be sent to the server.
     * @param log External log object to log any errors to the caller.
    */
    postRequest<Type>(url: string, payload: Object, log: any): Promise<any>;

    /**
     * Pause the current execution a given number of seconds.
     * @param seconds The given number of seconds to pause the current execution.
    */
    sleep(seconds: number): Promise<void>;

    /**
     * Pause the current execution a given number of mili-seconds.
     * @param milliseconds The given number of mili-seconds to pause the current execution.
    */
    sleepMilis(milliseconds: number): Promise<void>;

    /**
     * Make GET request and return the given Object type.
     * @param url The url of the GET request.
     * @param log Optional log object to log error messages to external logger.
     * @return The HTTP response wrapped in given object type.
    */
    getRequest<Type>(url: string, log?: any): Promise<any>;

    /**
     * Make POST request and return the given Object type.
     * @param url The url of the POST request.
     * @param payload The payload to be sent in the POST request.
     * @param log Optional log object to log error messages to external logger.
     * @return The HTTP response wrapped in given object type.
    */
    postRequest<Type>(url: string, payload: Object, log?: any): Promise<any>;

}
