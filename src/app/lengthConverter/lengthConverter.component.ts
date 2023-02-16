
import { Component, OnChanges, SimpleChanges } from '@angular/core';
interface MeasurementOption {
  id: number;
  label: string;
  unit: string;
}
@Component({
  selector: 'length-converter',
  templateUrl: './lengthConverter.component.html',
  styleUrls: ['./lengthConverter.component.scss']
})
export class LengthConverter {

  lengthOptions: MeasurementOption[] = [
    {
      id: 0,
      label: 'Kilometre',
      unit: 'km'
    },
    {
      id: 1,
      label: 'Metre',
      unit: 'm'
    },
    {
      id: 2,
      label: 'Centimetre',
      unit: 'cm'
    }
  ];
  private _selectedOptionFrom: number = 0;
  public get selectedOptionFrom(): number {
    return this._selectedOptionFrom;
  }
  public set selectedOptionFrom(value: number) {
    this._selectedOptionFrom = value;
    this._toMeasure = this.convertMeasure(this._fromMeasure, this.lengthOptions[this.selectedOptionFrom], this.lengthOptions[this.selectedOptionTo])
  }


  private _selectedOptionTo: number = 1;
  public get selectedOptionTo(): number {
    return this._selectedOptionTo;
  }
  public set selectedOptionTo(value: number) {
    this._selectedOptionTo = value;
    this._fromMeasure = this.convertMeasure(this._toMeasure, this.lengthOptions[this.selectedOptionTo], this.lengthOptions[this.selectedOptionFrom]);
  }

  private _fromMeasure: number;
  public get fromMeasure(): number {
    return this._fromMeasure;
  }
  public set fromMeasure(v: number) {
    this._fromMeasure = v;
    this._toMeasure = this.convertMeasure(this._fromMeasure, this.lengthOptions[this.selectedOptionFrom], this.lengthOptions[this.selectedOptionTo])
  }

  private _toMeasure: number;
  public get toMeasure(): number {
    return this._toMeasure;
  }
  public set toMeasure(v: number) {
    this._toMeasure = v;
    this._fromMeasure = this.convertMeasure(this._toMeasure, this.lengthOptions[this.selectedOptionTo], this.lengthOptions[this.selectedOptionFrom]);
  }


  convertMeasure(_fromMeasure: number, selectedOptionFrom: MeasurementOption, selectedOptionTo: MeasurementOption): number {
    switch (selectedOptionFrom.unit) {
      case 'km':
        return this.convertFromKMTo(_fromMeasure, selectedOptionTo);
      case 'cm':
        return this.convertFromCMTo(_fromMeasure, selectedOptionTo);
      case 'm':
        return this.convertFromMTo(_fromMeasure, selectedOptionTo);

    }
  }

  convertFromMTo(_fromMeasure: number, selectedOptionTo: MeasurementOption): number {
    switch (selectedOptionTo.unit) {
      case 'km':
        return _fromMeasure / 1000;
      case 'cm':
        return _fromMeasure * 1000;
      case 'm':
        return _fromMeasure;
    }
  }

  convertFromCMTo(_fromMeasure: number, selectedOptionTo: MeasurementOption): number {
    switch (selectedOptionTo.unit) {
      case 'km':
        return _fromMeasure / 100000;
      case 'cm':
        return _fromMeasure;
      case 'm':
        return _fromMeasure / 1000;
    }
  }

  convertFromKMTo(_fromMeasure: number, selectedOptionTo: MeasurementOption): number {
    switch (selectedOptionTo.unit) {
      case 'km':
        return _fromMeasure;
      case 'cm':
        return _fromMeasure * 100000;
      case 'm':
        return _fromMeasure * 1000;
    }
  }

}
