import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { Bill } from "../models/bill.model";
import { map } from "rxjs/operators";
import { BaseApi } from "../../../shared/core/base-api";

@Injectable()
export class BillService extends BaseApi {
    constructor(public http: Http){
        super(http);
    }

    getBill(): Observable<Bill>{
        return this.get('bill');
    }

    updateBill(bill: Bill): Observable<Bill>{
        return this.put('bill', bill);
    }

    getCurrency(base: string = 'RUB'): Observable<any>{
       // return this.http.get(`http://api.fixer.io/latest?base=${base}`)
       return this.http.get(`https://api.exchangeratesapi.io/latest?base=${base}`)
        
        .pipe(map((response: Response) => response.json()));
    }
}