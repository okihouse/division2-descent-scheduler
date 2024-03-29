export class BrowserUtils {
    static isMobile(): boolean {
        return /Mobi|Android/i.test(navigator.userAgent);
    }
}