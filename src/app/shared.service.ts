import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private selectedData: { image: string; text: string } | null = null;

  setSelectedData(data: { image: string; text: string }) {
    this.selectedData = data;
  }

  getSelectedData(): { image: string; text: string } | null {
    return this.selectedData;
  }

  clearSelectedData() {
    this.selectedData = null;
  }
}
