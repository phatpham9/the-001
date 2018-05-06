import React from 'react';
import StackGrid from "react-stack-grid";

import Post from '../Post';
import './Home.scss';

const FETCH_POSTS_URL = '/api/posts';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    };
  }
  
  async componentDidMount() {
  //  const posts = await this.getPosts();
   
   this.setState({
     posts: [
      {
        "celebId": "0a66b32b-38bb-4d44-9454-d36ebe8b4964",
        "eid": "post-msg-5aec72baff5c90254959189b",
        "avatar": "https://graph.facebook.com/1414486692211613/picture",
        "name": "Isaac",
        "date": "May 4th 2018 at 8:52 am",
        "text": "Hà Nội ơi, ngày mai có ai có hẹn với \"chú Isaac\" thì nhớ đến TTTM VMM Royal City lúc 18g30 nhé  Love you 😘😘😘  #Isaac",
        "medias": [
          "https://media.stardary.com/cache/415x0/fb/31721/2018-05/04/31721_d8bbd9dbbcf0c8f63f4678493154b988.jpg"
        ],
        "comments": [
          {
            "avatar": "https://graph.facebook.com/1293848970723227/picture",
            "name": "Phuong Hoa",
            "date": "May 5th 2018 at 3:09 am",
            "text": "Cho em đi với"
          },
          {
            "avatar": "https://graph.facebook.com/163476811068925/picture",
            "name": "Quỳnh Miu",
            "date": "May 5th 2018 at 3:09 am",
            "text": "Anh Isaac chứ sao lại là chú Isaac ạ"
          },
          {
            "avatar": "https://graph.facebook.com/2001920963430314/picture",
            "name": "Lê Thị Huệ",
            "date": "May 4th 2018 at 7:37 pm",
            "text": "Let's go"
          }
        ]
      },
      {
        "celebId": "0a66b32b-38bb-4d44-9454-d36ebe8b4964",
        "eid": "post-msg-5aebfd93ff5c906c0c40f2b1",
        "avatar": "https://graph.facebook.com/1414486692211613/picture",
        "name": "Isaac",
        "date": "May 4th 2018 at 2:05 am",
        "text": "Yêu một người nhỏ tuổi, tôi chấp nhận việc bỏ thói quen uống cafe và làm quen với trà sữa    Yêu một người nhỏ tuổi, tôi học cách bỏ bớt công việc để dành thời gian bên em    Yêu một người nhỏ tuổi, tôi cười nhiều hơn vì em trẻ con và đáng yêu quá    Yêu một người nhỏ tuổi, tôi thấy mình như một siêu anh hùng có nhiệm vụ đến thế giới để bảo vệ em    Yêu một người nhỏ tuổi, tôi cũng thấy mình cũng nhỏ hơn lúc nào không hay 😉    #Isaac",
        "medias": [
          "https://media.stardary.com/cache/415x0/fb/31721/2018-05/04/31721_e5f4a43df1f10c967a90646e1cac1d82.jpg"
        ],
        "comments": [
          {
            "avatar": "https://graph.facebook.com/902871583214108/picture",
            "name": "Linh Nguyễn",
            "date": "May 5th 2018 at 3:09 am",
            "text": "Anh ơi, yêu đương gì nữa, cưới luôn đi anh, cưới ngay trong đim, song hỷ lâm môn luôn anh ơi, tối nay ng iu bé nhỏ của anh ra MV rồi đó, hai chuyện vui dồn 1 lúc, trời đất ơi sao tui zui z nè."
          },
          {
            "avatar": "https://graph.facebook.com/131988554147207/picture",
            "name": "Lê Thị Huệ",
            "date": "May 4th 2018 at 7:37 pm",
            "text": "Lời của bài hát mới hả anh ? Chị Hà Trúc có tham gia vs anh trong mv này không vậy anh?"
          },
          {
            "avatar": "https://graph.facebook.com/561095537555531/picture",
            "name": "Tina Nguyen",
            "date": "May 4th 2018 at 7:37 pm",
            "text": "Thanh Nhàn Nguyễn yêu một người bằng tuổi  cùng nhau trải qua tuổi 18"
          }
        ]
      },
      {
        "celebId": "0a66b32b-38bb-4d44-9454-d36ebe8b4964",
        "eid": "post-msg-5aedc22eff5c90100731a593",
        "avatar": "https://graph.facebook.com/1414486692211613/picture",
        "name": "Isaac",
        "date": "May 5th 2018 at 3:46 am",
        "text": "Cả nhà đừng quên tối nay có hẹn với Isaac ở Royal City HN tầng B2 Sảnh R6 vào lúc 18h30 nhé ^^",
        "medias": [
          "https://media.stardary.com/cache/415x0/fb/31721/2018-05/05/31721_90929d86d674fa770f0aa147f5be74ec.jpg"
        ],
        "comments": [
          {
            "avatar": "https://graph.facebook.com/509093639489788/picture",
            "name": "Trần Khánh Huyền",
            "date": "May 5th 2018 at 7:28 pm",
            "text": "Vừa đi xem anh biểu diễn vui quá trờiiii.A max đẹp trai nhảy đẹp lại còn chiều fan nữa chứ.Cuối cùng hôm nay e đã được chạm vào thần tượng hihihi.Cảm ơn anh chú nhiều lắm ạ ^^"
          },
          {
            "avatar": "https://graph.facebook.com/554160554924624/picture",
            "name": "Ngọc Thanh",
            "date": "May 5th 2018 at 7:28 pm",
            "text": "Dạo này trộm cắp nhiều lắm Anh à quây qua quây lại là mất tiu cái trái tim❤❤❤"
          },
          {
            "avatar": "https://graph.facebook.com/285535101969367/picture",
            "name": "Thanh Nhi Pham",
            "date": "May 5th 2018 at 10:39 am",
            "text": "Okok à a ơi a chuẩn bị khoảng vài chuyến cấp cứu đyy ko là tim lions rớt ra ngoài đấy"
          }
        ]
      },
      {
        "celebId": "0a66b32b-38bb-4d44-9454-d36ebe8b4964",
        "eid": "post-msg-5ae412ecff5c900c9c4be615",
        "avatar": "https://graph.facebook.com/1414486692211613/picture",
        "name": "Isaac",
        "date": "April 28th 2018 at 12:11 am",
        "text": "Em yêu, đừng gọi anh là chú có được không? Anh chỉ mới 30 thôi mà 😉  #isaac",
        "medias": [
          "https://media.stardary.com/cache/415x0/fb/31721/2018-04/28/31721_e6a9751d0dff85d6a336d029ef087ee8.jpg"
        ],
        "comments": [
          {
            "avatar": "https://graph.facebook.com/2424540211105314/picture",
            "name": "XaBi AlOn Sơn",
            "date": "April 28th 2018 at 6:29 pm",
            "text": "Em gọi anh là \"Anh \"  mà 😂, không già đâu anh 😂  vẫn trẻ mãi trong lòng em thôi đó 😂😘"
          },
          {
            "avatar": "https://graph.facebook.com/519348021783111/picture",
            "name": "Bình Thiên",
            "date": "April 28th 2018 at 6:29 pm",
            "text": "Mặc dù e mới GẦN 17 nhưng từ xưa đến nay toàn gọi là Anh Xái!!! Giờ Anh đang cap này nghĩ lại về độ tuổi chắc đổi cách xưng hô quá :v"
          },
          {
            "avatar": "https://graph.facebook.com/943366622498385/picture",
            "name": "Đổi Thay",
            "date": "April 28th 2018 at 11:17 am",
            "text": "Lêulêu kệ chú chớ......con vẫn thích gọi là chú Isaac.....😌😂😂😂😂"
          }
        ]
      },
      {
        "celebId": "0a66b32b-38bb-4d44-9454-d36ebe8b4964",
        "eid": "post-msg-5ae1e555ff5c906560357446",
        "avatar": "https://graph.facebook.com/1414486692211613/picture",
        "name": "Isaac",
        "date": "April 26th 2018 at 3:58 am",
        "text": "Lưng ải lưng aiiii  #isaac",
        "medias": [
          "https://media.stardary.com/cache/415x0/fb/31721/2018-04/26/31721_bdef42dbc59102ac30fbe1fbf295203d.jpg"
        ],
        "comments": [
          {
            "avatar": "https://graph.facebook.com/159943241429580/picture",
            "name": "Tô Tiến Đạt",
            "date": "April 26th 2018 at 10:42 am",
            "text": "Lưng Ảnh Lưng Anh"
          },
          {
            "avatar": "https://graph.facebook.com/322079871533376/picture",
            "name": "Long Dung",
            "date": "April 26th 2018 at 10:42 am",
            "text": "Nếu quay MV mới xong roj thì cho Teaser đi a xái . Ai đồng ý thì thả <3 cho a xái"
          },
          {
            "avatar": "https://graph.facebook.com/267104927156385/picture",
            "name": "Uyên Ngô",
            "date": "April 26th 2018 at 10:42 am",
            "text": "Lưng ảnh lưng anh haha ❤❤❤ chúc a luôn thành công nhé E sắp thi òi a cũng chúc e cái  gì đyyy nà"
          }
        ]
      },
      {
        "celebId": "0a66b32b-38bb-4d44-9454-d36ebe8b4964",
        "eid": "post-msg-5adfb96cff5c900dd53f2e69",
        "avatar": "https://graph.facebook.com/1414486692211613/picture",
        "name": "Isaac",
        "date": "April 24th 2018 at 10:24 am",
        "text": "Thank you!    #ForbesVietnam #30under30    Còn nhận thêm cúp của Lions nữa. Tối nay mất ngủ ;)    I love you all!",
        "medias": [
          "https://media.stardary.com/cache/415x0/fb/31721/2018-04/24/31721_64f74763708c43c6c109e0331d1a2a83.jpg"
        ],
        "comments": [
          {
            "avatar": "https://graph.facebook.com/1221391637994084/picture",
            "name": "Mù Tạt",
            "date": "April 25th 2018 at 6:40 pm",
            "text": "Yêu anh nhất, luôn luôn thành công trong sự nghiệp anh nhá ❤😘"
          },
          {
            "avatar": "https://graph.facebook.com/141653363214473/picture",
            "name": "Lê Bá Khánh",
            "date": "April 25th 2018 at 3:00 am",
            "text": "Vị trí của anh sẽ ko bao h thay đổi trong timm em"
          },
          {
            "avatar": "https://graph.facebook.com/2092483880974833/picture",
            "name": "Nguyên Chương",
            "date": "April 25th 2018 at 3:00 am",
            "text": "Chúc mừng aMà Xái ơi e chuẩn bị thi a chúc e thi tốt đc ko ❤❤❤"
          }
        ]
      },
     ]
    });
  }

  async getPosts() {
    try {
      const response = await fetch(FETCH_POSTS_URL);
      const json = await response.json();
      return await json.results;

    } catch (error) {
      console.log(error);
    }
  }

  renderPosts(posts) {
    if(!posts.length) return;

    return posts.map((post, index) => 
      <Post key={index} post={post} />
    )
  }

  render() {
    const { width } = this.props;
    return(
      <StackGrid
        columnWidth={width <= 768 ? '100%' : 350}
        duration={0}
        gutterWidth={10}
        gutterHeight={10}
      >
       {this.renderPosts(this.state.posts)}
      </StackGrid>
    );
  }
};

export default Home;
