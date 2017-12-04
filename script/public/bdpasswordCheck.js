/**
 * 鍓嶇娉ㄥ唽椤甸潰锛屽瘑鐮佸己寮卞垽鏂�
 * 
 * @author jiangchangbing
 * @date 20121017 08:48
 * @param {}object
 *            password鍙傛暟
 * @type flag鏍囧織浣嶈繑鍥炲€煎垎涓轰笁绾�
 *       锛�"red"涓烘瀬鍏跺嵄闄╃殑瀵嗙爜[姣斿锛�1111锛宎aaa,bbbb]锛�"Orange"涓哄瘑鐮佸己搴﹀樊[闀垮害鍦�6浣嶄互涓媇锛�"yellow"瀵嗙爜寮哄害涓€鑸琜绾暟瀛楋紝涓庣函瀛楁瘝]锛�
 */
function checkPassword(object) {
	// 閲嶅鏁板瓧鍜屽瓧姣嶇殑check (姣斿锛�1111111锛�222222锛寁vvvvv,aaaaaaaa)锛岃繑鍥炴爣蹇椾綅涓�"red":鏋佸叾鍗遍櫓鐨勫瘑鐮�
	var digital = /^[0-9]*[1-9][0-9]*$/;
	var zhiMu = /^[A-Za-z]+$/;
	var pwdlegth = "";
	var flag = "";
	if (digital.test(object) || zhiMu.test(object)) {

		var dataLength = object.length;
		var st = object.substring(0, 1);
		switch (dataLength) {
		case 4:
			for ( var i = 0; i < 4; ++i) {
				pwdlegth = pwdlegth + st;
			}
			break;
		case 5:
			for ( var i = 0; i < 5; ++i) {
				pwdlegth = pwdlegth + st;
			}
			break;
		case 6:
			for ( var i = 0; i < 6; ++i) {

				pwdlegth = pwdlegth + st;

			}
			break;
		case 7:
			for ( var i = 0; i < 7; ++i) {

				pwdlegth = pwdlegth + st;

			}
			break;
		case 8:
			for ( var i = 0; i < 8; ++i) {

				pwdlegth = pwdlegth + st;

			}
			break;
		case 9:
			for ( var i = 0; i < 9; ++i) {

				pwdlegth = pwdlegth + st;

			}
			break;
		case 10:
			for ( var i = 0; i < 10; ++i) {

				pwdlegth = pwdlegth + st;

			}
			break;
		case 11:
			for ( var i = 0; i < 11; ++i) {

				pwdlegth = pwdlegth + st;

			}
			break;
		case 12:
			for ( var i = 0; i < 12; ++i) {

				pwdlegth = pwdlegth + st;

			}
			break;
		case 13:
			for ( var i = 0; i < 13; ++i) {

				pwdlegth = pwdlegth + st;

			}
			break;
		case 14:
			for ( var i = 0; i < 14; ++i) {

				pwdlegth = pwdlegth + st;

			}
		case 15:
			for ( var i = 0; i < 15; ++i) {

				pwdlegth = pwdlegth + st;

			}
		default:
			// 淇濈暀;
		}
		if (object == pwdlegth) {
			flag = "red";
		}
	}
	// 鐗规畩瀵嗙爜瀛楀吀琛�
	var SpecialFlag = checkSpecialString(object);
	if (SpecialFlag == "red") {
		flag = "red";
	}
	// 鏅€氬瘑鐮佺殑绾у埆楠岃瘉
	var result = getResult(object);
	var resultStr = check(result);
	if(flag!="red"){
		
		if (resultStr == "orange") {
			flag = resultStr
		}
		if (resultStr == "yellow") {
			flag = resultStr;
		}
	}

	return (flag);
}
/**
 * 鐗规畩瀵嗙爜寮哄急鍒ゆ柇
 * 
 * @author jiangchangbing
 * @date 20121017 08:48
 * @param {}object
 *            password鍙傛暟
 */
