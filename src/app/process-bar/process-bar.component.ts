import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-process-bar',
  templateUrl: './process-bar.component.html',
  styleUrls: ['./process-bar.component.css'],
})
export class ProcessBarComponent implements OnInit, OnChanges {
  @Input() backgroundColor = "#e51111";
  @Input() progressColor = "#2e8b57";
  // @Input() progress = 50;

  private _progress = 50;
  @Input() set progress(value: number){
    this._progress = value;
  }
  get progress(){
    return this._progress;
  }

  constructor() {
    //Constructor là hàm tạo của một class,
    /*nó là một function đặc biệt mà khi bạn khởi tạo một instance của class thì nó sẽ được tự động chạy,
    và chỉ chạy duy nhất một lần.*/
    console.log('constructor', {
      process: this.progress,
      backgroundColor:
      this.backgroundColor,
      progressColor: this.progressColor
    });
  }

  ngOnInit(): void {
    /*ngOninit là một life-cycle method, nó sẽ được Angular tự động gọi khi component được khởi tạo,
      sau khi constructor chạy và sau khi các input đã được binding.
      Chỉ có thể validate ở lần đầu tiên*/
    console.log('ngOninit', {
      process: this.progress,
      backgroundColor:
      this.backgroundColor,
      progressColor: this.progressColor
    });
  }

  /*nếu bạn binding cho một property ở template của component cha,
  thì ở constructor của component con bạn sẽ CHƯA nhận được giá trị mà bạn đã binding,
  nhưng ở ngoninit thì bạn sẽ có thể nhận được.*/

  ngOnChanges(changes: SimpleChanges) {
    /*ngOnChanges sẽ chạy lại mỗi khi có một input nào bị thay đổi, nó sẽ được tự động gọi bởi Angular,
    do đó chúng ta có thể validate property.*/
    console.log('ngOnChanges', {
      process: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor}
    );
  }
}
