/**
 * 小数点后面保留第 n 位
 *
 * @param x 做近似处理的数
 * @param n 小数点后第 n 位
 * @returns 近似处理后的数 
 */
/* global Rectangle: true */
$(function() {
  var $width = $('#width');
  var $height = $('#height');
  var $area = $('#area');
  $btnCal.click(function(){
    var w = $width.val(),
        h = $height.val();
    var r = new Rectangle(w,h);
    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
});
