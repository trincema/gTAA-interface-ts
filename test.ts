import { BrowserActions } from './action/browser-actions.interface';
import { BrowserViewable } from '../gTAA-interface-ts/view/browser-view.interface';
import { BrowserWaits } from './wait/browser-waits.interface';

class BrowserAction implements BrowserActions {
    navigate(url: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    refreshPage(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    goBack(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    click(locator: string, clickable: boolean, scroll: boolean, timeout: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
    clickElement(locator: string, index: number, clickable: boolean, timeout: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
    inputValue(locator: string, value: string, timeout: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
    scrollToElement(locator: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    scrollToElementByIndex(locator: string, index: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
    sleep(seconds: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
    getRequest<Type>(url: string, log?: any): Promise<any> {
        throw new Error('Method not implemented.');
    }
    postRequest<Type>(url: string, payload: Object, log?: any): Promise<any> {
        throw new Error('Method not implemented.');
    }
}

class BrowserView implements BrowserViewable {
    browserUrl(): Promise<string> {
        throw new Error('Method not implemented.');
    }
    elementText(locator: string, scroll: boolean, timeout: number): Promise<string> {
        throw new Error('Method not implemented.');
    }
    elementIsVisible(locator: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}

class BrowserWait implements BrowserWaits {
    forElementToBeVisible(locator: string, timeout: number): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    untilElementExists(locator: string, timeout: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
    untilElementIsVisible(locator: string, timeout: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
    untilElementIsInvisible(locator: string, timeout: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
    untilElementIsClickable(locator: string, timeout: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
    elementCount(locator: string, count: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
}