import { FormGroup } from '@angular/forms';

export function MustMatch(password: string, re_password: string)
{
    return (formGroup: FormGroup) => 
    {         
        const control = formGroup.controls[password];
        const matchingControl = formGroup.controls[re_password];

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    };
}

//source https://jasonwatmore.com/post/2020/07/07/angular-10-reactive-forms-validation-example