require! 'livescript'

LiveScriptPlugin = (options) ->
  name: 'livescript'
  transform: (src, id) ->
    if /\.ls$/.test id
     code = livescript.compile src, options

    code: code

module.exports = LiveScriptPlugin