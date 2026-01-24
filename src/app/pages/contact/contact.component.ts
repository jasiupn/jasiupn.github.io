import { Component } from '@angular/core';

interface ContactModel {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

interface ContactFormData extends ContactModel {
  file?: {
    name: string;
    size: string;
  } | null;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  model: ContactModel = {};
  sent = false;
  selectedFile: File | null = null;
  fileName = '';
  fileSize = '';

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.selectedFile = file;
      this.fileName = file.name;
      this.fileSize = this.formatFileSize(file.size);
    }
  }

  removeFile(): void {
    this.selectedFile = null;
    this.fileName = '';
    this.fileSize = '';
    const fileInput = document.getElementById('file') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  private formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  }

  send(): void {
    if (!this.sent) {
      this.sent = true;
      const formData: ContactFormData = {
        ...this.model,
        file: this.selectedFile ? {
          name: this.fileName,
          size: this.fileSize
        } : null
      };
      console.log('Contact form data:', formData);
      localStorage.setItem('contact', JSON.stringify(formData));

      setTimeout(() => {
        this.sent = false;
        this.model = {};
        this.removeFile();
      }, 5000);
    }
  }
}
