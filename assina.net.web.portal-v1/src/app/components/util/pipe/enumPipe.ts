import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'eNumAsString'
})
export class ENumAsStringPipe implements PipeTransform {

    transform(value: any, _args: any): any {
        if (_args == null) return value;
        if (typeof (_args) == 'object' && typeof (value) == 'number') {
            return _args.label(value);
        }
        return value;
    }
}