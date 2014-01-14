var shell = require('nw.gui').Shell
var spawn = require('child_process').spawn
var exec = require('child_process').exec, child
var fs = require('fs')
var path = require('path')

function chooseFile(name) {
  var chooser = document.querySelector(name)
  chooser.addEventListener("change", function(evt) {
    console.log(this.value)
  }, false)

  chooser.click()
}

function runShellCommand(cmd, cb) {
  child = exec(cmd, {cwd: '/Users/zachserre/workspace/ngin'}, function (error, stdout, stderr) {
      cb(error, stdout, stderr) 
  })

}

$(document).ready(function() {

  $('#frmGitRepo').on('submit', function(e) {
    e.preventDefault()
  })  

  $('#btnBrowse').click(function() {
    chooseFile('#fileDialog')
  })

  $('#btnRefreshProjects').click(function() {

    $('#tblCmdContent').addClass('fouc')
  
    runShellCommand('git branch', function(err, stdout, stderr) {
      if (stdout !== "") {
        var tLines = stdout.split('\n') || []
        var cmdHtml = ""
        var curBranch = ""
        if (tLines.length > 0) {

          for(var i = 0; i < tLines.length - 1; i++ ) {
            if(tLines[i].substring(0,1) == "*") {
              cmdHtml = cmdHtml + '<tr><td><span class="greenTxt">' + tLines[i] + '</span></td></tr>'
            } else {
              cmdHtml = cmdHtml + '<tr><td>' + tLines[i] + '</td></tr>'
            }
            
          }
          $('#tblCmdContent').html('<thead><th>Branches</th></thead><tbody>'  + cmdHtml + '</tbody')
          $('#tblCmdContent').removeClass('fouc')
        }
      }
    })
  })
})
