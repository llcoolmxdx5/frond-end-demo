export default function Active(req, res) {
  let url = req.route // index
  $('#menu-container').find('li').find(`a[href='#${url}']`).
    parent().addClass('active').siblings().removeClass('active')
}