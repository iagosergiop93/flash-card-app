import { Navigator } from "./navigator";
import { DOMAIN } from "../../environments/environment";

export class BrowserNavigator implements Navigator {

    navigateTo(url: string, queryParams?: any): void {
        if(url.startsWith("http")) {
            document.location.href = url;
        }
        else {
            document.location.href = DOMAIN + url;
        }
    }

}