import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";

@Injectable({
    providedIn: "root",
})
export class PdfService extends HttpService {
    constructor(http: HttpClient) {
        super(http);
        this.setApiUrl("/v1/");
    }

    convertPdfToImage(pdfArrayByte) {
        return this.post('pdf2img', pdfArrayByte).toPromise();
    }
}
