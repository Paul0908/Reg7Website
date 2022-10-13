import {ErrorHandler, Injectable} from "@angular/core";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        const chunkFailedMessage = /Loading chunk [\d]+ failed/;
        if (chunkFailedMessage.test(error.message)) {
            if (confirm("Etwas konnte nicht geladen werden. Neu laden?")) {
                window.location.reload();
            }
        }
    }
}
