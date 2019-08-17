import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  SectionList,
  Image
} from "react-native";

class CList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {name:'aaa',id: '1001'},
        {name:'bbb',id: '1002'},
        {name:'bbb',id: '1003'},
      ],
      sectionListDatas: {
        "data": [
          {
            data: [
              {
                "icon": require("../assets/imgs/cars/m_180_100.png"),
                "name": "AC Schnitzer"
              },
              {
                "icon": require("../assets/imgs/cars/m_92_100.png"),
                "name": "阿尔法·罗密欧"
              },
              {
                "icon": require("../assets/imgs/cars/m_9_100.png"),
                "name": "奥迪"
              },
              {
                "icon": require("../assets/imgs/cars/m_97_100.png"),
                "name": "阿斯顿·马丁"
              }
            ],
            "title": "A"
          },
          {
            data: [
              {
                "icon": require("../assets/imgs/cars/m_172_100.png"),
                "name": "巴博斯"
              },
              {
                "icon": require("../assets/imgs/cars/m_157_100.png"),
                "name": "宝骏"
              },
              {
                "icon": require("../assets/imgs/cars/m_3_100.png"),
                "name": "宝马"
              },
              {
                "icon": require("../assets/imgs/cars/m_82_100.png"),
                "name": "保时捷"
              },
              {
                "icon": require("../assets/imgs/cars/m_163_100.png"),
                "name": "北京汽车"
              },
              {
                "icon": require("../assets/imgs/cars/m_211_100.png"),
                "name": "北汽幻速"
              },
              {
                "icon": require("../assets/imgs/cars/m_168_100.png"),
                "name": "北汽威旺"
              },
              {
                "icon": require("../assets/imgs/cars/m_14_100.png"),
                "name": "北汽制造"
              },
              {
                "icon": require("../assets/imgs/cars/m_2_100.png"),
                "name": "奔驰"
              },
              {
                "icon": require("../assets/imgs/cars/m_59_100.png"),
                "name": "奔腾"
              },
              {
                "icon": require("../assets/imgs/cars/m_26_100.png"),
                "name": "本田"
              },
              {
                "icon": require("../assets/imgs/cars/m_5_100.png"),
                "name": "标致"
              },
              {
                "icon": require("../assets/imgs/cars/m_127_100.png"),
                "name": "别克"
              },
              {
                "icon": require("../assets/imgs/cars/m_85_100.png"),
                "name": "宾利"
              },
              {
                "icon": require("../assets/imgs/cars/m_15_100.png"),
                "name": "比亚迪"
              },
              {
                "icon": require("../assets/imgs/cars/m_135_100.png"),
                "name": "布加迪"
              }
            ],
            "title": "B"
          },
          {
            data: [
              {
                "icon": require("../assets/imgs/cars/m_129_100.png"),
                "name": "昌河"
              }
            ],
            "title": "C"
          },
          {
            data: [
              {
                "icon": require("../assets/imgs/cars/m_113_100.png"),
                "name": "道奇"
              },
              {
                "icon": require("../assets/imgs/cars/m_165_100.png"),
                "name": "大通"
              },
              {
                "icon": require("../assets/imgs/cars/m_8_100.png"),
                "name": "大众"
              },
              {
                "icon": require("../assets/imgs/cars/m_27_100.png"),
                "name": "东风"
              },
              {
                "icon": require("../assets/imgs/cars/m_197_100.png"),
                "name": "东风风度"
              },
              {
                "icon": require("../assets/imgs/cars/m_141_100.png"),
                "name": "东风风神"
              },
              {
                "icon": require("../assets/imgs/cars/m_115_100.png"),
                "name": "东风风行"
              },
              {
                "icon": require("../assets/imgs/cars/m_205_100.png"),
                "name": "东风小康"
              },
              {
                "icon": require("../assets/imgs/cars/m_29_100.png"),
                "name": "东南"
              },
              {
                "icon": require("../assets/imgs/cars/m_179_100.png"),
                "name": "DS"
              }
            ],
            "title": "D"
          },
          {
            data: [
              {
                "icon": require("../assets/imgs/cars/m_91_100.png"),
                "name": "法拉利"
              },
              {
                "icon": require("../assets/imgs/cars/m_199_100.png"),
                "name": "飞驰商务车"
              },
              {
                "icon": require("../assets/imgs/cars/m_164_100.png"),
                "name": "菲斯克"
              },
              {
                "icon": require("../assets/imgs/cars/m_40_100.png"),
                "name": "菲亚特"
              },
              {
                "icon": require("../assets/imgs/cars/m_7_100.png"),
                "name": "丰田"
              },
              {
                "icon": require("../assets/imgs/cars/m_67_100.png"),
                "name": "福迪"
              },
              {
                "icon": require("../assets/imgs/cars/m_190_100.png"),
                "name": "弗那萨利"
              },
              {
                "icon": require("../assets/imgs/cars/m_208_100.png"),
                "name": "福汽启腾"
              },
              {
                "icon": require("../assets/imgs/cars/m_17_100.png"),
                "name": "福特"
              },
              {
                "icon": require("../assets/imgs/cars/m_128_100.png"),
                "name": "福田"
              }
            ],
            "title": "F"
          },
          {
            data: [
              {
                "icon": require("../assets/imgs/cars/m_109_100.png"),
                "name": "GMC"
              },
              {
                "icon": require("../assets/imgs/cars/m_110_100.png"),
                "name": "光冈"
              },
              {
                "icon": require("../assets/imgs/cars/m_147_100.png"),
                "name": "广汽"
              },
              {
                "icon": require("../assets/imgs/cars/m_63_100.png"),
                "name": "广汽吉奥"
              },
              {
                "icon": require("../assets/imgs/cars/m_133_100.png"),
                "name": "广汽日野"
              },
              {
                "icon": require("../assets/imgs/cars/m_182_100.png"),
                "name": "观致汽车"
              }
            ],
            "title": "G"
          },
          {
            data: [
              {
                "icon": require("../assets/imgs/cars/m_31_100.png"),
                "name": "哈飞"
              },
              {
                "icon": require("../assets/imgs/cars/m_196_100.png"),
                "name": "哈弗"
              },
              {
                "icon": require("../assets/imgs/cars/m_170_100.png"),
                "name": "海格"
              },
              {
                "icon": require("../assets/imgs/cars/m_32_100.png"),
                "name": "海马"
              },
              {
                "icon": require("../assets/imgs/cars/m_149_100.png"),
                "name": "海马商用车"
              },
              {
                "icon": require("../assets/imgs/cars/m_181_100.png"),
                "name": "恒天汽车"
              },
              {
                "icon": require("../assets/imgs/cars/m_58_100.png"),
                "name": "红旗"
              },
              {
                "icon": require("../assets/imgs/cars/m_52_100.png"),
                "name": "黄海"
              },
              {
                "icon": require("../assets/imgs/cars/m_112_100.png"),
                "name": "华泰"
              },
              {
                "icon": require("../assets/imgs/cars/m_45_100.png"),
                "name": "汇众"
              }
            ],
            "title": "H"
          },
          {
            data: [
              {
                "icon": require("../assets/imgs/cars/m_35_100.png"),
                "name": "江淮"
              },
              {
                "icon": require("../assets/imgs/cars/m_37_100.png"),
                "name": "江铃"
              },
              {
                "icon": require("../assets/imgs/cars/m_38_100.png"),
                "name": "江南"
              },
              {
                "icon": require("../assets/imgs/cars/m_98_100.png"),
                "name": "捷豹"
              },
              {
                "icon": require("../assets/imgs/cars/m_143_100.png"),
                "name": "吉利帝豪"
              },
              {
                "icon": require("../assets/imgs/cars/m_144_100.png"),
                "name": "吉利全球鹰"
              },
              {
                "icon": require("../assets/imgs/cars/m_148_100.png"),
                "name": "吉利英伦"
              },
              {
                "icon": require("../assets/imgs/cars/m_39_100.png"),
                "name": "金杯"
              },
              {
                "icon": require("../assets/imgs/cars/m_57_100.png"),
                "name": "金龙联合"
              },
              {
                "icon": require("../assets/imgs/cars/m_161_100.png"),
                "name": "金旅客车"
              },
              {
                "icon": require("../assets/imgs/cars/m_152_100.png"),
                "name": "九龙"
              },
              {
                "icon": require("../assets/imgs/cars/m_4_100.png"),
                "name": "Jeep"
              }
            ],
            "title": "J"
          },
          {
            data: [
              {
                "icon": require("../assets/imgs/cars/m_188_100.png"),
                "name": "卡尔森"
              },
              {
                "icon": require("../assets/imgs/cars/m_107_100.png"),
                "name": "凯迪拉克"
              },
              {
                "icon": require("../assets/imgs/cars/m_150_100.png"),
                "name": "开瑞"
              },
              {
                "icon": require("../assets/imgs/cars/m_51_100.png"),
                "name": "克莱斯勒"
              },
              {
                "icon": require("../assets/imgs/cars/m_145_100.png"),
                "name": "科尼塞克"
              },
              {
                "icon": require("../assets/imgs/cars/m_212_100.png"),
                "name": "KTM"
              }
            ],
            "title": "K"
          },
          {
            data: [
              {
                "icon": require("../assets/imgs/cars/m_86_100.png"),
                "name": "兰博基尼"
              },
              {
                "icon": require("../assets/imgs/cars/m_200_100.png"),
                "name": "蓝海房车"
              },
              {
                "icon": require("../assets/imgs/cars/m_80_100.png"),
                "name": "劳斯莱斯"
              },
              {
                "icon": require("../assets/imgs/cars/m_94_100.png"),
                "name": "雷克萨斯"
              },
              {
                "icon": require("../assets/imgs/cars/m_99_100.png"),
                "name": "雷诺"
              },
              {
                "icon": require("../assets/imgs/cars/m_146_100.png"),
                "name": "莲花"
              },
              {
                "icon": require("../assets/imgs/cars/m_153_100.png"),
                "name": "猎豹汽车"
              },
              {
                "icon": require("../assets/imgs/cars/m_76_100.png"),
                "name": "力帆"
              },
              {
                "icon": require("../assets/imgs/cars/m_16_100.png"),
                "name": "铃木"
              },
              {
                "icon": require("../assets/imgs/cars/m_166_100.png"),
                "name": "理念"
              },
              {
                "icon": require("../assets/imgs/cars/m_95_100.png"),
                "name": "林肯"
              },
              {
                "icon": require("../assets/imgs/cars/m_36_100.png"),
                "name": "陆风"
              },
              {
                "icon": require("../assets/imgs/cars/m_96_100.png"),
                "name": "路虎"
              },
              {
                "icon": require("../assets/imgs/cars/m_83_100.png"),
                "name": "路特斯"
              }
            ],
            "title": "L"
          },
          {
            data: [
              {
                "icon": require("../assets/imgs/cars/m_183_100.png"),
                "name": "迈凯伦"
              },
              {
                "icon": require("../assets/imgs/cars/m_93_100.png"),
                "name": "玛莎拉蒂"
              },
              {
                "icon": require("../assets/imgs/cars/m_18_100.png"),
                "name": "马自达"
              },
              {
                "icon": require("../assets/imgs/cars/m_79_100.png"),
                "name": "MG"
              },
              {
                "icon": require("../assets/imgs/cars/m_81_100.png"),
                "name": "MINI"
              },
              {
                "icon": require("../assets/imgs/cars/m_201_100.png"),
                "name": "摩根"
              }
            ],
            "title": "M"
          },
          {
            data: [
              {
                "icon": require("../assets/imgs/cars/m_155_100.png"),
                "name": "纳智捷"
              }
            ],
            "title": "N"
          },
          {
            data: [
              {
                "icon": require("../assets/imgs/cars/m_104_100.png"),
                "name": "欧宝"
              },
              {
                "icon": require("../assets/imgs/cars/m_84_100.png"),
                "name": "讴歌"
              },
              {
                "icon": require("../assets/imgs/cars/m_171_100.png"),
                "name": "欧朗"
              }
            ],
            "title": "O"
          },
          {
            data: [
              {
                "icon": require("../assets/imgs/cars/m_156_100.png"),
                "name": "启辰"
              },
              {
                "icon": require("../assets/imgs/cars/m_43_100.png"),
                "name": "庆铃"
              },
              {
                "icon": require("../assets/imgs/cars/m_42_100.png"),
                "name": "奇瑞"
              },
              {
                "icon": require("../assets/imgs/cars/m_28_100.png"),
                "name": "起亚"
              }
            ],
            "title": "Q"
          },
          {
            data: [
              {
                "icon": require("../assets/imgs/cars/m_30_100.png"),
                "name": "日产"
              },
              {
                "icon": require("../assets/imgs/cars/m_78_100.png"),
                "name": "荣威"
              },
              {
                "icon": require("../assets/imgs/cars/m_142_100.png"),
                "name": "瑞麒"
              }
            ],
            "title": "R"
          },
          {
            data: [
              {
                "icon": require("../assets/imgs/cars/m_25_100.png"),
                "name": "三菱"
              },
              {
                "icon": require("../assets/imgs/cars/m_209_100.png"),
                "name": "山姆"
              },
              {
                "icon": require("../assets/imgs/cars/m_195_100.png"),
                "name": "绅宝"
              },
              {
                "icon": require("../assets/imgs/cars/m_50_100.png"),
                "name": "双环"
              },
              {
                "icon": require("../assets/imgs/cars/m_102_100.png"),
                "name": "双龙"
              },
              {
                "icon": require("../assets/imgs/cars/m_111_100.png"),
                "name": "斯巴鲁"
              },
              {
                "icon": require("../assets/imgs/cars/m_10_100.png"),
                "name": "斯柯达"
              },
              {
                "icon": require("../assets/imgs/cars/m_89_100.png"),
                "name": "smart"
              }
            ],
            "title": "S"
          },
          {
            data: [
              {
                "icon": require("../assets/imgs/cars/m_202_100.png"),
                "name": "泰卡特"
              },
              {
                "icon": require("../assets/imgs/cars/m_189_100.png"),
                "name": "特斯拉"
              }
            ],
            "title": "T"
          },
          {
            data: [
              {
                "icon": require("../assets/imgs/cars/m_140_100.png"),
                "name": "威麟"
              },
              {
                "icon": require("../assets/imgs/cars/m_186_100.png"),
                "name": "威兹曼"
              },
              {
                "icon": require("../assets/imgs/cars/m_19_100.png"),
                "name": "沃尔沃"
              },
              {
                "icon": require("../assets/imgs/cars/m_48_100.png"),
                "name": "五菱"
              }
            ],
            "title": "W"
          },
          {
            data: [
              {
                "icon": require("../assets/imgs/cars/m_13_100.png"),
                "name": "现代"
              },
              {
                "icon": require("../assets/imgs/cars/m_174_100.png"),
                "name": "星客特"
              },
              {
                "icon": require("../assets/imgs/cars/m_71_100.png"),
                "name": "新凯"
              },
              {
                "icon": require("../assets/imgs/cars/m_87_100.png"),
                "name": "西雅特"
              },
              {
                "icon": require("../assets/imgs/cars/m_49_100.png"),
                "name": "雪佛兰"
              },
              {
                "icon": require("../assets/imgs/cars/m_6_100.png"),
                "name": "雪铁龙"
              }
            ],
            "title": "X"
          },
          {
            data: [
              {
                "icon": require("../assets/imgs/cars/m_194_100.png"),
                "name": "扬州亚星客车"
              },
              {
                "icon": require("../assets/imgs/cars/m_138_100.png"),
                "name": "野马汽车"
              },
              {
                "icon": require("../assets/imgs/cars/m_100_100.png"),
                "name": "英菲尼迪"
              },
              {
                "icon": require("../assets/imgs/cars/m_53_100.png"),
                "name": "一汽"
              },
              {
                "icon": require("../assets/imgs/cars/m_41_100.png"),
                "name": "依维柯"
              },
              {
                "icon": require("../assets/imgs/cars/m_75_100.png"),
                "name": "永源"
              }
            ],
            "title": "Y"
          },
          {
            data: [
              {
                "icon": require("../assets/imgs/cars/m_136_100.png"),
                "name": "长安轿车"
              },
              {
                "icon": require("../assets/imgs/cars/m_159_100.png"),
                "name": "长安商用"
              },
              {
                "icon": require("../assets/imgs/cars/m_21_100.png"),
                "name": "长城"
              },
              {
                "icon": require("../assets/imgs/cars/m_203_100.png"),
                "name": "之诺"
              },
              {
                "icon": require("../assets/imgs/cars/m_60_100.png"),
                "name": "中华"
              },
              {
                "icon": require("../assets/imgs/cars/m_167_100.png"),
                "name": "中欧"
              },
              {
                "icon": require("../assets/imgs/cars/m_77_100.png"),
                "name": "众泰"
              },
              {
                "icon": require("../assets/imgs/cars/m_204_100.png"),
                "name": "中通客车"
              },
              {
                "icon": require("../assets/imgs/cars/m_33_100.png"),
                "name": "中兴"
              }
            ],
            "title": "Z"
          }
        ]
      }
    }
  }

  _renderItem = ({item}) =>
    <View style={styles.itemViewStyle}>
      <Image style={styles.carStyle} source={item["icon"]} />
      <View style={styles.carTextStyle}>
        <Text style={styles.carTitle}>{item.name}</Text>
        <Text style={styles.carDes}>售价： <Text style={styles.price}>$200,000,000,000</Text></Text>
      </View>
    </View>

  render() {
    return(
      <View style={styles.container}>
        <SectionList
          sections={this.state.sectionListDatas["data"]}
          renderItem={this._renderItem}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          stickySectionHeadersEnabled={true}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#ddd',
  },
  itemViewStyle: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: 10,
  },
  carStyle: {
    width: 80,
    height:80,
    borderRadius: 5,
    resizeMode: "contain"
  },
  carTextStyle: {
    flexDirection: "column",
    paddingLeft: 20,
  },
  carTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold"
  },
  carDes: {
    marginTop: 20
  },
  price: {
    fontSize: 18,
    color:"orange",
    fontWeight: "bold"
  }
});

export default CList;

