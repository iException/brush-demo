import Brush from '../../utils/brush.js'
import {
    getSystemInfo,
    getImageInfo
} from '../../utils/util.js'
Page({
    onShow () {

            this.brush = new Brush ('canvas1')
            /*
            * 绘画完毕后要将绘画的内容显示出来的话最后一定要记得调用draw()
            * */
            /*
            * 绘制矩形路径并填充红色
            * */
            this.brush.setFontSize(36).setFillStyle('#FF4466').setTextAlign('center').setTextBaseline('top').fillText('绘制矩形路径并填充红色', 375, 10)
                .rect(50, 80, 600, 150).setFillStyle('#FF4466').fill().draw()

            /*
           * 绘制圆形路径并填充蓝色
           * */
            this.brush.setFontSize(36).setFillStyle('blue').setTextAlign('center').setTextBaseline('top').fillText('绘制矩形路径并填充红色', 375, 280)
                .arc(375, 400, 50, 0, 2 * Math.PI, true).setFillStyle('blue').fill().draw()

            getImageInfo('https://file.baixing.net/201805/95c1030a8261067dd3ec0ee8cee1f3b8.png').then(res => {

            /*
        * 将网络图片绘制到画布上（这里需要注意，在生产环境，即小程序发布，网络图片域名需要添加到白名单中，否则无法加载出来）
        * */

            this.brush.setFontSize(36).setFillStyle('purple').setTextAlign('center').setTextBaseline('top').fillText('将图片绘制到画布上', 375, 490)
                .drawImage(res.path, 0, 0, res.width, res.height, 175, 550, 400, 400).draw()

            /*
            * 绘制圆形图片
            * */

            /*
            * drawRoundImage([350, 1200, 100, 0, Math.PI * 2], [res.path, 0, 0, res.width, res.height, 250, 1100, 200, 200])
            * 里面参数分别为，数组1=[圆心位置x坐标，Y坐标，半径大小，起始弧度，终止弧度],
            * 数组2=[图片地址，源图片裁剪的起始X坐标，Y坐标，从起始X坐标裁剪的宽度，Y坐标裁剪的高度，画在画布上的X坐标，Y坐标，画布上的宽度，画布上的高度]
            * */

            this.brush.setFontSize(36).setFillStyle('purple').setTextAlign('center').setTextBaseline('top').fillText('将方形图片在画布上绘制成圆形', 375, 1000)

                .drawRoundImage([350, 1200, 100, 0, Math.PI * 2], [res.path, 0, 0, res.width, res.height, 250, 1100, 200, 200]).draw()

            /*
            * 将方形图绘制成圆角图片
            * */

            /*
            * drawRoundRectImage([175, 1500, 400, 400, 80], [res.path, 0, 0, res.width, res.height, 175, 1500, 400, 400])
            * 数组1=【在画布上的X坐标，Y坐标，宽，高，圆角弧度]
            * 数组2=[图片地址，源图片裁剪的起始X坐标，Y坐标，从起始X坐标裁剪的宽度，Y坐标裁剪的高度，画在画布上的X坐标，Y坐标，画布上的宽度，画布上的高度]
            * */

            this.brush.setFontSize(36).setFillStyle('purple').setTextAlign('center').setTextBaseline('top').fillText('将方形图片在画布上绘制成圆角图', 375, 1400)
                .drawRoundRectImage([175, 1500, 400, 400, 80], [res.path, 0, 0, res.width, res.height, 175, 1500, 400, 400]).draw()
        })
    }
})
