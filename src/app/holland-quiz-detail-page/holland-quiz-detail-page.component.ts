import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holland-quiz-detail-page',
  templateUrl: './holland-quiz-detail-page.component.html',
  styleUrls: ['./holland-quiz-detail-page.component.scss'],
})
export class HollandQuizDetailPageComponent implements OnInit {
  title: string = 'Holland Quiz';

  types: { name: string; shorthand: string;color:string, text: string }[];

  constructor() {
    this.types = [
      {
        name: 'Nhóm kĩ thuật',
        text:
          'Những người thuộc nhóm Kỹ thuật là những thích làm với những vật máy móc,' +
          'các vật thể, dụng cụ, động thực vật hoặc hoạt động ngoài trời. Trên thực' +
          'tế, những người sống thực tế (realistic) có lối sống ngăn nắp, thích làm' +
          'việc đã đặt sẵn mục tiêu cụ thể, có kế hoạch. Ngoài ra, những người trong' +
          'nhóm tính cách này không quan tâm nhiều đến quan hệ tình cảm hay gây dựng' +
          'quan hệ với những người xung quanh. Ngược lại, họ lại là những người dành' +
          'sự quan tâm lớn cho các yếu tố hữu hình như: địa vị, quyền lực, tiền bạc,' +
          '… cụ thể, máy móc, dụng cụ, cây cối, con vật hoặc các hoạt động ngoài' +
          'trời. Với những người thuộc nhóm Realistic – Kỹ thuật, công việc phù hợp' +
          'cho họ bao gồm: kiến trúc, xây dựng, công nghiệp dân dụng, kỹ thuật, lái' +
          'xe, huấn luyện viên, nghề mộc, nông – lâm nghiệp (quản lý trang trại, nhân' +
          'giống cá, lâm nghiệp…), cơ khí (chế tạo máy móc, luyện kim, cơ khí ứng' +
          'dụng, bảo trì và sửa chữa thiết bị,…), địa lý – địa chất (đo đạc, vẽ bản' +
          'đồ địa chính), dầu khí, hải dương học, điện – điện tử, quản lý công' +
          'nghiệp…',
          color:'#CB4E18',
        shorthand: 'realistic',
      },

      {
        name: 'Nhóm nghệ thuật',
        text: "Là người thuộc nhóm sáng tạo nghệ thuật, bản thân bạn sẽ có chất “nghệ” trong người”, nhạy cảm, trực giác tốt, tính sáng tạo cao, trí tưởng tượng phong phú ưa thích hướng đi tự do không rập khuôn và thích thể hiện sự sáng tạo của mình khi kế hoạch bị thay đổi. Những người có tính cách nghệ không thích các hoạt động lặp lại nhiều lần, bởi vậy, họ ưa sự cải tiến, đổi mới trong quá trình làm việc và sự sáng tạo. Thẩm mỹ là  yếu tố được đặt lên hàng đầu. Bởi vậy, những con người nghệ sĩ luôn có nội tập khá phức tạp, sống nội tâm và nhạy cảm. Tuy nhiên, điểm trừ lớn của nhóm là không theo luật lệ, khuôn phép, đây là yếu tố có thể khiến nhiều bạn trẻ sống không có kế hoạch, đánh mất động lực trong bản thân, trở thành người mơ mộng, thiếu thực tế. Ngành nghề phù hợp với nhóm này bao gồm: Sáng tạo văn học; báo chí (bình luận viên, dẫn chương trình, biên tập viên,…); truyền thông (truyền thông phát triển xã hội, tổ chức sự kiện, quan hệ công chúng, quảng cáo, …); sân khấu điện ảnh (diễn viên, đạo diễn, dựng phim, ca sĩ, nghệ sĩ múa… ), mỹ thuật, kiến trúc, thiết kế, thời trang, hội họa, giáo viên dạy sử/Anh văn,…" ,
        shorthand: 'artist',
        color:'#F7B902',
      },
      
      {
        name: 'Nhóm nghiên cứu',
        text: 'Bản chất của nghiên cứu chính là tìm tòi, suy ngẫm để phát hiện ra vấn đề. Vì thế, những người thuộc nhóm nghiên cứu cũng mang các đặc điểm như: thích quan sát, điều tra, phân tích, đánh giá để giải quyết các vấn đề họ quan tâm về thế giới, tự nhiên. Những người thuộc nhóm nghiên cứu rất thông minh, thích sự chính xác và tin tưởng vào khoa học. Nhưng ngược lại, họ thiếu kỹ năng lãnh đạo. Nếu bạn cũng là thành viên trong nhóm nghiên cứu, rất có khả năng bạn sẽ thấy bản thân trong những công việc như: khoa học công nghệ (công nghệ thông tin, quản trị mạng máy tính; môi trường, vật lý kỹ thuật,….); nông lâm (nông học, thú y…); khoa học tự nhiên (nghiên cứu toán, lý, hóa, sinh, địa lý, thống kê…); khoa học xã hội (nhân học, tâm lý học, pháp luật, sử học, địa lý…); y – dược (bác sĩ, y sĩ, điều dưỡng, nha sĩ, dược sĩ, kỹ thuật lâm sàng,…);',
        shorthand: 'investigate',
        color:'#655498',
      },
      {
        name: 'Nhóm xã hội',
        text: 'Cũng giống như nhóm nghiên cứu, người thuộc nhóm xã hội rất thích việc cung cấp và làm sáng tỏ thông tin. Tuy nhiên điểm khác biệt lớn là dấu ấn hướng về xã hội của nhóm người này lớn hơn rất nhiều, thông qua các hoạt động hỗ trợ cộng đồng trực tiếp như: chăm sóc sức khỏe người khác, huấn luyện, chỉ dẫn,….  Như vậy, đây là những người rất phù hợp với các công việc truyền đạt kiến thức kiến thức. Ngành nghề phù hợp của nhóm xã hội bao gồm: giảng viên; hướng dẫn viên du lịch; tư vấn tâm lý, công tác xã hội, tình nguyện viên, tư vấn – hướng nghiệp, sức khỏe cộng đồng, bác sĩ chuyên khoa, thẩm định giá, nhân sự, cảnh sát, nhân viên xã hội học, điều dưỡng, chuyên gia dinh dưỡng…',
        shorthand: 'social',
        color:'#BB5CC4',
      },
      {
        name: 'Nhóm quản lý',
        text: 'Những người thuộc nhóm quản lý có khả năng làm việc nhóm tốt, đồng thời phù hợp với vị trí lãnh đạo, tác động, thuyết phục người khác và thể hiện ý kiến cá nhân đóng góp cho lợi ích nhóm. Họ là những người “dám nghĩ dám làm”, ưa thích hùng biện, đặt lợi ích kinh tế lên hàng đầu. Bởi vậy, ngành nghề phù hợp cho nhóm quản lý luôn mang thiên hướng kinh tế – kinh doanh – tài chính. Cụ thể, các ngành nghề phù hợp với nhóm này bao gồm: quản trị kinh doanh, thương mại, marketing, kế toán – tài chính, tài chính – ngân hàng, luật sư, kinh tế đối ngoại, kinh doanh quốc tế, dịch vụ khách hàng, tiếp viên hàng không, nhân viên sales, pha chế rượu, quy hoạch đô thị, …',
        shorthand: 'enterprising',
        color:'#E88B00',
      },
      {
        name: 'Nhóm nghiệp vụ',
        text: 'Nhóm công chức, hay còn gọi là nhóm nghiệp vụ, là những người thường xuyên làm việc với các con số và dữ liệu, thích hợp với công việc văn phòng đòi hỏi sự tỉ mỉ, cẩn thận, tuân theo hướng dẫn có sẵn. Là nhóm người truyền thống, bởi vậy nhóm công chức luôn đi theo quy tắc, quy củ, trái ngược với nhóm nghệ thuật. Là những người có khả năng thao tác với hồ sơ, lưu trữ và quản lý giữ liệu hoặc giỏi tính toán nên những người trong nhóm Công chức có thể đảm nhận nhiệm vụ hành chính, điện thoại viên, thanh tra ngành, kế toán, … ',
        shorthand: 'conventional',
        color:'#7DAD3D',
      },
    ];
  }

  ngOnInit() {}
}
