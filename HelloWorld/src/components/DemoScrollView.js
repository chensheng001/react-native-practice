import React, { Component } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  Dimensions,
  Platform,
  StyleSheet
} from "react-native";
const { width } = Dimensions.get("window");
let timer = 0;

class DemoScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgDatas: [],
      imgH: 160,
      currentPage: 0,
    };
  }

  //android
  setSize(imgItem) {
    let { imgH } = this.state;
    let showH;
    if (Platform.OS != "ios") {
      Image.getSize(imgItem, (w, h) => {
        console.log(w, h)
        /*showH = Math.floor(h / (w / width));
        console.log(showH)
        imgH = showH;
        this.setState({ imgH: imgH });*/
      });
    }
  }

  componentDidMount() {
    this.getImgData();
    this.startTimer();
  }

  getImgData() {
    this.setState({
      imgDatas: [
        {
          imgUrl: require("../assets/imgs/scroll/img_01.png"),
          title: "你那一笑倾国倾城"
        },
        {
          imgUrl: require("../assets/imgs/scroll/img_02.png"),
          title: "那里记录了最唯美的爱情故事"
        },
        {
          imgUrl: require("../assets/imgs/scroll/img_03.png"),
          title: "我怎么是一个剩女"
        },
        {
          imgUrl: require("../assets/imgs/scroll/img_04.png"),
          title: "生命中最后的四分钟"
        },
        {
          imgUrl: require("../assets/imgs/scroll/img_05.png"),
          title: "我们都需要治疗"
        }
      ]
    });
  }

  /*渲染图片*/
  renderImgView() {
    let allViews = [];
    if (this.state.imgDatas.length) {
      this.state.imgDatas.forEach((item, index) => {
        allViews.push(
          <View key={index} style={{ width: width, backgroundColor: "#eee" }}>
            <Image
              source={item.imgUrl}
              onLoadStart={() => {
                //this.setSize();
              }}
              style={{
                width: width,
                resizeMode: "contain",
                height: this.state.imgH,
                borderRadius: 5
              }}
            />
          </View>
        );
      });
      return allViews;
    }
  }

  /*渲染滚动索引条*/
  renderPageView(){
    let pageView = [];
    if (this.state.imgDatas.length) {
      this.state.imgDatas.forEach((item, index) => {
        const style = {color: this.state.currentPage === index ? "orange" : "red"};
        pageView.push(
          <Text key={index} style={[styles.pointStyle, style]}>
            &bull;
          </Text>
        );
      });
      return pageView;
    }
  }

  /*滚动结束后*/
  viewScrollEnd = (e) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    let activePage = Math.round(offsetX/width);
    this.setState({
      currentPage: activePage
    })
  };

  /*触碰滑动开始时*/
  scrollBeginDrag = ()=> {
    clearInterval(timer);
  };

  /*触碰滑动结束时*/
  scrollEndDrag = ()=> {
    this.startTimer();
  };

  /*自动滚动开启*/
  startTimer = ()=> {
    timer = setInterval(()=>{
      const scrollViewRef = this.refs.scrollView;
      let activePage = this.state.currentPage + 1;
      if (activePage>=this.state.imgDatas.length) {
        activePage = 0;
      }
      scrollViewRef.scrollTo({x: activePage * width, y: 0, animated: true});
      this.setState({
        currentPage: activePage
      })
    }, this.props.intervalNum);
  };

  render() {
    return (
      <View>
        <ScrollView
          ref="scrollView"
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.viewScrollEnd}
          onScrollBeginDrag={this.scrollBeginDrag}
          onScrollEndDrag={this.scrollEndDrag}
        >
          {this.renderImgView()}
        </ScrollView>
        <View style={styles.pageViewStyle}>
          {this.renderPageView()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageViewStyle: {
    width: width,
    height: 30,
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  pointStyle: {
    fontSize: 45,
    marginRight: 3,
  }
});
DemoScrollView.defaultProps = {
  intervalNum: 2000
};
export default DemoScrollView;
