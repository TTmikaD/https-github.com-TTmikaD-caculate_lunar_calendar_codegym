function caculate_years() {
  let value = document.getElementById('value_years').value;
  let value_nunber = parseInt(value_years);
  let value_nunber_can = value_nunber % 10;
  let value_nunber_chi = value_nunber % 12;
  switch (value_nunber_can) {
    case 0:
      value_nunber_can = 'canh';
      break;
    case 1:
      value_nunber_can = 'tân';
      break;
    case 2:
      value_nunber_can = 'nhâm';
      break;
    case 3:
      value_nunber_can = 'quý';
      break;
    case 4:
      value_nunber_can = 'giáp';
      break;
    case 5:
      value_nunber_can = 'ất';
      break;
    case 6:
      value_nunber_can = 'bính';
      break;
    case 7:
      value_nunber_can = 'đinh';
      break;
    case 8:
      value_nunber_can = 'mậu';
      break;
    case 9:
      value_nunber_can = 'kỷ';
      break;
  }
  switch (value_nunber_chi) {
    case 0:
      value_nunber_chi = 'thân';
      break;
    case 1:
      value_nunber_chi = 'dậu';
      break;
    case 2:
      value_nunber_chi = 'tuất';
      break;
    case 3:
      value_nunber_chi = 'hợi';
      break;
    case 4:
      value_nunber_chi = 'tý';
      break;
    case 5:
      value_nunber_chi = 'sửu';
      break;
    case 6:
      value_nunber_chi = 'dần';
      break;
    case 7:
      value_nunber_chi = 'mẹo';
      break;
    case 8:
      value_nunber_chi = 'thìn';
      break;
    case 9:
      value_nunber_chi = 'tỵ';
      break;
    case 10:
      value_nunber_chi = 'ngọ';
      break;
    case 11:
      value_nunber_chi = 'mùi';
      break;
  }
  document.getElementById(
    'show_result'
  ).innerHTML = `năm âm lịch ${value_nunber_can} ${value_nunber_chi}`;
}
