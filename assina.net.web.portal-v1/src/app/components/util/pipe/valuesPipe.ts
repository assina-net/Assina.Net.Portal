import { DecimalPipe, UpperCasePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'values' })
export class ValuesPipe implements PipeTransform {

    constructor(private uppercasePipe: UpperCasePipe,
        private decimalPipe: DecimalPipe) {
    }

    transform(value: any, _args: any): any {
        //console.log(_args);
        if (_args == null) return value;
        if (_args.name == 'object') {
            const field = _args.args.field;
            const fields = field.split('.');
            for (let f in fields) {
                value = value[fields[f]];
            }
            _args = _args.args.pipe;
        }
        switch (_args.name) {
            case 'enum': { return _args.args[value]; }
            case 'number': { return this.decimalPipe.transform(value, _args.args); }
            case 'upperCase': { return this.uppercasePipe.transform(value); }
            default: { return value; }
        }
    }

}
