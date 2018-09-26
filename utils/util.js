export const getSystemInfo = () => {
    return new Promise((resolve, reject) => {
        wx.getSystemInfo({
            success: res => {
                resolve(res)
            },
            fail: err => {
                reject(err)
            }
        })
    })
}

export const getImageInfo = (src) => {
    return new Promise((resolve, reject) => {
        wx.getImageInfo({
            src: src,
            success: resolve,
            fail: (err) => {
                console.log(src, err)
                reject(err)
            }
        })
    })
}

export const saveImageToPhotosAlbum = (obj) => {
    return new Promise((success, fail) => {
        wx.saveImageToPhotosAlbum({
            ...obj,
            success,
            fail
        })
    })
}

export const canvasToTempFilePath = (config) => {
    return new Promise((resolve, reject) => {
        // 安卓上这个回调毛用都没有啊
        // 所以用个setTimeout，否则不会写这么蠢的代码
        // 辣鸡小程序！！
        setTimeout(() => {
            wx.canvasToTempFilePath({
                x: config.x,
                y: config.y,
                width: config.width,
                height: config.height,
                destWidth: config.destWidth,
                destHeight: config.destHeight,
                canvasId: config.canvasId,
                success: res => {
                    resolve(res)
                },
                fail: err => {
                    reject(err)
                }
            })
        }, 1000)
    })
}

export const log = {
    error (title = '') {
        wx.showToast({
            title,
            icon: 'none'
        })
    },
    info (title = '') {
        wx.showToast({
            title,
            icon: 'none'
        })
    },
    success (title = '') {
        wx.showToast({
            title
        })
    },
    loading (title = '') {
        wx.showLoading({
            title
        })
        wx.showNavigationBarLoading()
    },
    hideLoading () {
        wx.hideLoading()
        wx.hideNavigationBarLoading()
    }
}