function checkSpecialString(object) {
	// 鐗规畩瀵嗙爜瀛楀吀琛� 锛堟瘮濡�0011,1122,123456,123456789锛夎繑鍥炴爣蹇椾綅涓�"red":鏋佸叾鍗遍櫓鐨勫瘑鐮�
	var re = "";
	var checkPassword = [ '1234', '2345', '4567', '5678', '2345', '3456',
			'4567', '5678', '6789', '1122', '2233', '3344', '4455', '5566',
			'6677', '7788', '8899', '0011', '123456', '12345', '1234567', '12345678',
			'123456789	', '123456789', '23456', '34567', '56789', '234567',
			'345678', '456789', '56789', '0001111', '111222', '222333',
			'333444', '444555', '666777', '555666', '777888', '999000',
			'000111', 'qwer', '4321', '54321', '654321', '7654321', '87654321',
			'987654321', '112233',
			'22334455', '33445566', '44556677', '55667788', '66778899',
			'123abc', '123qwe', '123123', '234234', '123abc',
			'000222', 'abcd', 'abcde', 'abcdef', 'aabb', 'ccdd', 'eeff',
			'ddff', 'bbhh', 'ccff', 'aaee', '1112', '1113', '1114', '1115',
			'1116', '1117', '1118', '1119', '2220', '2221', '11aa',
			'11bb', '11cc', '11qq', '11ww', '11ee', '11rr', '11tt',
			'11yy', '11uu', '11oo', '11pp', '11dd', '11ff', '11gg',
			'11hh', '11jj', '11kk', '11ll', '11zz', '11xx', '11cc',
			'11vv', '11nn', '11mm', '22qq', '22ww', '22ee',
			'22rr', '22tt', '22yy', '22uu', '22ii', '22oo',
			'22pp', '22aa', '22ss', '22dd', '22ff', '22gg',
			'22hh', '22jj', '22kk', '22ll', '22zz', '22xx', '22cc',
			'22vv', '22bb', '22nn', '22mm', '33qq', '33ww', '33ee',
			'33rr', '33yy', '33uu', '33ii', '33oo', '33pp',
			'33aa', '33ss', '33dd', '33ff', '33gg', '33hh',
			'33jj', '33kk', '33ll', '33zz', '33xx', '33cc',
			'33bb', '33nn', '33mm', '44tt','44qq', '44ww', '44ee', '44rr', '44yy', '44uu', '44ii', '44oo', '44pp',
			'44aa', '44ss', '44dd', '44ff', '44gg', '44hh',
			'44jj', '44kk', '44ll', '44zz', '44xx', '44cc',
			'44vv', '44bb', '44nn', '44mm','55tt','55qq', '55ww', '55ee', '55rr', '55yy', '55uu', '55ii', '55oo', '55pp',
			'55aa', '55ss', '55dd', '55ff', '55gg', '55hh',
			'55jj', '55kk', '55ll', '55zz', '55xx', '55cc',
			'55vv', '55bb', '55nn', '55mm', '66tt','66qq', '66ww', '66ee', '66rr', '66yy', '66uu', '66ii', '66oo', '66pp',
			'66aa', '66ss', '66dd', '66ff', '66gg', '66hh',
			'66jj', '66kk', '66ll', '66zz', '66xx', '66cc',
			'66vv', '66bb', '66nn', '66mm', '77tt','77qq', '77ww', '77ee', '77rr', '77yy', '77uu', '77ii', '77oo', '77pp',
			'77aa', '77ss', '77dd', '77ff', '77gg', '77hh',
			'77jj', '77kk', '77ll', '77zz', '77xx', '77cc',
			'77vv', '77bb', '77nn', '77mm', '88tt','88qq', '88ww', '88ee', '88rr', '88yy', '88uu', '88ii', '88oo', '88pp',
			'88aa', '88ss', '88dd', '88ff', '88gg', '88hh',
			'88jj', '88kk', '88ll', '88zz', '88xx', '88cc',
			'88vv', '88bb', '88nn', '88mm', '99tt','99qq', '99ww', '99ee', '99rr', '99yy', '99uu', '99ii', '99oo', '99pp',
			'99aa', '99ss', '99dd', '99ff', '99gg', '99hh',
			'99jj', '99kk', '99ll', '99zz', '99xx', '99cc',
			'99vv', '99bb', '99nn', '99mm', '00tt','00qq', '00ww', '00ee', '00rr', '00yy', '00uu', '00ii', '00oo', '00pp',
			'00aa', '00ss', '00dd', '00ff', '00gg', '00hh',
			'00jj', '00kk', '00ll', '00zz', '00xx', '00cc',
			'00vv', '00bb', '00nn', '00mm', 'tt11','qq11', 'ww11', 'ee11', 'rr11', 'yy11', 'uu11', 'ii11', 'oo11', 'pp11',
			'aa11', 'ss11', 'dd11', 'ff11', 'gg11', 'hh11',
			'jj11', 'kk11', 'll11', 'zz11', 'xx11', 'cc11',
			'vv11', 'bb11', 'nn11', 'mm11', 'tt22','qq22', 'ww22', 'ee22', 'rr22', 'yy22', 'uu22', 'ii22', 'oo22', 'pp22',
			'aa22', 'ss22', 'dd22', 'ff22', 'gg22', 'hh22',
			'jj22', 'kk22', 'll22', 'zz22', 'xx22', 'cc22',
			'vv22', 'bb22', 'nn22', 'mm22', 'tt33','qq33', 'ww33', 'ee33', 'rr33', 'yy33', 'uu33', 'ii33', 'oo33', 'pp33',
			'aa33', 'ss33', 'dd33', 'ff33', 'gg33', 'hh33',
			'jj33', 'kk33', 'll33', 'zz33', 'xx33', 'cc33',
			'vv33', 'bb33', 'nn33', 'mm33', 'tt44','qq44', 'ww44', 'ee44', 'rr44', 'yy44', 'uu44', 'ii44', 'oo44', 'pp44',
			'aa44', 'ss44', 'dd44', 'ff44', 'gg44', 'hh44',
			'jj44', 'kk44', 'll44', 'zz44', 'xx44', 'cc44',
			'vv44', 'bb44', 'nn44', 'mm44', 'tt55','qq55', 'ww55', 'ee55', 'rr55', 'yy55', 'uu55', 'ii55', 'oo55', 'pp55',
			'aa55', 'ss55', 'dd55', 'ff55', 'gg55', 'hh55',
			'jj55', 'kk55', 'll55', 'zz55', 'xx55', 'cc55',
			'vv55', 'bb55', 'nn55', 'mm55', 'tt66','qq66', 'ww66', 'ee66', 'rr66', 'yy66', 'uu66', 'ii66', 'oo66', 'pp66',
			'aa66', 'ss66', 'dd66', 'ff66', 'gg66', 'hh66',
			'jj66', 'kk66', 'll66', 'zz66', 'xx66', 'cc66',
			'vv66', 'bb66', 'nn66', 'mm66', 'tt77','qq77', 'ww77', 'ee77', 'rr77', 'yy77', 'uu77', 'ii77', 'oo77', 'pp77',
			'aa77', 'ss77', 'dd77', 'ff77', 'gg77', 'hh77',
			'jj77', 'kk77', 'll77', 'zz77', 'xx77', 'cc77',
			'vv77', 'bb77', 'nn77', 'mm77', 'tt88','qq88', 'ww88', 'ee88', 'rr88', 'yy88', 'uu88', 'ii88', 'oo88', 'pp88',
			'aa88', 'ss88', 'dd88', 'ff88', 'gg88', 'hh88',
			'jj88', 'kk88', 'll88', 'zz88', 'xx88', 'cc88',
			'vv88', 'bb88', 'nn88', 'mm88', 'tt99','qq99', 'ww99', 'ee99', 'rr99', 'yy99', 'uu99', 'ii99', 'oo99', 'pp99',
			'aa99', 'ss99', 'dd99', 'ff99', 'gg99', 'hh99',
			'jj99', 'kk99', 'll99', 'zz99', 'xx99', 'cc99',
			'vv99', 'bb99', 'nn99', 'mm99', 'tt00','qq00', 'ww00', 'ee00', 'rr00', 'yy00', 'uu00', 'ii00', 'oo00', 'pp00',
			'aa00', 'ss00', 'dd00', 'ff00', 'gg00', 'hh00',
			'jj00', 'kk00', 'll00', 'zz00', 'xx00', 'cc00',
			'vv00', 'bb00', 'nn00', 'mm00','zhuzhengdong','maozedong','yaoyizhe','xijingping','yuqian'];

	$.each(checkPassword, function(key, val) {
		// 鍥炶皟鍑芥暟鏈変袱涓弬鏁�,绗竴涓槸鍏冪礌绱㈠紩,绗簩涓负褰撳墠鍊�
		// alert('_mozi鏁扮粍涓� ,绱㈠紩 : '+key+' 瀵瑰簲鐨勫€间负: '+val);
		if (object == val) {
			re = "red";
		}
	});

	return (re);

}

function getResult(value) {
	if (value.length < 7) {
		return 0;
	}
	var i = 0;
	if (value.match(/[a-z]/ig)) {
		i++;
	}
	if (value.match(/[0-9]/ig)) {
		i++;
	}

	return i;
}
function check(num) {
	var flag = "";
	if (num == 0) {
		flag = "orange";

	} else if (num == 1) {
		flag = "yellow";

	}

	return (flag);

}
