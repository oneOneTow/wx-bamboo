export function showModel(title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}
