import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  focusedField: string | null = null;

  // Inject the Router service
  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [
        '',
        [
          Validators.required,
          Validators.email, // Ensures email has valid format, including '@'
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },
    { validators: this.passwordsMatchValidator } // Apply custom validator
  );
  }

  // Custom validator to check if password and confirmPassword match
  passwordsMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    }
    return null;
  }

  showCondition(fieldName: string): void {
    this.focusedField = fieldName;
  }

  hideCondition(): void {
    this.focusedField = null;
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form submitted:', this.registrationForm.value);
      // Navigate to the dashboard page
      this.router.navigate(['/dashboard']);
    }
  }
}
