SET NAMES UTF8;
DROP  DATABASE  IF  EXISTS  shopping;
CREATE  DATABASE  shopping CHARSET=UTF8;
USE shopping;
#生鲜
CREATE TABLE sp_fresh(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  name    VARCHAR(255),
  title    VARCHAR(255),
  price     VARCHAR(8)

);
INSERT INTO sp_fresh VALUES(null,'http://127.0.0.1:3000/img/1.jpg','精品琯溪蜜柚1.8kg-2.5kg','生鲜 精品琯溪蜜柚 红心柚子2粒 ','￥24.9');
INSERT INTO sp_fresh VALUES(null,'http://127.0.0.1:3000/img/2.jpg','章姬草莓350g','源自日本静冈 草莓姐香奈儿 ','￥49.9');
INSERT INTO sp_fresh VALUES(null,'http://127.0.0.1:3000/img/3.jpg','皇冠梨880g','天气这么干 吃个梨吧 ','￥13.9');
INSERT INTO sp_fresh VALUES(null,'http://127.0.0.1:3000/img/4.jpg','佳沛金奇异果90g*2','金色佳沛 添堵营养统统加倍','￥17.9');
INSERT INTO sp_fresh VALUES(null,'http://127.0.0.1:3000/img/5.jpg','泰国龙眼500g','珍珠级龙眼 吃出3D肉感','￥11.9');
INSERT INTO sp_fresh VALUES(null,'http://127.0.0.1:3000/img/6.jpg','青芒果600g*1','细滑香甜 纤维少不塞牙','￥15.9');
INSERT INTO sp_fresh VALUES(null,'http://127.0.0.1:3000/img/7.jpg','广西百香果5个250g起','丰富能尝到一百种果香味','￥15.9');
INSERT INTO sp_fresh VALUES(null,'http://127.0.0.1:3000/img/8.jpg','进口牛油果125g*2','口感像乳酪 营养不简单','￥12.9');
INSERT INTO sp_fresh VALUES(null,'http://127.0.0.1:3000/img/9.jpg','玫珑蜜瓜1000g起','一颗娇羞的小萝莉蜜瓜','￥39.9');
INSERT INTO sp_fresh VALUES(null,'http://127.0.0.1:3000/img/10.jpg','赣南脐橙2个380g起','真赣南橙就是不催熟','￥8.9');
INSERT INTO sp_fresh VALUES(null,'http://127.0.0.1:3000/img/11.jpg','智利J级车厘子450g','甜美多汁的智利国宝','￥15.9');
INSERT INTO sp_fresh VALUES(null,'http://127.0.0.1:3000/img/12.jpg','黄金百香果5个250g起','丰富能尝到一百种果香味','￥21.9');
INSERT INTO sp_fresh VALUES(null,'http://127.0.0.1:3000/img/13.jpg','进口蓝莓125g','蓝莓界的小巨蛋 果肉多多','￥19.9');
INSERT INTO sp_fresh VALUES(null,'http://127.0.0.1:3000/img/14.jpg','黄金跑步鸡 1.0kg','重新定义好鸡的标准','￥40.9');
INSERT INTO sp_fresh VALUES(null,'http://127.0.0.1:3000/img/15.jpg','梅岭牡蛎刺身生蚝2.5kg ','海鲜中的精品','￥158.9');
INSERT INTO sp_fresh VALUES(null,'http://127.0.0.1:3000/img/16.jpg','内蒙古牛腱子1kg','细腻柔滑 原生态的味道','￥39.9');
INSERT INTO sp_fresh VALUES(null,'http://127.0.0.1:3000/img/17.jpg','提拉米苏慕斯蛋糕750g','触感松软 感觉舌头恋爱了','￥130.9');
INSERT INTO sp_fresh VALUES(null,'http://127.0.0.1:3000/img/18.jpg','贝贝南瓜板栗小南瓜约2.5kg','不红薯还好吃的南瓜','￥15.9');
INSERT INTO sp_fresh VALUES(null,'http://127.0.0.1:3000/img/19.jpg','冠益乳250g','有了BB冠菌 还要什么BB霜','￥8.9');
INSERT INTO sp_fresh VALUES(null,'http://127.0.0.1:3000/img/20.jpg','库尔勒红香酥梨2.5kg','落地即碎的多汁脆梨','￥34.9');
INSERT INTO sp_fresh VALUES(null,'http://127.0.0.1:3000/img/21.jpg','秘鲁红提500g','原产于秘鲁的大个头红提','￥18.9');
INSERT INTO sp_fresh VALUES(null,'http://127.0.0.1:3000/img/22.jpg','厄尔多尔白虾400g','横跨赤道而来的肥虾','￥79.9');

#id/title/ctime/img_url/content
CREATE TABLE sp_message(
 id INT PRIMARY KEY AUTO_INCREMENT,
 title VARCHAR(255),
 ctime DATE,
 img_url VARCHAR(255),
 content VARCHAR(2000)
);
INSERT INTO sp_message VALUES(null,'特价处理','2018-11-10','http://127.0.0.1:3000/img/cm.jpg','章姬草莓特价处理，预购从速');
INSERT INTO sp_message VALUES(null,'双十一预告','2018-10-20','http://127.0.0.1:3000/img/hb.jpg','11.11马上来临，万元红包砸不停');
INSERT INTO sp_message VALUES(null,'活动','2018-11-13','http://127.0.0.1:3000/img/yr.jpg','小猪纳福，童贺新春！小猪班纳羽绒服折上折');
INSERT INTO sp_message VALUES(null,'家电','2018-10-14','http://127.0.0.1:3000/img/jm.jpg','哇，在家造个电影院！12.25极米超级品牌日，家电狂省1000');
INSERT INTO sp_message VALUES(null,'感谢','2018-11-15','http://127.0.0.1:3000/img/ka.jpg','感谢您在商城购物，赠您一张满减卡');
INSERT INTO sp_message VALUES(null,'秒杀','2018-11-10','http://127.0.0.1:3000/img/ju.jpg','砂糖橘5.5元限量秒杀，爆款买2送1');









