import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twelve-astrological-page-detail',
  templateUrl: './twelve-astrological-page-detail.component.html',
  styleUrls: ['./twelve-astrological-page-detail.component.scss']
})
export class TwelveAstrologicalPageDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  twelveAstrologicalDetailData = [
    {
      name: "Bạch Dương",
      definition: "CUNG BẠCH DƯƠNG có tên khác là Dương Cưu (21/3-20/4): Đây là cung hoàng đạo được ra đời đầu tiên và mang bên mình mệnh lửa. Chính vì yếu tố đó cộng với sự nhiệt huyết của bản thân mà cung Bạch Dương luôn được tán dương là những nhà lãnh đạo tài ba và rất có năng lực.",
      leftContent: "Những điều về cung Bạch Dương vẫn luôn là một ẩn số khiến nhiều người rất tò mò và nóng lòng muốn tìm hiểu.Để biết được những bí mật về cung Bạch Dương hay ý nghĩa của chúng thì trước tiên phải nắm rõ được những tính chất quan trọng. <br/> Bạch Dương (chòm sao) được xem là linh vật xuất hiện đầu tiên trong vòng tròn hoàng đạo.Hơn thế nữa, Bạch Dương sở hữu cho mình nguyên tố lửa khiến cho sự nhiệt huyết và năng lượng ở linh vật này không bao giờ cạn kiệt. <br/> Dựa vào tất cả yếu tố trên, ta nhận thấy rõ rệt rằng đây là cung hoàng đạo có khả năng lãnh đạo, dẫn dắt các chòm sao khác.Ngoài ra, khi nhắc đến những điều về cung Bạch Dương, người ta thường biết đến với ý chí kiên cường, bất khuất và không hề bị lung lay khi gặp khó khăn thử thách."
    }
  ]
}
