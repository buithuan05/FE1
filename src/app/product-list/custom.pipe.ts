import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vnd',
  standalone: true,
})
export class VndPipe implements PipeTransform {
  transform(value: number): string {
    return value.toLocaleString('vi-VN') + ' đ';
  }
}
