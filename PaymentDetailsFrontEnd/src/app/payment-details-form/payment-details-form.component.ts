import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetail } from '../shared/payment-detail.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styleUrls: ['./payment-details-form.component.scss'],
})
export class PaymentDetailsFormComponent implements OnInit {
  constructor(public service: PaymentDetailService) {}

  ngOnInit(): void {}

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe(
      (res) => {
        this.resetForm(form);
        this.service.refreshList();
      },
      (err) => console.log(err)
    );
  }
}
