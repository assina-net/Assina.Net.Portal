import { Injectable } from "@angular/core";

interface FileProgress {
   status: string;
   message: any;
}

@Injectable({
   providedIn: 'root'
})
export class Globals {
   progress: FileProgress;
}
